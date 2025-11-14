import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const publicRoutes = ["/", "/login"];

    if (publicRoutes.includes(pathname)) {
        return NextResponse.next();
    }

    // if (pathname.startsWith("/_next") || pathname.includes(".")) {
    //     return NextResponse.next();
    // }


    // const accessToken = request.cookies.get("accessToken")?.value;
    // const refreshToken = request.cookies.get("refreshToken")?.value;


    // if (!accessToken || !refreshToken) {
    //     const loginUrl = new URL("/login", request.url);
    //     loginUrl.searchParams.set("redirect", pathname);
    //     return NextResponse.redirect(loginUrl);
    // }




    return NextResponse.next();



}


export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};