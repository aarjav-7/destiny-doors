import Link from 'next/link';
import { Icons } from '@/components/icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border" role="contentinfo">
      <div className="container-main py-16 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-charcoal mb-3">
              Shilpa A Jain
            </h3>
            <p className="text-body text-gray-warm leading-relaxed max-w-[300px]">
              Numerologist & Life Guidance Expert helping individuals discover clarity and purpose through numbers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-muted mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/about" className="text-body text-gray-warm hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/services" className="text-body text-gray-warm hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/blog" className="text-body text-gray-warm hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/testimonials" className="text-body text-gray-warm hover:text-primary transition-colors">
                Testimonials
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-muted mb-4">
              Services
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/services#personal" className="text-body text-gray-warm hover:text-primary transition-colors">
                Personal Numerology
              </Link>
              <Link href="/services#career" className="text-body text-gray-warm hover:text-primary transition-colors">
                Career Guidance
              </Link>
              <Link href="/services#relationship" className="text-body text-gray-warm hover:text-primary transition-colors">
                Relationship Compatibility
              </Link>
              <Link href="/services#mobile-number" className="text-body text-gray-warm hover:text-primary transition-colors">
                Name/Mobile Numerology
              </Link>
              <Link href="/services#financial-growth" className="text-body text-gray-warm hover:text-primary transition-colors">
                Finance Numerology
              </Link>
              <Link href="/services#education-study" className="text-body text-gray-warm hover:text-primary transition-colors">
                Education Numerology
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-muted mb-4">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                <Icons.mail size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:hello@shilpaajain.com" className="text-body text-gray-warm hover:text-primary transition-colors">
                  shilpajain.ooty@gmail.com
                </a>
              </div>
              {/* <div className="flex gap-3 items-start">
                <Icons.phone size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+919876543210" className="text-body text-gray-warm hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
