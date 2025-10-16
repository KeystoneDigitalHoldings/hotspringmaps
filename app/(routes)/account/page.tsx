'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabase-browser';
import AuthPanel from '../../../components/AuthPanel';

export default function AccountPage() {
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getSession();
      setEmail(data.session?.user?.email ?? null);

      const { data: sub } = supabase.auth.onAuthStateChange((_evt, session) => {
        setEmail(session?.user?.email ?? null);
      });

      setLoading(false);
      return () => sub.subscription.unsubscribe();
    };
    init();
  }, []);

  if (loading) return <p className="text-gray-600">Loading…</p>;

  if (!email) {
    return (
      <section className="grid gap-6">
        <h1 className="text-3xl font-semibold text-brand-forest">Your Account</h1>
        <AuthPanel />
      </section>
    );
  }

  return (
    <section className="grid gap-6">
      <h1 className="text-3xl font-semibold text-brand-forest">Your Account</h1>
      <div className="card">
        <p>Signed in as <strong>{email}</strong></p>
      </div>
    </section>
  );
}
