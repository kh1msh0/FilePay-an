import { createLocalizedPathnamesNavigation } from "next-intl/navigation"
import { defineRouting } from "next-intl/routing"
import type { NextRequest } from "next/server"

const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "en",
})

const { redirect, getPathname } = createLocalizedPathnamesNavigation(routing)

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = routing.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = "en" // Default locale
  request.nextUrl.pathname = `/${locale}${pathname}`
  return Response.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|_vercel|.*\\..*).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
}
