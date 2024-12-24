"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const categories = [
    { id: "panels", label: "Solar Panels" },
    { id: "batteries", label: "Batteries" },
    { id: "inverters", label: "Inverters" },
    { id: "accessories", label: "Accessories" }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-medium mb-4">Price Range</h3>
          <Slider
            defaultValue={[0, 10000]}
            max={10000}
            step={100}
            value={priceRange}
            onValueChange={setPriceRange}
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4">Categories</h3>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox id={category.id} />
                <Label htmlFor={category.id}>{category.label}</Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}