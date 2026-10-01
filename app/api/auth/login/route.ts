import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { signSession, setSessionCookie } from '@/lib/auth'

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''
  const password = typeof body?.password === 'string' ? body.password : ''

  if (!email || !password) {
    return NextResponse.json({ error: 'Email et mot de passe requis' }, { status: 400 })
  }

  const admin = await prisma.admin.findUnique({ where: { email } })
  if (!admin) {
    return NextResponse.json({ error: 'Identifiants invalides' }, { status: 401 })
  }

  const ok = await bcrypt.compare(password, admin.password)
  if (!ok) {
    return NextResponse.json({ error: 'Identifiants invalides' }, { status: 401 })
  }

  const token = await signSession({ sub: String(admin.id), email: admin.email })
  await setSessionCookie(token)

  return NextResponse.json({ ok: true, email: admin.email })
}
