"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/axios';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await api.post('/auth/login', { email, password });
      const token = response.data?.token || response.data?.accessToken || response.data?.data?.token;
      if (!token) {
        throw new Error('Token not returned from API');
      }

      if (typeof window !== 'undefined') {
        window.localStorage.setItem('authToken', token);
      }

      router.push('/admin/dashboard');
    } catch (err: any) {
      setError(err?.response?.data?.message || err?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url(https://picsum.photos/1600/900?blur=3)' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" aria-hidden="true" />
      <main className="relative z-10 w-full max-w-md p-10 rounded-3xl bg-white/90 dark:bg-gray-900/90 shadow-2xl backdrop-blur-md border border-white/30 dark:border-gray-700">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">Login</h1>
        <form onSubmit={onSubmit} className="space-y-6">
          {error && (
            <div className="rounded-lg bg-red-100 text-red-700 px-3 py-2 text-sm text-center">
              {error}
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 text-base font-semibold rounded-xl text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
