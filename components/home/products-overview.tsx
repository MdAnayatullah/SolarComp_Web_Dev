import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, Home, Factory, Sun } from "lucide-react";
import Link from "next/link";

const products = [
  {
    title: "Solar Panels",
    description: "High-efficiency panels for residential and commercial use",
    icon: Sun,
    href: "/products/solar-panels"
  },
  {
    title: "Battery Storage",
    description: "Advanced energy storage solutions for 24/7 power",
    icon: Battery,
    href: "/products/battery-storage"
  },
  {
    title: "Home Systems",
    description: "Complete solar solutions for modern homes",
    icon: Home,
    href: "/products/home-systems"
  },
  {
    title: "Commercial Solutions",
    description: "Large-scale installations for businesses",
    icon: Factory,
    href: "/products/commercial"
  }
];

export default function ProductsOverview() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Products</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover our range of solar energy solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.title} href={product.href}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <product.icon className="h-8 w-8 mb-4 text-primary" />
                  <CardTitle>{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}