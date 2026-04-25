import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const BOT_ID = process.env.TELEGRAM_BOT_ID || "";
const CHAT_ID = process.env.TELEGRAM_CHAT_ID || "";

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60_000;
const recentRequests = new Map<string, number[]>();

function getClientIp(request: NextRequest): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const stamps = (recentRequests.get(ip) ?? []).filter((t) => t > windowStart);
  if (stamps.length >= RATE_LIMIT_MAX) {
    recentRequests.set(ip, stamps);
    return true;
  }
  stamps.push(now);
  recentRequests.set(ip, stamps);
  return false;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidUrl(value: string): boolean {
  try {
    const u = new URL(value);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

interface AuditRequestBody {
  name?: unknown;
  email?: unknown;
  websiteUrl?: unknown;
  niche?: unknown;
  hp?: unknown;
}

export async function POST(request: NextRequest) {
  let body: AuditRequestBody;
  try {
    body = (await request.json()) as AuditRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (typeof body.hp === "string" && body.hp.length > 0) {
    return NextResponse.json({ success: true });
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429 }
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const websiteUrl =
    typeof body.websiteUrl === "string" ? body.websiteUrl.trim() : "";
  const niche = typeof body.niche === "string" ? body.niche.trim() : "";

  if (name.length < 2) {
    return NextResponse.json({ error: "Invalid name" }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  if (!isValidUrl(websiteUrl)) {
    return NextResponse.json({ error: "Invalid websiteUrl" }, { status: 400 });
  }
  if (!/^[a-z0-9-]+$/.test(niche)) {
    return NextResponse.json({ error: "Invalid niche" }, { status: 400 });
  }

  const text =
    `🆕 <b>Запит на безкоштовний аудит</b> (UA · niche: ${escapeHtml(niche)})\n\n` +
    `👤 <b>Імʼя:</b> ${escapeHtml(name)}\n` +
    `📧 <b>Email:</b> ${escapeHtml(email)}\n` +
    `🔗 <b>Сайт:</b> ${escapeHtml(websiteUrl)}\n` +
    `🏷️ <b>Ніша:</b> ${escapeHtml(niche)}\n\n` +
    `IP: ${escapeHtml(ip)} | Час: ${new Date().toISOString()}`;

  if (BOT_ID && CHAT_ID) {
    try {
      await axios.post(
        `https://api.telegram.org/bot${BOT_ID}/sendMessage`,
        {
          chat_id: CHAT_ID,
          parse_mode: "HTML",
          text,
        }
      );
    } catch {
      return NextResponse.json(
        { error: "Failed to deliver notification" },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ success: true });
}
