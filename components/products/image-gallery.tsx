"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

interface ProductImageGalleryProps {
  images: string[];
}

export default function ProductImageGallery({ images }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <Card className="overflow-hidden">
        <img
          src={selectedImage}
          alt="Product"
          className="w-full h-[500px] object-cover"
        />
      </Card>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Card
            key={index}
            className={`cursor-pointer overflow-hidden ${
              selectedImage === image ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              className="w-full h-24 object-cover"
            />
          </Card>
        ))}
      </div>
    </div>
  );
}