import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Award, Clock, Banknote } from "lucide-react";

const features = [
  {
    title: "25-Year Warranty",
    description: "Industry-leading warranty on all our solar panels",
    icon: Shield
  },
  {
    title: "Expert Installation",
    description: "Certified professionals with years of experience",
    icon: Award
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock customer service and monitoring",
    icon: Clock
  },
  {
    title: "Flexible Financing",
    description: "Multiple payment options to suit your budget",
    icon: Banknote
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Leading the way in solar innovation and customer satisfaction
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-background">
              <CardHeader>
                <feature.icon className="h-8 w-8 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}