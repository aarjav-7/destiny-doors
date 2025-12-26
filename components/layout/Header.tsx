'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Testimonials', href: '/testimonials' },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-base/92 backdrop-blur-md border-b border-border transition-all duration-400',
        isScrolled && 'shadow-sm'
      )}
    >
      <div className="container-main flex justify-between items-center py-5">
        {/* Logo */}
        <Link href="/" className="font-heading text-2xl font-bold text-charcoal">
          Shilpa A Jain
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8" role="navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-body text-gray-warm hover:text-primary transition-colors relative',
                pathname === item.href && 'text-primary font-medium after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-primary'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden lg:block">
          <Link href="/book">
            <Button>Book Session</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center border border-border rounded-lg"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <Icons.close size={20} /> : <Icons.menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-base z-50 p-6 overflow-y-auto">
          <nav className="flex flex-col gap-6" role="navigation" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'font-heading text-2xl text-charcoal',
                  pathname === item.href && 'text-primary'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/book" className="block w-full mt-6">
              <Button className="w-full">Book Session</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
