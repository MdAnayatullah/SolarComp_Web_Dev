import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Premium Solar Panel",
    description: "High-efficiency monocrystalline solar panel",
    price: 599,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Home Battery System",
    description: "Advanced energy storage solution",
    price: 1299,
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  // Add more products...
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{product.description}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
          </CardContent>
          <CardFooter>
            <Link href={`/products/${product.id}`} className="w-full">
              <Button className="w-full">Learn More</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}