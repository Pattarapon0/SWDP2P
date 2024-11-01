import { NextResponse } from "next/server";
import { auth } from "@/auth";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico|public).*)"],
};

export async function middleware(req: Request) {
  const session = await auth();
  const { pathname } = new URL(req.url);

  if (!session && pathname !== "/" && !pathname.includes("/images")) {
    const callbackUrl = encodeURIComponent(pathname);
    return NextResponse.redirect(
      new URL(`/api/auth/signin?callbackUrl=${callbackUrl}`, req.url)
    );
  }
  if (
    session?.user.role?.toLowerCase() !== "admin" &&
    (pathname === "/campground/edit/[id]" || pathname === "/campground/create")
  ) {
    return NextResponse.redirect(new URL("/campground", req.url));
  }
  return NextResponse.next();
}
