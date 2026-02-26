import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // So layout and JsonLd get the real path for canonical, alternates, and breadcrumbs
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  const modifiedRequest = new NextRequest(request.url, {
    headers: requestHeaders,
  });

  const response = intlMiddleware(modifiedRequest);

  // If next-intl redirected (e.g. locale redirect), return as-is
  if (response.status === 307 || response.status === 308) {
    return response;
  }

  return response;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
