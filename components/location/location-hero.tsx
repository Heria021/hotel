import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { MapPin, Navigation, Clock, Plane } from "lucide-react";

export function LocationHero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="City skyline and location"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
          <MapPin className="h-3 w-3 mr-1" />
          Prime Location
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
          Heart of the City
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Perfectly positioned in the downtown district, with easy access to major attractions, 
          business centers, and transportation hubs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="#map">View Map</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-black">
            <Link href="#attractions">Explore Area</Link>
          </Button>
        </div>

        {/* Quick Location Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Navigation className="h-6 w-6 mx-auto mb-2 text-white" />
              <div className="text-lg font-bold">Downtown</div>
              <div className="text-sm text-white/80">District</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Plane className="h-6 w-6 mx-auto mb-2 text-white" />
              <div className="text-lg font-bold">15 min</div>
              <div className="text-sm text-white/80">to Airport</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Clock className="h-6 w-6 mx-auto mb-2 text-white" />
              <div className="text-lg font-bold">5 min</div>
              <div className="text-sm text-white/80">to Metro</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <MapPin className="h-6 w-6 mx-auto mb-2 text-white" />
              <div className="text-lg font-bold">50+</div>
              <div className="text-sm text-white/80">Attractions</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
