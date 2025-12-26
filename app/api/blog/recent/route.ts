import { NextRequest, NextResponse } from 'next/server';
import { getRecentBlogPosts } from '@/lib/blog';

export async function GET(request: NextRequest) {
  try {
    const recentPosts = getRecentBlogPosts(3);
    return NextResponse.json(recentPosts);
  } catch (error) {
    console.error('Error fetching recent blog posts:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}