'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Icons } from '@/components/icons';
import { fadeInUp, staggerContainer, floatAnimation, rotateIn, expandIn, hoverLift } from '@/lib/animations';
import { OptimizedAnimatedBackgrounds } from '@/components/OptimizedAnimatedBackgrounds';
import { useEffect, useState } from 'react';
import type { BlogPost } from '@/lib/blog';
import type { ServiceForHome } from '@/lib/services';
import type { TestimonialForHome } from '@/lib/testimonials';

export default function HomePage() {
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [services, setServices] = useState<ServiceForHome[]>([]);
  const [testimonials, setTestimonials] = useState<TestimonialForHome[]>([]);

  useEffect(() => {
    // Fetch all dynamic data for home page
    const fetchHomePageData = async () => {
      try {
        // Fetch blog posts
        const blogResponse = await fetch('/api/blog/recent');
        const posts = await blogResponse.json();
        setRecentPosts(posts);

        // Fetch services
        const servicesResponse = await fetch('/api/services/home');
        const servicesData = await servicesResponse.json();
        setServices(servicesData);

        // Fetch testimonials
        const testimonialsResponse = await fetch('/api/testimonials/featured');
        const testimonialsData = await testimonialsResponse.json();
        setTestimonials(testimonialsData);
      } catch (error) {
        console.error('Error fetching home page data:', error);
        // Set fallback empty arrays
        setRecentPosts([]);
        setServices([]);
        setTestimonials([]);
      }
    };

    fetchHomePageData();
  }, []);



  return (
    <>
      {/* Animated Backgrounds */}
      <OptimizedAnimatedBackgrounds />

      {/* Hero Section */}
      <section className="pt-8 pb-24 lg:pt-6 lg:pb-16 md:pt-4 md:pb-12 bg-gradient-to-br from-purple-50 via-teal-50 to-blue-50 relative overflow-hidden">
        {/* Main Title */}
        <motion.h1 
          className="font-heading text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-12 bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent px-6 leading-tight pb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Discover Your Life Path Through Numerology
        </motion.h1>

        <div className="relative z-10 w-full">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex items-start justify-between gap-8 px-6 max-w-[1600px] mx-auto"
          >
            {/* Left Sidebar - Feature Cards - Aligned to left edge */}
            <motion.div 
              variants={fadeInUp}
              className="hidden lg:flex flex-col space-y-6 w-[180px] flex-shrink-0 -mt-12"
            >
              {/* Discover Card */}
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 h-[125.6px]"
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                  <Icons.sparkles size={20} className="text-white" />
                </div>
                <h3 className="font-heading text-base font-semibold text-blue-600 mb-0.5">
                  Discover
                </h3>
                <p className="text-xs text-gray-600">Your Numbers</p>
              </motion.div>

              {/* Transform Card */}
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 h-[125.6px]"
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-3">
                  <Icons.trendingUp size={20} className="text-white" />
                </div>
                <h3 className="font-heading text-base font-semibold text-purple-600 mb-0.5">
                  Transform
                </h3>
                <p className="text-xs text-gray-600">Your Life</p>
              </motion.div>

              {/* Embrace Card */}
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 h-[125.6px]"
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mb-3">
                  <Icons.heart size={20} className="text-white" />
                </div>
                <h3 className="font-heading text-base font-semibold text-pink-600 mb-0.5">
                  Embrace
                </h3>
                <p className="text-xs text-gray-600">Your Destiny</p>
              </motion.div>
            </motion.div>

            {/* Center - Profile Card - Wider with horizontal layout */}
            <motion.div 
              variants={fadeInUp}
              className="flex-1 max-w-[900px]"
            >
              <motion.div 
                className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-teal-200"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Profile Image - Left Side */}
                  <motion.div 
                    className="flex-shrink-0"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full blur-xl opacity-30"></div>
                      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-emerald-700 shadow-2xl">
                        <Image
                          src="/hero-portrait.jpg"
                          alt="Shilpa A Jain - Numerology Expert"
                          width={192}
                          height={192}
                          className="w-full h-full object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Text Content - Right Side */}
                  <div className="flex-1">
                    {/* Name and Title */}
                    <motion.h2 
                      className="font-heading text-3xl lg:text-4xl font-bold text-teal-800 mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      Shilpa A Jain
                    </motion.h2>
                    <motion.p 
                      className="text-teal-600 font-semibold mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Certified Numerology Expert & Life Path Guide
                    </motion.p>

                    {/* Description */}
                    <motion.div 
                      className="space-y-4 text-gray-700 mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <p className="leading-relaxed">
                        With over 2 years of dedicated experience in numerology, I've had the privilege of guiding 50+ individuals toward clarity, purpose, and fulfillment.
                      </p>
                      <p className="leading-relaxed">
                        I believe that every number in your life tells a story—from your birth date to your name, each carries unique vibrations that shape your destiny. My approach combines traditional numerological principles with intuitive insights, creating a transformative experience tailored just for you.
                      </p>
                    </motion.div>

                    {/* Learn More Link */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <Link 
                        href="/about"
                        className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors group"
                      >
                        Click to learn more about me
                        <Icons.arrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Sidebar - Stats Cards - Aligned to right edge */}
            <motion.div 
              variants={fadeInUp}
              className="hidden lg:flex flex-col space-y-6 w-[180px] flex-shrink-0 -mt-12"
            >
              {/* 50+ Lives Transformed */}
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <p className="text-sm text-gray-600">Lives Transformed</p>
              </motion.div>

              {/* 2+ Years Experience */}
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent mb-2">
                  2+
                </div>
                <p className="text-sm text-gray-600">Years Experience</p>
              </motion.div>

              {/* 100% Client Satisfaction */}
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-cyan-100 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-700 bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <p className="text-sm text-gray-600">Client Satisfaction</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-secondary relative">
        <div className="container-main text-center relative z-10">
          <motion.h2 
            className="font-heading text-3xl lg:text-4xl font-semibold text-charcoal mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Trusted Guidance for Over 2+ Years
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-warm leading-relaxed mb-8 max-w-[800px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Shilpa A Jain brings expertise in numerology and life guidance, helping individuals decode their life's journey through the language of numbers.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-12 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="flex flex-col items-center gap-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Icons.checkCircle size={48} className="text-primary" />
              <p className="text-sm font-medium text-gray-muted uppercase tracking-wide">Certified Numerologist</p>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center gap-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Icons.user size={48} className="text-primary" />
              <p className="text-sm font-medium text-gray-muted uppercase tracking-wide">50+ Consultations</p>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center gap-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Icons.star size={48} className="text-primary" />
              <p className="text-sm font-medium text-gray-muted uppercase tracking-wide">5-Star Rated</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-spacing relative">
        <div className="container-main relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-charcoal mb-4">
              Personalized Numerology Services
            </h2>
            <p className="text-lg text-gray-warm">
              Choose the session that aligns with your journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(123, 108, 246, 0.15)' }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="flex flex-col h-full">
                    <h3 className="font-heading text-2xl font-semibold text-charcoal mb-3">
                      {service.title}
                    </h3>
                    <p className="text-base text-gray-warm mb-4 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    <div className="flex gap-4 text-sm text-gray-muted mb-5">
                      <span>{service.duration}</span>
                      <span>{service.price}</span>
                    </div>
                    <Button asChild className="w-full">
                      <Link href={`/services#${service.id}`}>Learn More</Link>
                    </Button>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* View All Services Link */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button variant="text" asChild>
              <Link href="/services" className="inline-flex items-center gap-2">
                View All Services <Icons.arrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary relative">
        <div className="container-main relative z-10">
          <motion.h2 
            className="font-heading text-4xl lg:text-5xl font-semibold text-charcoal text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Client Experiences
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card hover={false} className="bg-base border-none h-full">
                  <div className="mb-4">
                    <h4 className="font-medium text-charcoal">{testimonial.name}</h4>
                    <p className="text-sm text-gray-muted">{testimonial.location}</p>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icons.star key={i} size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-gray-warm italic">"{testimonial.quote}"</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button variant="text" asChild>
              <Link href="/testimonials" className="inline-flex items-center gap-2">
                View All Testimonials <Icons.arrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="section-spacing relative">
        <div className="container-main relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-charcoal mb-4">
              Insights & Guidance
            </h2>
            <p className="text-lg text-gray-warm">
              Explore numerology, life guidance, and personal growth
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {recentPosts.length > 0 ? (
              recentPosts.map((post) => (
                <Card key={post.slug}>
                  <div className="aspect-[3/2] bg-secondary rounded-lg -mx-8 -mt-8 mb-4 flex items-center justify-center">
                    <p className="text-sm text-gray-muted">Blog Image</p>
                  </div>
                  <span className="inline-block bg-primary-light text-primary px-3 py-1 rounded text-xs font-medium mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-2 hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-base text-gray-warm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex gap-3 text-sm text-gray-muted">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </Card>
              ))
            ) : (
              // Fallback content while loading or if no posts
              Array.from({ length: 3 }).map((_, index) => (
                <Card key={index}>
                  <div className="aspect-[3/2] bg-secondary rounded-lg -mx-8 -mt-8 mb-4 flex items-center justify-center">
                    <p className="text-sm text-gray-muted">Loading...</p>
                  </div>
                  <span className="inline-block bg-primary-light text-primary px-3 py-1 rounded text-xs font-medium mb-3">
                    Numerology
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">
                    Loading...
                  </h3>
                  <p className="text-base text-gray-warm mb-4">
                    Loading blog content...
                  </p>
                  <div className="flex gap-3 text-sm text-gray-muted">
                    <span>Loading...</span>
                  </div>
                </Card>
              ))
            )}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button variant="text" asChild>
              <Link href="/blog" className="inline-flex items-center gap-2">
                Read All Articles <Icons.arrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-hover to-accent text-white relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 font-heading text-9xl font-bold">1</div>
          <div className="absolute top-20 right-20 font-heading text-7xl font-bold">3</div>
          <div className="absolute bottom-10 left-1/3 font-heading text-8xl font-bold">7</div>
          <div className="absolute bottom-20 right-1/4 font-heading text-6xl font-bold">9</div>
        </div>

        <div className="container-main text-center relative z-10">
          <motion.h2 
            className="font-heading text-4xl lg:text-5xl font-bold mb-5"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Discover Your Path?
          </motion.h2>
          <motion.p 
            className="text-lg lg:text-xl opacity-90 mb-8 max-w-[600px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Book a personalized numerology session and gain clarity on your life's journey.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-white text-primary hover:bg-base">
                <Link href="/book">Book Your Session Today</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
