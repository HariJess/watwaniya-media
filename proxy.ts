import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const COOKIE_NAME = process.env.AUTH_COOKIE_NAME || 'watwaniya_session'
const SECRET = new TextEncoder().encode(
  process.env.AUTH_SECRET || 'dev-only-insecure-secret-change-me',
)

export async function proxy(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value
  const url = req.nextUrl

  const isLoginPage = url.pathname === '/admin/login'
  let authenticated = false

  if (token) {
    try {
      await jwtVerify(token, SECRET)
      authenticated = true
    } catch {
      authenticated = false
    }
  }

  if (!authenticated && !isLoginPage) {
    const loginUrl = url.clone()
    loginUrl.pathname = '/admin/login'
    loginUrl.searchParams.set('from', url.pathname)
    return NextResponse.redirect(loginUrl)
  }

  if (authenticated && isLoginPage) {
    const adminUrl = url.clone()
    adminUrl.pathname = '/admin'
    adminUrl.searchParams.delete('from')
    return NextResponse.redirect(adminUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
