'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function MysticalNumbers({ count = 15 }: { count?: number }) {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
    }));
    setStars(generated);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-accent"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 4,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export function NumberRain() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33];
  const [drops, setDrops] = useState<Array<{ id: number; x: number; number: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: (i / 20) * 100,
      number: numbers[Math.floor(Math.random() * numbers.length)],
      duration: Math.random() * 5 + 10,
      delay: Math.random() * 5,
    }));
    setDrops(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute font-heading text-2xl font-bold text-primary"
          style={{
            left: `${drop.x}%`,
            top: '-50px',
          }}
          animate={{
            y: ['0vh', '110vh'],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {drop.number}
        </motion.div>
      ))}
    </div>
  );
}
