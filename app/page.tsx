import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/home/hero-section";
import ProductsOverview from "@/components/home/products-overview";
import Testimonials from "@/components/home/testimonials";
import WhyChooseUs from "@/components/home/why-choose-us";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductsOverview />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}