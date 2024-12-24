"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function ProjectFilters() {
  const categories = [
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "industrial", label: "Industrial" },
    { id: "agricultural", label: "Agricultural" }
  ];

  const systemSizes = [
    { id: "small", label: "< 10kW" },
    { id: "medium", label: "10-50kW" },
    { id: "large", label: "50-100kW" },
    { id: "enterprise", label: "> 100kW" }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-medium mb-4">Project Type</h3>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox id={category.id} />
                <Label htmlFor={category.id}>{category.label}</Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4">System Size</h3>
          <div className="space-y-3">
            {systemSizes.map((size) => (
              <div key={size.id} className="flex items-center space-x-2">
                <Checkbox id={size.id} />
                <Label htmlFor={size.id}>{size.label}</Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}