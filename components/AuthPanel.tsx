'use client';

import { useState } from 'react';
import { supabase } from '../lib/supabase-browser';

export default function AuthPanel() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'sent'|'error'>('idle');
  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  const signInWithEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${origin}/account` }
    });
    if (error) return setStatus('error');
    setStatus('sent');
  };

  const signInWithGoogle = async () => {
    setStatus('loading');
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${origin}/account` }
    });
    if (error) setStatus('error');
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  return (
    <div className="card max-w-md">
      <h2 className="text-xl font-semibold text-brand-forest">Sign in</h2>

      <form onSubmit={signInWithEmail} className="mt-4 flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="you@example.com"
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-brand-forest focus:outline-none"
        />
        <button className="btn btn-primary" disabled={status==='loading'}>
          Email Link
        </button>
      </form>

      <div className="mt-4">
        <button
          onClick={signInWithGoogle}
          className="btn btn-secondary w-full"
          disabled={status==='loading'}
        >
          Continue with Google
        </button>
      </div>

      {status==='sent'  && <p className="mt-3 text-sm text-emerald-700">Check your email for the magic link.</p>}
      {status==='error' && <p className="mt-3 text-sm text-red-600">Something went wrong. Try again.</p>}

      <div className="mt-6">
        <button onClick={signOut} className="text-sm underline">Sign out</button>
      </div>
    </div>
  );
}
