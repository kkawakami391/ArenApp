export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    /*
     * Protect all routes except:
     * - / (home/landing page)
     * - /login
     * - /signup
     * - /api/auth/* (NextAuth internal routes)
     * - /_next/* (Next.js internals)
     * - /favicon.ico, /public files
     */
    "/((?!$|login|signup|api/auth|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp)).*)",
  ],
};
