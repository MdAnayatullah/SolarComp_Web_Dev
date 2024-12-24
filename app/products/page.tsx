import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductFilters from "@/components/products/filters";
import ProductGrid from "@/components/products/grid";
import { Button } from "@/components/ui/button";

export default function ProductsPage() {
  return (
    <div className="bg-background min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Our Products</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our range of solar energy solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <ProductFilters />
          <div className="lg:col-span-3">
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  );
}