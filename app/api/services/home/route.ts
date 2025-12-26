import { NextResponse } from 'next/server';
import { getServicesForHome } from '@/lib/services';

export async function GET() {
  try {
    const services = getServicesForHome();
    return NextResponse.json(services);
  } catch (error) {
    console.error('Error fetching services for home:', error);
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}