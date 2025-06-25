import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Leaf, 
  Recycle, 
  Droplets, 
  Zap,
  TreePine,
  Heart,
  Globe,
  Award
} from "lucide-react";

const initiatives = [
  {
    icon: Zap,
    title: "Renewable Energy",
    description: "100% renewable energy sources powering our entire facility",
    progress: 100,
    details: ["Solar panel installation", "Wind energy partnership", "Energy-efficient systems", "Smart building technology"]
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description: "Advanced water management and recycling systems",
    progress: 85,
    details: ["Rainwater harvesting", "Greywater recycling", "Low-flow fixtures", "Smart irrigation systems"]
  },
  {
    icon: Recycle,
    title: "Waste Reduction",
    description: "Comprehensive waste management and recycling programs",
    progress: 92,
    details: ["Zero waste to landfill", "Composting program", "Plastic reduction", "Recycling initiatives"]
  },
  {
    icon: TreePine,
    title: "Carbon Neutral",
    description: "Achieved carbon neutrality through reduction and offset programs",
    progress: 100,
    details: ["Carbon footprint reduction", "Tree planting programs", "Carbon offset projects", "Green transportation"]
  }
];

const certifications = [
  {
    name: "LEED Platinum",
    description: "Leadership in Energy and Environmental Design certification",
    year: "2022"
  },
  {
    name: "Green Key Global",
    description: "International environmental certification for tourism",
    year: "2021"
  },
  {
    name: "ISO 14001",
    description: "Environmental Management System certification",
    year: "2020"
  },
  {
    name: "Carbon Trust Standard",
    description: "Certified carbon footprint reduction and management",
    year: "2023"
  }
];

const communityPrograms = [
  {
    icon: Heart,
    title: "Local Community Support",
    description: "Supporting local businesses, artisans, and community development projects",
    impact: "50+ local partnerships"
  },
  {
    icon: Globe,
    title: "Cultural Preservation",
    description: "Promoting and preserving local culture, traditions, and heritage",
    impact: "15 cultural initiatives"
  },
  {
    icon: TreePine,
    title: "Environmental Education",
    description: "Educational programs for guests and staff about environmental conservation",
    impact: "1000+ participants annually"
  },
  {
    icon: Award,
    title: "Sustainable Tourism",
    description: "Promoting responsible tourism practices and sustainable travel",
    impact: "Industry leadership"
  }
];

export function SustainabilitySection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Leaf className="h-3 w-3 mr-1" />
            Sustainability
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Our Environmental Commitment
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We believe luxury and sustainability go hand in hand. Our comprehensive environmental 
            program demonstrates our commitment to protecting the planet while providing exceptional experiences.
          </p>
        </div>

        {/* Sustainability Initiatives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <initiative.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{initiative.title}</CardTitle>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {initiative.progress}%
                  </Badge>
                </div>
                <CardDescription className="text-base">
                  {initiative.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <Progress value={initiative.progress} className="h-2" />
                
                <div>
                  <h4 className="font-medium text-sm mb-2">Key Initiatives:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {initiative.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2 text-sm">
                        <div className="h-1.5 w-1.5 bg-green-600 rounded-full" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Environmental Certifications */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Environmental Certifications
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our sustainability efforts are validated by leading environmental certification bodies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold mb-2">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                  <Badge variant="outline" className="text-xs">
                    Certified {cert.year}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Programs */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Community & Social Impact
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond environmental sustainability, we're committed to positive social impact 
              and supporting our local community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityPrograms.map((program, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                    <program.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{program.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{program.description}</p>
                  <Badge variant="secondary" className="text-xs">
                    {program.impact}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sustainability Goals */}
        <div className="bg-green-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              2030 Sustainability Goals
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our ambitious targets for the next decade, aligned with the UN Sustainable Development Goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">Net Zero</div>
              <div className="font-medium mb-1">Carbon Emissions</div>
              <div className="text-sm text-muted-foreground">Complete carbon neutrality by 2030</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50%</div>
              <div className="font-medium mb-1">Water Reduction</div>
              <div className="text-sm text-muted-foreground">Reduce water consumption by half</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">Zero</div>
              <div className="font-medium mb-1">Waste to Landfill</div>
              <div className="text-sm text-muted-foreground">100% waste diversion from landfills</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Leaf className="h-4 w-4 mr-2" />
              Learn More About Our Initiatives
            </Button>
          </div>
        </div>

        {/* Guest Participation */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">
            Join Our Sustainability Journey
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We invite our guests to participate in our sustainability efforts and make a positive 
            impact during their stay with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="outline" className="text-sm px-4 py-2">
              <Recycle className="h-4 w-4 mr-2" />
              Towel & Linen Program
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">
              <TreePine className="h-4 w-4 mr-2" />
              Carbon Offset Options
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">
              <Heart className="h-4 w-4 mr-2" />
              Community Volunteering
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
