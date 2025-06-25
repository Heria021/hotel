import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Linkedin, 
  Mail,
  Star,
  ChefHat,
  Building,
  Heart
} from "lucide-react";

const leadership = [
  {
    name: "Sarah Mitchell",
    position: "General Manager",
    department: "Hotel Operations",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    bio: "With over 20 years in luxury hospitality, Sarah leads our team with passion and dedication to excellence.",
    achievements: ["Hospitality Leader of the Year 2023", "MBA in Hotel Management", "15+ Years at Narayani"],
    specialties: ["Operations Management", "Guest Experience", "Team Leadership"]
  },
  {
    name: "Marcus Thompson",
    position: "Executive Chef",
    department: "Culinary Arts",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    bio: "Michelin-starred chef bringing innovative culinary experiences and international expertise to our restaurants.",
    achievements: ["Michelin Star Recognition", "James Beard Award Nominee", "Culinary Institute Graduate"],
    specialties: ["Contemporary Cuisine", "Menu Innovation", "Culinary Training"]
  },
  {
    name: "David Chen",
    position: "Director of Guest Services",
    department: "Guest Relations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    bio: "Dedicated to creating personalized experiences and ensuring every guest feels valued and cared for.",
    achievements: ["Guest Service Excellence Award", "Certified Hospitality Professional", "10+ Years Experience"],
    specialties: ["Guest Relations", "Concierge Services", "VIP Management"]
  },
  {
    name: "Elena Rodriguez",
    position: "Spa & Wellness Director",
    department: "Wellness",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    bio: "Wellness expert creating transformative spa experiences and holistic health programs for our guests.",
    achievements: ["Certified Wellness Specialist", "International Spa Association Member", "Holistic Health Practitioner"],
    specialties: ["Spa Operations", "Wellness Programs", "Therapeutic Treatments"]
  }
];

const departments = [
  {
    name: "Guest Services",
    icon: Heart,
    description: "Dedicated to creating exceptional experiences for every guest",
    teamSize: "45 members",
    highlights: ["24/7 Concierge", "Multilingual Staff", "Personal Assistance"]
  },
  {
    name: "Culinary Team",
    icon: ChefHat,
    description: "Award-winning chefs and culinary professionals",
    teamSize: "35 members",
    highlights: ["Michelin Recognition", "International Cuisine", "Farm-to-Table"]
  },
  {
    name: "Operations",
    icon: Building,
    description: "Ensuring seamless hotel operations and maintenance",
    teamSize: "80 members",
    highlights: ["24/7 Operations", "Sustainability Focus", "Quality Assurance"]
  },
  {
    name: "Wellness & Spa",
    icon: Star,
    description: "Certified therapists and wellness professionals",
    teamSize: "25 members",
    highlights: ["Certified Therapists", "Holistic Treatments", "Wellness Programs"]
  }
];

export function TeamSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Users className="h-3 w-3 mr-1" />
            Our Team
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Meet Our Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our exceptional team of hospitality professionals is dedicated to creating 
            unforgettable experiences and maintaining the highest standards of service excellence.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {leadership.map((member, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                
                <Badge variant="secondary" className="absolute top-4 left-4 bg-white/90 text-black">
                  {member.department}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-base font-medium text-primary">
                  {member.position}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>

                {/* Achievements */}
                <div>
                  <h4 className="font-medium text-sm mb-2">Key Achievements:</h4>
                  <div className="space-y-1">
                    {member.achievements.slice(0, 2).map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center space-x-2 text-xs">
                        <Award className="h-3 w-3 text-primary" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specialties */}
                <div>
                  <h4 className="font-medium text-sm mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty, specIndex) => (
                      <Badge key={specIndex} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm">
                    <Mail className="h-3 w-3 mr-1" />
                    Contact
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Departments Overview */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Our Departments
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each department plays a vital role in delivering the exceptional Narayani experience, 
              working together as one unified team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                    <dept.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{dept.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{dept.description}</p>
                  
                  <Badge variant="outline" className="mb-4">
                    {dept.teamSize}
                  </Badge>
                  
                  <div className="space-y-1">
                    {dept.highlights.map((highlight, hlIndex) => (
                      <div key={hlIndex} className="text-xs text-muted-foreground">
                        • {highlight}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Culture */}
        <div className="mt-20 bg-primary/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Our Team Culture
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe that exceptional service comes from passionate people who love what they do. 
              Our team culture is built on respect, growth, and shared commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="font-medium mb-1">Team Members</div>
              <div className="text-sm text-muted-foreground">Dedicated professionals</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="font-medium mb-1">Languages Spoken</div>
              <div className="text-sm text-muted-foreground">Multilingual service</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="font-medium mb-1">Employee Satisfaction</div>
              <div className="text-sm text-muted-foreground">Happy team members</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg">
              Join Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
