import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Building, 
  Heart, 
  Globe, 
  Award,
  Users,
  Star
} from "lucide-react";

const milestones = [
  {
    year: "1985",
    title: "Foundation",
    description: "Narayani Hotel opened its doors with a vision to redefine luxury hospitality in the city center."
  },
  {
    year: "1992",
    title: "First Expansion",
    description: "Added the iconic rooftop restaurant and expanded to 200 rooms, establishing our reputation for excellence."
  },
  {
    year: "2001",
    title: "Spa & Wellness",
    description: "Launched our world-class spa facility, becoming the first hotel in the district to offer comprehensive wellness services."
  },
  {
    year: "2010",
    title: "Sustainability Initiative",
    description: "Pioneered eco-friendly practices and became the first carbon-neutral luxury hotel in the region."
  },
  {
    year: "2018",
    title: "Digital Innovation",
    description: "Introduced cutting-edge technology and smart room features while maintaining our commitment to personal service."
  },
  {
    year: "2024",
    title: "Modern Renaissance",
    description: "Completed a comprehensive renovation, blending contemporary design with our timeless hospitality traditions."
  }
];

const values = [
  {
    icon: Heart,
    title: "Exceptional Service",
    description: "We believe in creating memorable experiences through personalized attention and genuine care for every guest."
  },
  {
    icon: Star,
    title: "Uncompromising Quality",
    description: "From our luxurious accommodations to our culinary offerings, we maintain the highest standards in everything we do."
  },
  {
    icon: Globe,
    title: "Cultural Respect",
    description: "We celebrate diversity and honor the cultural heritage of our guests while showcasing local traditions."
  },
  {
    icon: Users,
    title: "Community Connection",
    description: "We're committed to supporting our local community and creating positive impacts beyond our hotel walls."
  }
];

export function HotelStory() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Badge variant="outline" className="mb-4">
              <Building className="h-3 w-3 mr-1" />
              Our Heritage
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              A Legacy of Excellence
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                For nearly four decades, Narayani Hotel has been synonymous with luxury, 
                elegance, and exceptional hospitality. What began as a vision to create 
                an extraordinary hotel experience has evolved into a beloved institution 
                that continues to set new standards in the hospitality industry.
              </p>
              <p>
                Our story is one of continuous innovation while honoring timeless traditions. 
                From our humble beginnings as a boutique property to becoming one of the 
                city's most prestigious hotels, we've remained committed to our founding 
                principles of excellence, authenticity, and genuine care for our guests.
              </p>
              <p>
                Today, Narayani Hotel stands as a testament to the power of vision, 
                dedication, and the unwavering belief that hospitality is an art form. 
                Every detail, from our meticulously designed spaces to our carefully 
                curated experiences, reflects our passion for creating moments that last a lifetime.
              </p>
            </div>
          </div>
          
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
              alt="Hotel lobby historical photo"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Journey Through Time
            </Badge>
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Our Milestones
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key moments that have shaped Narayani Hotel into the exceptional destination it is today.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className={`flex items-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} mb-2`}>
                          <Badge className="bg-primary text-primary-foreground">
                            {milestone.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {milestone.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10" />
                  
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div>
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Heart className="h-3 w-3 mr-1" />
              Our Values
            </Badge>
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              What Drives Us
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The core principles that guide everything we do and shape every interaction with our guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-muted/30 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">
            Our Mission
          </h3>
          <blockquote className="text-lg italic text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            "To create extraordinary experiences that exceed expectations, foster meaningful connections, 
            and leave lasting impressions on every guest who walks through our doors. We are committed 
            to being more than just a place to stay – we are a destination where memories are made 
            and dreams come to life."
          </blockquote>
          <Separator className="my-6 max-w-md mx-auto" />
          <div className="text-sm text-muted-foreground">
            <div className="font-medium">The Narayani Hotel Family</div>
            <div>Established 1985</div>
          </div>
        </div>
      </div>
    </section>
  );
}
