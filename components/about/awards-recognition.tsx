import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Star, 
  Trophy, 
  Medal,
  Crown,
  Shield
} from "lucide-react";

const awards = [
  {
    year: "2024",
    title: "World's Best Hotel",
    organization: "Travel + Leisure",
    category: "Luxury Hotels",
    description: "Recognized as one of the world's finest luxury hotels for exceptional service and amenities.",
    icon: Crown,
    prestigious: true
  },
  {
    year: "2024",
    title: "Forbes Five-Star Award",
    organization: "Forbes Travel Guide",
    category: "Hotel Excellence",
    description: "Awarded the prestigious Five-Star rating for outstanding luxury and service standards.",
    icon: Star,
    prestigious: true
  },
  {
    year: "2023",
    title: "AAA Five Diamond Award",
    organization: "AAA",
    category: "Hospitality Excellence",
    description: "Recognized for providing the ultimate in luxury and sophisticated service.",
    icon: Medal,
    prestigious: true
  },
  {
    year: "2023",
    title: "Best Hotel Restaurant",
    organization: "Michelin Guide",
    category: "Culinary Excellence",
    description: "Our signature restaurant received Michelin recognition for exceptional cuisine.",
    icon: Award,
    prestigious: false
  },
  {
    year: "2023",
    title: "Sustainability Leader",
    organization: "Green Key Global",
    category: "Environmental Responsibility",
    description: "Leading the industry in sustainable practices and environmental stewardship.",
    icon: Shield,
    prestigious: false
  },
  {
    year: "2022",
    title: "Best Business Hotel",
    organization: "Business Travel Awards",
    category: "Corporate Travel",
    description: "Recognized for excellence in business travel accommodations and services.",
    icon: Trophy,
    prestigious: false
  }
];

const certifications = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management System certification ensuring consistent service excellence",
    icon: Shield
  },
  {
    name: "Green Key Eco-Rating",
    description: "Environmental certification for sustainable tourism and eco-friendly practices",
    icon: Shield
  },
  {
    name: "Safe Travels Stamp",
    description: "Global safety and hygiene protocols certification from WTTC",
    icon: Shield
  },
  {
    name: "Accessibility Certified",
    description: "Full accessibility compliance ensuring inclusive hospitality for all guests",
    icon: Shield
  }
];

const recognitions = [
  {
    metric: "4.9/5",
    source: "TripAdvisor",
    description: "Based on 10,000+ guest reviews"
  },
  {
    metric: "98%",
    source: "Guest Satisfaction",
    description: "Would recommend to others"
  },
  {
    metric: "#1",
    source: "City Ranking",
    description: "Top luxury hotel in the city"
  },
  {
    metric: "25+",
    source: "Industry Awards",
    description: "Received in the last 5 years"
  }
];

export function AwardsRecognition() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Award className="h-3 w-3 mr-1" />
            Awards & Recognition
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Excellence Recognized
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our commitment to exceptional hospitality has been recognized by leading industry 
            organizations and publications worldwide.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {awards.map((award, index) => (
            <Card key={index} className={`hover:shadow-lg transition-all duration-300 ${award.prestigious ? 'ring-2 ring-primary/20' : ''}`}>
              {award.prestigious && (
                <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 text-center">
                  Prestigious Award
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <award.icon className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant="outline">{award.year}</Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{award.title}</CardTitle>
                    <CardDescription className="text-sm font-medium text-primary">
                      {award.organization}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <Badge variant="secondary" className="mb-3">
                  {award.category}
                </Badge>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {award.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recognition Metrics */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Guest Recognition
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our guests consistently recognize our commitment to excellence through their reviews and ratings.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {recognitions.map((recognition, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {recognition.metric}
                  </div>
                  <div className="font-medium mb-1">{recognition.source}</div>
                  <div className="text-sm text-muted-foreground">
                    {recognition.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Certifications & Standards
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest industry standards through rigorous certification processes 
              and continuous improvement initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                    <cert.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards Gallery */}
        <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Award Gallery
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A visual showcase of our most prestigious awards and recognitions over the years.
            </p>
          </div>

          {/* Award Logos/Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            {/* Placeholder for award logos */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg p-4 w-24 h-16 flex items-center justify-center">
                <Award className="h-8 w-8 text-muted-foreground" />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Recognized by leading hospitality organizations worldwide
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">
            Experience Award-Winning Excellence
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Discover why industry experts and guests consistently recognize Narayani Hotel 
            as a leader in luxury hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="outline" className="text-sm px-4 py-2">
              <Star className="h-4 w-4 mr-2 fill-current" />
              Forbes Five-Star
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">
              <Medal className="h-4 w-4 mr-2" />
              AAA Five Diamond
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">
              <Crown className="h-4 w-4 mr-2" />
              World's Best Hotel
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
