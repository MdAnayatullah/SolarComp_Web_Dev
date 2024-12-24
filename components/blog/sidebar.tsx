import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BlogSidebar() {
  const categories = [
    { name: "Technology", count: 12 },
    { name: "Guide", count: 8 },
    { name: "News", count: 15 },
    { name: "Case Studies", count: 6 }
  ];

  const popularPosts = [
    {
      title: "Solar Tax Credits in 2024",
      date: "2024-03-01"
    },
    {
      title: "Maximizing Solar Panel Efficiency",
      date: "2024-02-28"
    },
    {
      title: "Commercial Solar Success Stories",
      date: "2024-02-25"
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge key={category.name} variant="secondary">
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Popular Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {popularPosts.map((post) => (
              <div key={post.title} className="border-b last:border-0 pb-4 last:pb-0">
                <h3 className="font-medium hover:text-primary cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}