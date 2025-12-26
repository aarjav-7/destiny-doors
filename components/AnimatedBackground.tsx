'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FloatingNumber {
  id: number;
  number: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function AnimatedBackground() {
  const [numbers, setNumbers] = useState<FloatingNumber[]>([]);

  useEffect(() => {
    // Generate random floating numbers
    const numerologyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
    const generated: FloatingNumber[] = [];

    for (let i = 0; i < 30; i++) {
      generated.push({
        id: i,
        number: numerologyNumbers[Math.floor(Math.random() * numerologyNumbers.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 40 + 30,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
      });
    }

    setNumbers(generated);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10 opacity-55">
      {numbers.map((num) => (
        <motion.div
          key={num.id}
          className="absolute font-heading font-bold text-charcoal/30"
          style={{
            left: `${num.x}%`,
            top: `${num.y}%`,
            fontSize: `${num.size}px`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(num.id) * 30, 0],
            rotate: [0, 360],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: num.duration,
            delay: num.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {num.number}
        </motion.div>
      ))}
    </div>
  );
}

export function GradientOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {/* Purple Orb */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/40 to-transparent blur-3xl"
        style={{ top: '10%', left: '10%' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Gold Orb */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent/30 to-transparent blur-3xl"
        style={{ top: '50%', right: '10%' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Small Purple Orb */}
      <motion.div
       className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-br from-primary-hover/50 to-transparent blur-2xl"
        style={{ bottom: '20%', left: '40%' }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />
    </div>
  );
}

export function ParticleField() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; delay: number }[]>([]);

  useEffect(() => {
    const generated = [];
    for (let i = 0; i < 50; i++) {
      generated.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
      });
    }
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -150, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
