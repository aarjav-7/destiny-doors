import { NextResponse } from 'next/server';
import { getFeaturedTestimonials } from '@/lib/testimonials';

export async function GET() {
  try {
    const testimonials = getFeaturedTestimonials(3);
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error('Error fetching featured testimonials:', error);
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
  }
}