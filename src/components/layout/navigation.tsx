'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 py-3 overflow-x-auto">
          <Link
            href="/"
            className={cn(
              'px-3 py-1.5 text-sm rounded-full whitespace-nowrap transition-colors',
              pathname === '/'
                ? 'bg-blue-100 text-blue-700 font-medium'
                : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50',
            )}
          >
            Trang chủ
          </Link>
          {siteConfig.navigation.main.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'px-3 py-1.5 text-sm rounded-full whitespace-nowrap transition-colors',
                pathname.startsWith(item.href)
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50',
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
