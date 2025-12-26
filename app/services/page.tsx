import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Icons } from '@/components/icons';
import { OptimizedAnimatedBackgrounds } from '@/components/OptimizedAnimatedBackgrounds';
import { getAllServices, getAdditionalServices } from '@/lib/services';
export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore personalized numerology services including personal sessions, career guidance, and relationship compatibility readings.',
};

export default function ServicesPage() {
  const services = getAllServices();
  const additionalServices = getAdditionalServices();

  const steps = [
    {
      number: 1,
      title: 'Book Your Session',
      description: 'Choose your service and select a convenient time slot that works for you.',
    },
    {
      number: 2,
      title: 'Share Your Details',
      description: 'Provide your birth date and specific areas of focus via whatsapp.',
    },
    {
      number: 3,
      title: 'Receive Guidance',
      description: 'Join the session and receive personalized insights with actionable recommendations.',
    },
  ];

  const faqs = [
    {
      question: 'What information do I need to provide?',
      answer: 'You need your full birth date (day, month, year) and full legal name. For relationship readings, you also need your partner information.',
    },
    {
      question: 'How should I prepare for the session?',
      answer: 'Come with specific questions or areas you would like to explore. Have a notebook ready to take notes during our conversation.',
    },
    {
      question: 'Will I receive a written report?',
      answer: 'Yes, all sessions include a personalized PDF report summarizing the key insights and recommendations from your session.',
    },
    {
      question: 'Can I reschedule if needed?',
      answer: 'Yes, you can reschedule up to 24 hours before your appointment. Please contact us as soon as possible if you need to change your time.',
    },
  ];

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
            <span className="text-charcoal font-medium">Services</span>
          </nav>
          <h1 className="font-heading text-5xl lg:text-6xl font-bold text-charcoal mb-4">
            Personalized Numerology Services
          </h1>
          <p className="text-xl text-gray-warm max-w-[700px] mx-auto">
            Choose the session that aligns with your journey
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
            {services.map((service) => (
              <Card key={service.id} id={service.id} className="flex flex-col">
                <h2 className="font-heading text-2xl font-semibold text-charcoal mb-3">
                  {service.title}
                </h2>
                <p className="text-base text-gray-warm mb-6 leading-relaxed">
                  {service.description}
                </p>

                <Link href="/book" className="mt-auto block w-full">
                  <Button className="w-full">Book This Session</Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="section-spacing bg-secondary">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-warm max-w-[600px] mx-auto">
              Specialized numerology guidance for specific areas of your life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center">
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-warm mb-4">
                  {service.description}
                </p>
                <Link href="/book" className="block w-full">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary">
        <div className="container-main">
          <h2 className="font-heading text-4xl font-semibold text-charcoal text-center mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-12 max-w-[1000px] mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="text-center relative">
                {/* Connector Arrow (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-[-48px] top-10 text-3xl text-primary">
                    →
                  </div>
                )}

                <div className="w-20 h-20 rounded-full bg-primary text-white font-heading text-4xl font-bold flex items-center justify-center mx-auto mb-6 shadow-md">
                  {step.number}
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-base text-gray-warm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing">
        <div className="container-main max-w-[800px]">
          <h2 className="font-heading text-4xl font-semibold text-charcoal text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} hover={false}>
                <h3 className="font-semibold text-lg text-charcoal mb-3">
                  {faq.question}
                </h3>
                <p className="text-base text-gray-warm leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-hover text-white">
        <div className="container-main text-center">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-5">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg lg:text-xl opacity-90 mb-8 max-w-[600px] mx-auto">
            Book a session and gain the clarity and guidance you've been seeking.
          </p>
          <Link href="/book">
            <Button size="lg" className="bg-white text-primary hover:bg-base">Book Your Session Now</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
