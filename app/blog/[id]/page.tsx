import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Link from "next/link";

// This would be replaced with actual data fetching
const post = {
  id: 1,
  title: "The Future of Solar Energy: 2024 and Beyond",
  content: `
    <p>The solar energy industry is experiencing unprecedented growth and innovation...</p>
    <h2>Key Trends in Solar Technology</h2>
    <p>Several emerging trends are shaping the future of solar energy...</p>
    <h2>Impact on Residential Solar</h2>
    <p>Homeowners are increasingly benefiting from these technological advances...</p>
  `,
  category: "Technology",
  author: "Sarah Johnson",
  authorTitle: "Solar Technology Expert",
  date: "2024-03-15",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  relatedPosts: [
    {
      id: 2,
      title: "Solar Installation Guide for Homeowners",
      excerpt: "Everything you need to know before installing solar panels...",
      date: "2024-03-10"
    }
  ]
};

export default function BlogPostPage() {
  return (
    <div className="bg-background min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <article>
          <div className="mb-8">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <span>{post.readTime}</span>
            </div>
          </div>

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <hr className="my-12" />

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
            {post.relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{relatedPost.title}</h3>
                    <p className="text-muted-foreground mb-2">{relatedPost.excerpt}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(relatedPost.date).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}