import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/sanityClient";

export async function POST(req: NextRequest) {
  try {
    const { query, params } = await req.json();

    if (!query || typeof query !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid query" },
        { status: 400 }
      );
    }

    const data = await client.fetch(query, params || {});
    return NextResponse.json(data);
  } catch (error) {
    // Улучшенная обработка ошибок для отладки
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Sanity query failed:", errorMessage, error);
    return NextResponse.json(
      {
        error: "Sanity query failed",
        details: process.env.NODE_ENV === "development" ? errorMessage : undefined,
      },
      { status: 500 }
    );
  }
}
