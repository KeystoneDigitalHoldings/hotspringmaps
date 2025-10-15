'use client';

import { useState } from 'react';

export default function WaitlistSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'done'|'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setStatus('loading');
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('done');
      setEmail('');
    } catch (_) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={submit} className="mt-6 flex w-full max-w-md flex-col items-stretch gap-3 sm:flex-row">
      <label htmlFor="email" className="sr-only">Email</label>
      <input
        id="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="h-12 flex-1 rounded-lg border border-gray-300 bg-white px-4 text-gray-900 placeholder-gray-400 focus:border-brand-forest focus:outline-none focus:ring-2 focus:ring-brand-aqua/30"
      />
      <button type="submit" className="btn btn-primary h-12">
        {status === 'loading' ? 'Joining…' : 'Join Waitlist'}
      </button>
      {status === 'done' && <p className="text-sm text-emerald-700">Thanks! You're on the list.</p>}
      {status === 'error' && <p className="text-sm text-red-600">Something went wrong. Try again.</p>}
    </form>
  );
}
