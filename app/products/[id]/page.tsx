import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, Package } from "lucide-react";
import Link from "next/link";
import ProductImageGallery from "@/components/products/image-gallery";

// This would be replaced with actual data fetching
const product = {
  id: 1,
  name: "Premium Solar Panel X1",
  description: "High-efficiency monocrystalline solar panel with advanced technology for maximum energy production.",
  price: 599,
  category: "Solar Panels",
  images: [
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  ],
  features: [
    "25-year warranty",
    "21% efficiency rating",
    "Anti-reflective coating",
    "Weather-resistant design"
  ],
  specifications: {
    dimensions: "1650 x 992 x 35mm",
    weight: "18.7 kg",
    cellType: "Monocrystalline",
    power: "400W",
    efficiency: "21%"
  }
};

export default function ProductDetailPage() {
  return (
    <div className="bg-background min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/products">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProductImageGallery images={product.images} />

          <div className="space-y-6">
            <div>
              <Badge className="mb-4">{product.category}</Badge>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            <div>
              <p className="text-3xl font-bold">${product.price}</p>
              <p className="text-sm text-muted-foreground mt-1">Free shipping</p>
            </div>

            <Button size="lg" className="w-full">
              <Package className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Specifications</h2>
                <dl className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-muted-foreground capitalize">{key}</dt>
                      <dd className="font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}