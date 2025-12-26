/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Background colors - Bold Visible Green
        base: '#E8F5E8',
        secondary: '#C8E6C9',
        elevated: '#FFFFFF',
        
        // Primary accent (spiritual purple)
        primary: {
          DEFAULT: '#7B6CF6',
          hover: '#6454E5',
          light: '#E8E5FE',
        },
        
        // Secondary accent (warm gold)
        accent: {
          DEFAULT: '#E6C77A',
          hover: '#D4B363',
          light: '#F8F2E3',
        },
        
        // Text colors
        charcoal: '#2F2F2F',
        gray: {
          warm: '#5F5F5F',
          muted: '#8A8A8A',
        },
        
        // Border colors
        border: {
          DEFAULT: '#E8E5DF',
          hover: '#D4D0C8',
        },
      },
      
      fontFamily: {
        heading: ['var(--font-heading)', 'Georgia', 'serif'],
        accent: ['var(--font-accent)', 'Georgia', 'serif'],
        body: ['var(--font-body)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      
      fontSize: {
        // Desktop sizes
        'h1': ['56px', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.2', fontWeight: '600' }],
        'h3': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['22px', { lineHeight: '1.4', fontWeight: '600' }],
        
        // Tablet sizes
        'h1-tablet': ['48px', { lineHeight: '1.1', fontWeight: '700' }],
        'h2-tablet': ['32px', { lineHeight: '1.2', fontWeight: '600' }],
        'h3-tablet': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'h4-tablet': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        
        // Mobile sizes
        'h1-mobile': ['40px', { lineHeight: '1.15', fontWeight: '700' }],
        'h2-mobile': ['28px', { lineHeight: '1.2', fontWeight: '600' }],
        'h3-mobile': ['22px', { lineHeight: '1.3', fontWeight: '600' }],
        'h4-mobile': ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        
        // Body text
        'body-lg': ['18px', { lineHeight: '1.7' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        'caption': ['13px', { lineHeight: '1.4' }],
      },
      
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
      },
      
      borderRadius: {
        'sm': '4px',
        'base': '8px',
        'lg': '16px',
        'xl': '24px',
        'full': '9999px',
      },
      
      boxShadow: {
        'sm': '0 2px 8px rgba(47, 47, 47, 0.04)',
        'md': '0 6px 18px rgba(47, 47, 47, 0.06)',
        'lg': '0 12px 32px rgba(47, 47, 47, 0.08)',
        'xl': '0 20px 48px rgba(47, 47, 47, 0.12)',
      },
      
      transitionTimingFunction: {
        'out': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      
      transitionDuration: {
        'fast': '200ms',
        'base': '400ms',
        'slow': '600ms',
      },
      
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
      },
      
      backdropBlur: {
        'header': '12px',
      },
      
      scale: {
        '102': '1.02',
      },
      
      maxWidth: {
        'container': '1200px',
        'narrow': '768px',
        'prose': '720px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    
    // Custom plugin for container utilities
    function({ addComponents, theme }) {
      addComponents({
        '.container-main': {
          maxWidth: theme('maxWidth.container'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '48px',
          paddingRight: '48px',
          '@media (max-width: 1023px)': {
            paddingLeft: '32px',
            paddingRight: '32px',
          },
          '@media (max-width: 767px)': {
            paddingLeft: '24px',
            paddingRight: '24px',
          },
        },
        '.container-narrow': {
          maxWidth: theme('maxWidth.narrow'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '24px',
          paddingRight: '24px',
        },
        '.section-spacing': {
          paddingTop: '96px',
          paddingBottom: '96px',
          '@media (max-width: 1023px)': {
            paddingTop: '64px',
            paddingBottom: '64px',
          },
          '@media (max-width: 767px)': {
            paddingTop: '48px',
            paddingBottom: '48px',
          },
        },
      })
    },
    
    // Custom plugin for focus-visible styles
    function({ addBase }) {
      addBase({
        '*:focus': {
          outline: 'none',
        },
        '*:focus-visible': {
          outline: '2px solid #7B6CF6',
          outlineOffset: '2px',
          borderRadius: '8px',
        },
      })
    },
    
    // Reduced motion support
    function({ addBase }) {
      addBase({
        '@media (prefers-reduced-motion: reduce)': {
          '*': {
            animationDuration: '0.01ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.01ms !important',
            scrollBehavior: 'auto !important',
          },
        },
      })
    },
  ],
}
