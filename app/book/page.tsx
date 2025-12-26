'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { OptimizedAnimatedBackgrounds } from '@/components/OptimizedAnimatedBackgrounds';

export default function BookPage() {
  const whatsappMessage = "Hi Shilpa, I would like to book a numerology consultation.";
  const whatsappURL = `https://wa.me/919443003664?text=${encodeURIComponent(whatsappMessage)}`;

  const steps = [
    {
      title: "Click WhatsApp Button",
      description: "Start your booking journey with a single click"
    },
    {
      title: "Share Your Details", 
      description: "Tell me about yourself and what you're seeking guidance on"
    },
    {
      title: "Choose Time Slot",
      description: "I'll share available slots and we'll find the perfect time"
    },
    {
      title: "Complete & Confirm",
      description: "Make payment and receive your session confirmation"
    }
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
            <span className="text-charcoal font-medium">Book Session</span>
          </nav>
          <motion.h1 
            className="font-heading text-5xl lg:text-6xl font-bold text-charcoal mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Book Your Numerology Session
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-warm max-w-[700px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Simple, personal, and direct consultation booking via WhatsApp
          </motion.p>
        </div>
      </section>

      {/* Main WhatsApp Booking Section */}
      <section className="section-spacing">
        <div className="container-main">
          <div className="max-w-[800px] mx-auto">
            
            {/* Primary CTA */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="p-12 bg-gradient-to-br from-[#25D366]/5 to-[#128C7E]/5 border border-[#25D366]/20 rounded-lg shadow-sm">
                <div className="w-24 h-24 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-12 h-12 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488z"/>
                  </svg>
                </div>
                
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                  Ready to Discover Your Numbers?
                </h2>
                
                <p className="text-lg text-gray-warm mb-8 max-w-[500px] mx-auto">
                  Start your personalized numerology journey with a simple WhatsApp message
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
                    <button 
                      className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 text-lg font-semibold rounded-lg inline-flex items-center transition-colors shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-5 h-5 mr-3 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488z"/>
                      </svg>
                      Book via WhatsApp
                    </button>
                  </a>
                </motion.div>

                <p className="text-sm text-gray-muted mt-4">
                  Message will open: "{whatsappMessage}"
                </p>
              </div>
            </motion.div>

            {/* How It Works Section */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-charcoal mb-4">
                  How It Works
                </h2>
                <p className="text-lg text-gray-warm">
                  Simple 4-step process to book your session
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="text-center"
                  >
                    <div className="p-6 bg-elevated border border-border rounded-lg h-full hover:shadow-lg transition-all duration-300">
                      <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-primary">
                          {index === 0 ? (
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488z"/>
                            </svg>
                          ) : index === 1 ? '💬' : index === 2 ? '📅' : '✅'}
                        </span>
                      </div>
                      
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                        {index + 1}
                      </div>
                      
                      <h3 className="font-semibold text-lg text-charcoal mb-3">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-warm text-sm">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Services & Pricing */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <h2 className="font-heading text-3xl font-semibold text-charcoal mb-4">
                  Available Sessions
                </h2>
                <p className="text-gray-warm">
                  Choose the perfect session for your needs
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Personal Numerology Session",
                  },
                  {
                    title: "Career & Business Guidance",
                  },
                  {
                    title: "Relationship Compatibility",
                  },
                  {
      id: 'name-correction',
      title: 'Name Numerology & Name Correction',
      description: 'Analyze the numerical value of your name and receive guidance on name corrections for better life outcomes.',
    },
    {
      id: 'mobile-number',
      title: 'Mobile Number Numerology',
      description: 'Discover how your mobile number affects your life and get recommendations for the most beneficial number combinations.',
    },
    {
      id: 'business-name',
      title: 'Business Name Numerology',
      description: 'Choose the perfect business name that aligns with your goals and attracts success through numerological principles.',
    },
    {
      id: 'education-study',
      title: 'Education & Study Guidance',
      description: 'Get insights into the best educational paths, study timing, and academic decisions based on your numerological profile.',
    },
    {
      id: 'financial-growth',
      title: 'Financial & Growth Cycle Analysis',
      description: 'Understand your financial patterns and growth cycles to make better investment and money management decisions.',
    },
    {
      id: 'marriage-family',
      title: 'Marriage & Family Numerology',
      description: 'Gain insights into family dynamics, marriage timing, and creating harmonious relationships within your family.',
    }
                ].map((service, index) => (
                  <div key={index} className="p-6 bg-elevated border border-border rounded-lg text-center hover:shadow-lg transition-all duration-300">
                    <h3 className="font-semibold text-xl text-charcoal">
                      {service.title}
                    </h3>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Not Sure Section */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-12 bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100 rounded-3xl text-center shadow-md">
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-charcoal mb-6">
                  Not sure which service is right for you?
                </h2>
                
                <p className="text-lg text-gray-warm mb-8 max-w-[600px] mx-auto leading-relaxed">
                  Start with a conversation. I'll help you choose the consultation that best addresses your current needs and questions.
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
                    <button 
                      className="bg-emerald-700 hover:bg-emerald-800 text-white px-10 py-4 text-lg font-semibold rounded-xl inline-flex items-center transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Start a Conversation
                    </button>
                  </a>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
