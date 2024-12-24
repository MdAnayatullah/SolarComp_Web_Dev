import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sun } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative bg-background">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Power Your Future with Solar Energy
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Transform your energy consumption with our cutting-edge solar solutions.
            Save money while contributing to a sustainable future.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground">
                Get Started
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" size="lg" className="text-black hover:text-gray-800 border-white hover:bg-white/10">
                View Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}