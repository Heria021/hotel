import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Calendar, Star } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Narayani Hotel exterior"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
          <Award className="h-3 w-3 mr-1" />
          Our Story
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
          About Narayani
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
          A legacy of exceptional hospitality, where timeless elegance meets modern luxury 
          in the heart of the city.
        </p>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3 text-white" />
              <div className="text-2xl font-bold mb-1">1985</div>
              <div className="text-sm text-white/80">Established</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-white" />
              <div className="text-2xl font-bold mb-1">500+</div>
              <div className="text-sm text-white/80">Team Members</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 mx-auto mb-3 text-white" />
              <div className="text-2xl font-bold mb-1">25+</div>
              <div className="text-sm text-white/80">Awards Won</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 mx-auto mb-3 text-white fill-current" />
              <div className="text-2xl font-bold mb-1">4.9</div>
              <div className="text-sm text-white/80">Guest Rating</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
