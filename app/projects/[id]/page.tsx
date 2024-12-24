import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, MapPin, Ruler } from "lucide-react";
import Link from "next/link";

// This would be replaced with actual data fetching
const project = {
  id: 1,
  title: "Residential Solar Installation",
  description: "A comprehensive solar installation project for a modern family home, featuring high-efficiency panels and smart energy management systems.",
  location: "Brooklyn, NY",
  systemSize: "12kW",
  type: "Residential",
  completionDate: "2023-12-15",
  energyProduction: "15,000 kWh/year",
  images: [
    "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  ],
  features: [
    "24 High-efficiency Solar Panels",
    "Smart Energy Management System",
    "Battery Storage Integration",
    "Mobile Monitoring App"
  ]
};

export default function ProjectDetailPage() {
  return (
    <div className="bg-background min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/projects">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold">{project.title}</h1>
              <div className="mt-4 flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  {project.location}
                </div>
                <div className="flex items-center">
                  <Ruler className="mr-2 h-4 w-4" />
                  {project.systemSize}
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  {new Date(project.completionDate).toLocaleDateString()}
                </div>
              </div>
            </div>
            <Badge className="text-lg px-4 py-2">{project.type}</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Project image ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Energy Production</h3>
                <p className="text-2xl font-bold text-primary">{project.energyProduction}</p>
                <p className="text-sm text-muted-foreground mt-2">Annual energy production</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}