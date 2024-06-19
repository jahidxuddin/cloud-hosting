import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { messageSchema } from "./lib/schema";

export async function middleware(request: NextRequest) {
  const tokenCookie = request.cookies.get("token");
  if (!tokenCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const token = tokenCookie.value;

  try {
    const res = await fetch(`${process.env.API_BASE_URL}/auth/verify/${token}`);
    const data = await res.json();

    const messageValidation = messageSchema.safeParse(data);
    if (messageValidation.error) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/service/:path*"],
};
