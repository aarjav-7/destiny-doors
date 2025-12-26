import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPost, getAllBlogPosts } from '@/lib/blog';
import { OptimizedAnimatedBackgrounds } from '@/components/OptimizedAnimatedBackgrounds';
import ReactMarkdown from 'react-markdown';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: post.ogImage ? [post.ogImage] : [],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <OptimizedAnimatedBackgrounds />
      
      <section className="py-16 bg-secondary">
        <div className="container-main">
          <nav className="mb-6 text-sm">
            <Link href="/" className="text-gray-muted hover:text-primary">Home</Link>
            <span className="mx-2 text-gray-muted">/</span>
            <Link href="/blog" className="text-gray-muted hover:text-primary">Blog</Link>
            <span className="mx-2 text-gray-muted">/</span>
            <span className="text-charcoal font-medium">{post.title}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="mb-4">
              <span className="inline-block bg-primary-light text-primary px-3 py-1 rounded text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-gray-muted mb-8">
              <div className="flex items-center gap-2">
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{post.readTime}</span>
              </div>
            </div>

            <p className="text-xl text-gray-warm leading-relaxed">
              {post.summary}
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-main">
          <div className="max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <h1 className="font-heading text-3xl lg:text-4xl font-bold text-charcoal mb-6 mt-8">{children}</h1>,
                  h2: ({ children }) => <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-charcoal mb-4 mt-8">{children}</h2>,
                  h3: ({ children }) => <h3 className="font-heading text-xl lg:text-2xl font-medium text-charcoal mb-4 mt-6">{children}</h3>,
                  h4: ({ children }) => <h4 className="font-heading text-lg font-medium text-charcoal mb-3 mt-4">{children}</h4>,
                  p: ({ children }) => <p className="text-gray-warm mb-6 leading-relaxed">{children}</p>,
                  ul: ({ children }) => <ul className="space-y-2 mb-6 pl-6">{children}</ul>,
                  ol: ({ children }) => <ol className="space-y-2 mb-6 pl-6">{children}</ol>,
                  li: ({ children }) => <li className="text-gray-warm">{children}</li>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-primary pl-6 italic text-gray-warm bg-primary-light/20 py-4 my-6">
                      {children}
                    </blockquote>
                  ),
                  strong: ({ children }) => <strong className="font-semibold text-charcoal">{children}</strong>,
                  code: ({ children }) => <code className="bg-secondary px-2 py-1 rounded text-sm">{children}</code>,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="mt-8">
                <h3 className="font-heading text-lg font-medium text-charcoal mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-primary-light text-primary px-3 py-1 rounded text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-16 pt-8 border-t border-border">
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  About the Author
                </h3>
                <p className="text-gray-warm mb-4">
                  <strong className="text-charcoal">{post.author}</strong> is a certified numerologist and life guidance expert. 
                  With years of experience in numerology and personal development, she helps individuals discover clarity 
                  and purpose through the mystical world of numbers.
                </p>
                <Link 
                  href="/book" 
                  className="inline-flex items-center text-primary hover:text-primary-hover transition-colors font-medium"
                >
                  Book a Session →
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-gray-muted hover:text-primary transition-colors"
              >
                ← Back to All Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
