import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Icons } from '@/components/icons';
import { Card } from '@/components/ui/Card';
import { OptimizedAnimatedBackgrounds } from '@/components/OptimizedAnimatedBackgrounds';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Shilpa A Jain\'s journey as a certified numerologist with over 10 years of experience helping individuals find clarity.',
};

export default function AboutPage() {
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
            <span className="text-charcoal font-medium">About</span>
          </nav>
          <h1 className="font-heading text-5xl lg:text-6xl font-bold text-charcoal mb-4">
            About Shilpa A Jain
          </h1>
          <p className="text-xl text-gray-warm max-w-[700px] mx-auto">
            Numerologist & Life Guidance Expert
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-spacing">
        <div className="container-main">
          <div className="grid lg:grid-cols-[400px_1fr] gap-16 items-start">
            {/* Portrait */}
            <div className="aspect-square rounded-lg shadow-md overflow-hidden">
              <Image
                src="/hero-portrait.jpg"
                alt="Shilpa A Jain - Numerologist"
                width={800}
                height={800}
                priority
                className="object-cover w-full h-full"
              />
            </div>

            {/* Bio Content */}
            <div className="text-lg text-gray-warm space-y-6 leading-relaxed">
              <p>
                <strong className="text-charcoal font-semibold">Shilpa A Jain</strong> is a certified numerologist with over 2 years of experience helping individuals discover clarity, purpose, and direction through the ancient science of numbers.
              </p>
              <p>
                Her journey into numerology began with a personal quest for understanding life's patterns and synchronicities. What started as curiosity evolved into a profound calling to help others navigate their own paths with confidence and insight.
              </p>
              <p>
                With a warm, empathetic approach, Shilpa combines traditional numerological principles with practical, modern guidance. Her sessions are known for being both deeply insightful and actionable, providing clients with clarity they can apply to real-life decisions.
              </p>
              <p>
                Beyond individual consultations, Shilpa is passionate about demystifying numerology and making it accessible to everyone. Through her blog and social media, she shares insights, tips, and guidance to help people understand the power of numbers in everyday life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-base">
        <div className="container-main">
          <h2 className="font-heading text-4xl font-semibold text-charcoal text-center mb-12">
            Certifications & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[900px] mx-auto">
            <Card className="text-center">
              <Icons.checkCircle size={64} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-lg text-charcoal mb-2">
                Certified Numerologist
              </h3>
              <p className="text-sm text-gray-muted">
                International Numerology Association
              </p>
            </Card>

            <Card className="text-center">
              <Icons.checkCircle size={64} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-lg text-charcoal mb-2">
                Life Coach Certification
              </h3>
              <p className="text-sm text-gray-muted">
                Certified Life Coach Institute
              </p>
            </Card>

            <Card className="text-center">
              <Icons.checkCircle size={64} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-lg text-charcoal mb-2">
                2+ Years Experience
              </h3>
              <p className="text-sm text-gray-muted">
                50+ Personal Consultations
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-spacing bg-primary-light">
        <div className="container-main">
          <div className="max-w-[800px] mx-auto text-center mb-16">
            <blockquote className="font-accent italic text-3xl lg:text-4xl text-charcoal leading-snug mb-6">
              <span className="text-6xl text-primary opacity-30">"</span>
              Numbers are the language of the universe, revealing patterns and pathways we might otherwise miss.
              <span className="text-6xl text-primary opacity-30">"</span>
            </blockquote>
            <cite className="text-base text-gray-warm not-italic">— Shilpa A Jain</cite>
          </div>

          <div className="max-w-[900px] mx-auto">
            <h3 className="font-heading text-3xl font-semibold text-charcoal text-center mb-8">
              My Approach
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white">
                <Icons.user size={40} className="text-primary mb-4" />
                <h4 className="font-semibold text-lg text-charcoal mb-3">
                  Personal & Empathetic
                </h4>
                <p className="text-base text-gray-warm leading-relaxed">
                  Every session is tailored to your unique journey, with compassion and understanding at its core.
                </p>
              </Card>

              <Card className="bg-white">
                <Icons.checkCircle size={40} className="text-primary mb-4" />
                <h4 className="font-semibold text-lg text-charcoal mb-3">
                  Practical & Actionable
                </h4>
                <p className="text-base text-gray-warm leading-relaxed">
                  Insights you can apply immediately to make confident decisions in your life and career.
                </p>
              </Card>

              <Card className="bg-white">
                <Icons.star size={40} className="text-primary mb-4" />
                <h4 className="font-semibold text-lg text-charcoal mb-3">
                  Empowering & Positive
                </h4>
                <p className="text-base text-gray-warm leading-relaxed">
                  Focused on your strengths and potential, guiding you toward clarity and purpose.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-hover text-white">
        <div className="container-main text-center">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-5">
            Let's Discover Your Path Together
          </h2>
          <p className="text-lg lg:text-xl opacity-90 mb-8 max-w-[600px] mx-auto">
            Book a personalized session and gain the clarity you've been seeking.
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
