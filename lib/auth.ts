import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'

const COOKIE_NAME = process.env.AUTH_COOKIE_NAME || 'watwaniya_session'
const SECRET = new TextEncoder().encode(
  process.env.AUTH_SECRET || 'dev-only-insecure-secret-change-me'
)
const MAX_AGE = 60 * 60 * 24 * 7

export type SessionPayload = { sub: string; email: string }

export async function signSession(payload: SessionPayload): Promise<string> {
  return await new SignJWT({ email: payload.email })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(payload.sub)
    .setIssuedAt()
    .setExpirationTime(`${MAX_AGE}s`)
    .sign(SECRET)
}

export async function verifySession(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET)
    if (!payload.sub || typeof payload.email !== 'string') return null
    return { sub: payload.sub, email: payload.email }
  } catch {
    return null
  }
}

export async function getSession(): Promise<SessionPayload | null> {
  const token = (await cookies()).get(COOKIE_NAME)?.value
  if (!token) return null
  return verifySession(token)
}

export async function setSessionCookie(token: string): Promise<void> {
  ;(await cookies()).set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: MAX_AGE,
  })
}

export async function clearSessionCookie(): Promise<void> {
  ;(await cookies()).delete(COOKIE_NAME)
}

export const AUTH_COOKIE = COOKIE_NAME
