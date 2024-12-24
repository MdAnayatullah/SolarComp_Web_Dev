import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "The Future of Solar Energy: 2024 and Beyond",
    excerpt: "Explore the latest trends and innovations in solar technology...",
    category: "Technology",
    author: "Sarah Johnson",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Solar Installation Guide for Homeowners",
    excerpt: "Everything you need to know before installing solar panels...",
    category: "Guide",
    author: "Michael Chen",
    date: "2024-03-10",
    image: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function BlogGrid() {
  return (
    <div className="grid grid-cols-1 gap-8">
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.id}`}>
          <Card className="hover:shadow-lg transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                />
              </div>
              <div className="md:w-2/3">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <p className="text-sm text-muted-foreground">By {post.author}</p>
                </CardContent>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}