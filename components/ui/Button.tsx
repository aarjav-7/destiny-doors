import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2';
    
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-hover hover:scale-[1.02] hover:shadow-sm active:scale-[0.98]',
      secondary: 'bg-secondary border border-border text-charcoal hover:bg-elevated hover:-translate-y-0.5 hover:shadow-sm',
      outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary-light',
      text: 'bg-transparent text-primary hover:text-primary-hover hover:underline underline-offset-4',
    };
    
    const sizes = {
      sm: 'px-6 py-2.5 text-sm rounded-lg',
      md: 'px-8 py-3.5 text-base rounded-lg',
      lg: 'px-10 py-4.5 text-lg rounded-lg',
    };
    
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
