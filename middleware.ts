import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const host = request.headers.get("host") || "";

    if (host === "www.antiqueidentifier.site") {
        const url = request.nextUrl.clone();
        url.protocol = "https";
        url.host = "antiqueidentifier.site";
        return NextResponse.redirect(url, 308);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/:path*"],
};
