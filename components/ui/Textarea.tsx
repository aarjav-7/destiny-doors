import { TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    
    return (
      <div className="mb-6">
        {label && (
          <label 
            htmlFor={textareaId}
            className="block text-sm font-medium text-charcoal mb-2"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            'w-full px-4 py-3.5 border border-border rounded-lg text-base font-body text-charcoal bg-elevated transition-all duration-200 min-h-[120px] resize-vertical',
            'focus:border-primary focus:outline-none focus:ring-3 focus:ring-primary-light',
            error && 'border-red-500',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-help` : undefined}
          {...props}
        />
        {error && (
          <p id={`${textareaId}-error`} className="text-caption text-red-500 mt-2 flex items-center gap-1" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${textareaId}-help`} className="text-caption text-gray-muted mt-2">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };
