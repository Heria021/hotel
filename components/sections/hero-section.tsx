"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Award, Wifi, Car, Coffee, Dumbbell } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Luxury hotel exterior at sunset",
    title: "Welcome to Narayani Hotel",
    subtitle: "Where Luxury Meets Comfort"
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    alt: "Elegant hotel lobby",
    title: "Exceptional Service",
    subtitle: "Experience Unparalleled Hospitality"
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Luxurious hotel room",
    title: "Premium Accommodations",
    subtitle: "Rest in Style and Comfort"
  }
];

const highlights = [
  { icon: Star, text: "5-Star Luxury" },
  { icon: Award, text: "Award Winning" },
  { icon: Wifi, text: "Free WiFi" },
  { icon: Car, text: "Valet Parking" },
  { icon: Coffee, text: "24/7 Room Service" },
  { icon: Dumbbell, text: "Fitness Center" },
];

export function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="relative">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[70vh] md:h-[80vh] lg:h-[90vh]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Hero Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="container text-center text-white">
                    <div className="max-w-4xl mx-auto space-y-6">
                      <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                        Luxury Hotel Experience
                      </Badge>
                      
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
                        {image.title}
                      </h1>
                      
                      <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                        {image.subtitle}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <Button asChild size="lg" className="text-lg px-8">
                          <Link href="/book">Book Your Stay</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-black">
                          <Link href="/rooms">Explore Rooms</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/20 border-white/30 text-white hover:bg-white hover:text-black" />
        <CarouselNext className="right-4 bg-white/20 border-white/30 text-white hover:bg-white hover:text-black" />
      </Carousel>

      {/* Hotel Highlights */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent">
        <div className="container py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors">
                <CardContent className="p-3 md:p-4 text-center">
                  <highlight.icon className="h-5 w-5 md:h-6 md:w-6 mx-auto mb-2 text-white" />
                  <p className="text-xs md:text-sm text-white font-medium leading-tight">{highlight.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="absolute top-4 right-4">
        <div className="flex flex-col space-y-3">
          <Badge className="bg-primary text-primary-foreground shadow-lg">
            <Star className="h-3 w-3 mr-1 fill-current" />
            5.0 Rating
          </Badge>
          <Badge variant="secondary" className="bg-white/90 text-black shadow-lg ">
            <Award className="h-3 w-3 mr-1" />
            Best Hotel 2024
          </Badge>
        </div>
      </div>
    </section>
  );
}
