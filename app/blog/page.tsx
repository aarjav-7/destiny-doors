import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Icons } from '@/components/icons';
import { OptimizedAnimatedBackgrounds } from '@/components/OptimizedAnimatedBackgrounds';
import { getAllBlogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Explore articles on numerology, life guidance, and personal growth from certified numerologist Shilpa A Jain.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

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
            <span className="text-charcoal font-medium">Blog</span>
          </nav>
          <h1 className="font-heading text-5xl lg:text-6xl font-bold text-charcoal mb-4">
            Insights & Guidance
          </h1>
          <p className="text-xl text-gray-warm max-w-[700px] mx-auto">
            Explore numerology, life guidance, and personal growth
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-spacing">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.slug}>
                {/* Blog Image Placeholder */}
                <div className="aspect-[3/2] bg-secondary rounded-lg -mx-8 -mt-8 mb-4 flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-sm text-gray-muted">Blog Image</p>
                    <p className="text-xs text-gray-muted mt-1">{post.category}</p>
                  </div>
                </div>

                <span className="inline-block bg-primary-light text-primary px-3 py-1 rounded text-xs font-medium mb-3">
                  {post.category}
                </span>

                <h2 className="font-heading text-xl font-semibold text-charcoal mb-3 hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-base text-gray-warm mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex gap-3 text-sm text-gray-muted">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
