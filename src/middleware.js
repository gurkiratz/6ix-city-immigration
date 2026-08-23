import { NextResponse } from "next/server";

// Gates the immigration admin tool behind Supabase Auth.
//
// IMPORTANT: this is a cheap, cookie-*presence* check only — it does not
// cryptographically verify the session. That's deliberate: constructing a
// real Supabase client here (in Next.js Edge Middleware) pulls in
// @supabase/realtime-js, which throws at startup on Next 12's Edge runtime
// (no WebSocket support). The REAL, verified check
// (`supabase.auth.getUser()`) happens server-side in each admin API route
// (see src/utils/supabaseServerAuth.js) — that's the actual security
// boundary. This middleware only exists so a signed-out visitor gets
// redirected to the login page instead of briefly seeing the empty
// dashboard shell before its data fetches all 401.
//
// /admin/login itself, and the public /intake/[token] page + its API routes
// (get-public-form, update-public-form, update-client-document-status), are
// intentionally NOT matched below — clients fill out their intake form and
// check off their own document checklist without logging in.
export function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  // req.cookies is a Map on this Next.js version (not the RequestCookies
  // class with .getAll() from newer Next releases).
  const hasSupabaseSessionCookie = [...req.cookies.keys()].some(
    (name) => name.startsWith("sb-") && name.includes("-auth-token")
  );

  if (hasSupabaseSessionCookie) {
    return NextResponse.next();
  }

  const isApiRequest = pathname.startsWith("/api/");

  if (isApiRequest) {
    // Next 12's middleware runtime doesn't support a response body here, so
    // this comes back empty — client code only needs the 401 status. The
    // API route itself would also reject this request for real; returning
    // early here just saves the round-trip.
    return new NextResponse(null, { status: 401 });
  }

  const loginUrl = new URL("/admin/login", req.url);
  loginUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/immigration/get-files",
    "/api/immigration/get-file-detail",
    "/api/immigration/create-file",
    "/api/immigration/update-file-status",
    "/api/immigration/update-task",
    "/api/immigration/update-document",
    "/api/immigration/add-custom-document",
    "/api/immigration/delete-document",
    "/api/immigration/update-form-sections",
  ],
};
