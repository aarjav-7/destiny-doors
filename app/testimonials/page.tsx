import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Icons } from '@/components/icons';
import { OptimizedAnimatedBackgrounds } from '@/components/OptimizedAnimatedBackgrounds';
import { getAllTestimonials } from '@/lib/testimonials';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Read what clients say about their numerology sessions with Shilpa A Jain.',
};

export default function TestimonialsPage() {
  const testimonials = getAllTestimonials();

  return (
    <>
      {/* Animated Backgrounds */}
      <OptimizedAnimatedBackgrounds />
      
      {/* Page Hero */}
      <section className="py-16 bg-secondary">
        <div className="container-main text-center">
          <nav className="mb-4 text-sm">
            <Link href="/" className="text-gray-muted hover:text-primary">Home</Link>
            <span className="mx-2 text-gray-muted">/</span>
            <span className="text-charcoal font-medium">Testimonials</span>
          </nav>
          <h1 className="font-heading text-5xl lg:text-6xl font-bold text-charcoal mb-4">
            Client Experiences
          </h1>
          <p className="text-xl text-gray-warm max-w-[700px] mx-auto">
            Real stories from people who've found clarity through numerology
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-spacing">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} hover={false} className="bg-base border-none flex flex-col">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="font-semibold text-charcoal">{testimonial.name}</h3>
                  <p className="text-sm text-gray-muted">{testimonial.location}</p>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icons.star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>

                {/* Service */}
                <p className="text-xs text-primary bg-primary-light px-2 py-1 rounded inline-block self-start mb-4">
                  {testimonial.service}
                </p>

                {/* Quote */}
                <blockquote className="font-accent italic text-lg text-gray-warm leading-relaxed flex-grow">
                  "{testimonial.quote}"
                </blockquote>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-hover text-white">
        <div className="container-main text-center">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-5">
            Ready to Experience the Clarity?
          </h2>
          <p className="text-lg lg:text-xl opacity-90 mb-8 max-w-[600px] mx-auto">
            Join hundreds of satisfied clients who've found their path through numerology.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-medium bg-white text-primary rounded-lg hover:bg-base transition-all duration-200 hover:scale-105"
          >
            Book Your Session
          </Link>
        </div>
      </section>
    </>
  );
}
