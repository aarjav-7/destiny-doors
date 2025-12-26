import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  summary: string;
  tags: string[];
  ogImage?: string;
  content: string;
  excerpt: string;
  readTime: string;
  category: string;
}

export function getAllBlogPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(blogDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      // Generate excerpt from content (first 150 characters)
      const excerpt = content.replace(/#{1,6}\s+/g, '').substring(0, 150) + '...';
      
      // Estimate read time (average 200 words per minute)
      const wordCount = content.split(/\s+/).length;
      const readTime = Math.ceil(wordCount / 200) + ' min read';

      // Determine category from tags or title
      const category = data.tags?.[0] || 'Numerology';

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date ? (typeof data.date === 'string' ? data.date : data.date.toISOString()) : new Date().toISOString(),
        author: data.author || 'Shilpa A Jain',
        summary: data.summary || excerpt,
        tags: data.tags || [],
        ogImage: data.ogImage,
        content,
        excerpt: data.summary || excerpt,
        readTime,
        category: category.charAt(0).toUpperCase() + category.slice(1),
      } as BlogPost;
    });

  // Sort by date (newest first)
  return allPostsData.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      // Try .md extension
      const mdPath = path.join(blogDirectory, `${slug}.md`);
      if (!fs.existsSync(mdPath)) {
        return null;
      }
      const fileContents = fs.readFileSync(mdPath, 'utf8');
      const { data, content } = matter(fileContents);

      const wordCount = content.split(/\s+/).length;
      const readTime = Math.ceil(wordCount / 200) + ' min read';
      const excerpt = content.replace(/#{1,6}\s+/g, '').substring(0, 150) + '...';
      const category = data.tags?.[0] || 'Numerology';

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        author: data.author || 'Shilpa A Jain',
        summary: data.summary || excerpt,
        tags: data.tags || [],
        ogImage: data.ogImage,
        content,
        excerpt: data.summary || excerpt,
        readTime,
        category: category.charAt(0).toUpperCase() + category.slice(1),
      } as BlogPost;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200) + ' min read';
    const excerpt = content.replace(/#{1,6}\s+/g, '').substring(0, 150) + '...';
    const category = data.tags?.[0] || 'Numerology';

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      author: data.author || 'Shilpa A Jain',
      summary: data.summary || excerpt,
      tags: data.tags || [],
      ogImage: data.ogImage,
      content,
      excerpt: data.summary || excerpt,
      readTime,
      category: category.charAt(0).toUpperCase() + category.slice(1),
    } as BlogPost;
  } catch (error) {
    console.error('Error reading blog post:', error);
    return null;
  }
}

export function getRecentBlogPosts(limit: number = 3): BlogPost[] {
  return getAllBlogPosts().slice(0, limit);
}