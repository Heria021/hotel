import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AmenitiesHero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
        alt="Luxury hotel amenities"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
          World-Class Amenities
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
          Exceptional Facilities
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Discover our comprehensive range of premium amenities and services designed 
          to enhance every moment of your stay.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="#amenities">Explore Amenities</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-black">
            <Link href="/book">Book Your Stay</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
