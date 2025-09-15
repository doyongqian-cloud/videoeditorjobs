import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function POST(request: Request) {
  try {
    const { access_token, refresh_token } = await request.json()

    if (!access_token) {
      return NextResponse.json({ error: 'missing_access_token' }, { status: 400 })
    }

    // Prepare response so we can attach cookies to it
    const response = NextResponse.json({ ok: true })

    // Create a server client that writes cookies onto the response
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            // We don't need incoming cookies for this endpoint
            return []
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              response.cookies.set(name, value, options)
            })
          },
        },
      }
    )

    const { data, error } = await supabase.auth.setSession({
      access_token,
      refresh_token: refresh_token ?? '',
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 401 })
    }

    // include user id for debugging
    response.headers.set('x-supabase-user', data.user?.id ?? '')
    return response
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? 'unknown_error' }, { status: 500 })
  }
}


