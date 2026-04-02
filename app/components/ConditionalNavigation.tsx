"use client";

import { usePathname } from 'next/navigation';
import Navigation from './Navigation';

const ConditionalNavigation = () => {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  if (isAdmin) {
    return null;
  }

  return <Navigation />;
};

export default ConditionalNavigation;