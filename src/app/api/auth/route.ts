import { supabase } from '../../../../utils/supabase/supabaseClient';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email } = await req.json();

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/nisena-agent-onboarding`,
    },
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ message: 'Check your email for the login link!' });
}
