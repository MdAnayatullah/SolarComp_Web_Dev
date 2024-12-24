import BlogGrid from "@/components/blog/grid";
import BlogSidebar from "@/components/blog/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="bg-background min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Solar Energy Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Latest news and insights about solar energy
          </p>
        </div>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search articles..."
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <BlogGrid />
          </div>
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
}