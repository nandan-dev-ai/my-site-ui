import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Finance',
  description: 'Finance product workspace',
};

export default function FinanceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}