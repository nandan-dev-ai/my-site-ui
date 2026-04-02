"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Login from './login';

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const token = typeof window !== 'undefined' ? window.localStorage.getItem('authToken') : null;
    if (token) {
      router.push('/admin/dashboard');
    }
  }, [router]);

  return <Login />;
}
