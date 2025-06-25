import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Star, Clock, Users, Award } from "lucide-react";

export function DiningHero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Fine dining restaurant"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
          <Award className="h-3 w-3 mr-1" />
          Award-Winning Cuisine
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
          Culinary Excellence
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Experience exceptional dining with internationally acclaimed cuisine, 
          expertly crafted cocktails, and impeccable service.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="#restaurants">Explore Restaurants</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-black">
            <Link href="#reservation">Make Reservation</Link>
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Star className="h-6 w-6 mx-auto mb-2 text-yellow-400 fill-current" />
              <div className="text-lg font-bold">Michelin</div>
              <div className="text-sm text-white/80">Recognition</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Users className="h-6 w-6 mx-auto mb-2 text-white" />
              <div className="text-lg font-bold">200+</div>
              <div className="text-sm text-white/80">Seats</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Clock className="h-6 w-6 mx-auto mb-2 text-white" />
              <div className="text-lg font-bold">17 Hours</div>
              <div className="text-sm text-white/80">Daily Service</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Award className="h-6 w-6 mx-auto mb-2 text-white" />
              <div className="text-lg font-bold">5 Awards</div>
              <div className="text-sm text-white/80">Culinary</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
