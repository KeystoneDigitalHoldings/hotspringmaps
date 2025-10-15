import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  const { email } = body || {}
  // In production, forward to MailerLite/SendGrid or Supabase
  console.log('Waitlist email:', email)
  return NextResponse.json({ ok: true })
}
