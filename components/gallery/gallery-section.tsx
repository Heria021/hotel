"use client";

import * as React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryImages = {
  rooms: [
    {
      src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Deluxe King Room",
      category: "Accommodations"
    },
    {
      src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Executive Suite",
      category: "Accommodations"
    },
    {
      src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      title: "Presidential Suite",
      category: "Accommodations"
    },
    {
      src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Family Room",
      category: "Accommodations"
    }
  ],
  dining: [
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Narayani Signature Restaurant",
      category: "Dining"
    },
    {
      src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      title: "Sky Lounge & Bar",
      category: "Dining"
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Garden Café",
      category: "Dining"
    }
  ],
  amenities: [
    {
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Luxury Spa",
      category: "Wellness"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Fitness Center",
      category: "Wellness"
    },
    {
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Swimming Pool",
      category: "Recreation"
    }
  ],
  hotel: [
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Hotel Exterior",
      category: "Architecture"
    },
    {
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      title: "Grand Lobby",
      category: "Interior"
    },
    {
      src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "City Views",
      category: "Location"
    }
  ]
};

export function GallerySection() {
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const allImages = Object.values(galleryImages).flat();
  const filteredImages = selectedCategory === "all" 
    ? allImages 
    : galleryImages[selectedCategory as keyof typeof galleryImages] || [];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Camera className="h-3 w-3 mr-1" />
            Photo Gallery
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Explore Narayani Hotel
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Take a visual journey through our luxurious accommodations, world-class amenities, 
            and stunning spaces that make Narayani Hotel an exceptional destination.
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto mb-12">
            <TabsTrigger value="all">All Photos</TabsTrigger>
            <TabsTrigger value="rooms">Rooms</TabsTrigger>
            <TabsTrigger value="dining">Dining</TabsTrigger>
            <TabsTrigger value="amenities">Amenities</TabsTrigger>
            <TabsTrigger value="hotel">Hotel</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedCategory}>
            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          onClick={() => setSelectedImage(index)}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-medium text-sm bg-black/50 px-2 py-1 rounded">
                            {image.title}
                          </h3>
                        </div>
                      </div>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full h-full max-h-screen p-0 bg-black">
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Close Button */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                        onClick={() => setSelectedImage(null)}
                      >
                        <X className="h-6 w-6" />
                      </Button>

                      {/* Navigation Buttons */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-4 z-10 text-white hover:bg-white/20"
                        onClick={prevImage}
                      >
                        <ChevronLeft className="h-8 w-8" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 z-10 text-white hover:bg-white/20"
                        onClick={nextImage}
                      >
                        <ChevronRight className="h-8 w-8" />
                      </Button>

                      {/* Main Image */}
                      <div className="relative w-full h-full max-w-4xl max-h-[80vh]">
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>

                      {/* Image Info */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="bg-black/50 text-white px-4 py-2 rounded-lg text-center">
                          <h3 className="font-medium">{image.title}</h3>
                          <p className="text-sm text-white/80">{image.category}</p>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Stats */}
        <div className="mt-16 bg-muted/30 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Captured Moments
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every corner of Narayani Hotel tells a story of luxury, comfort, and exceptional hospitality.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">{allImages.length}+</div>
              <div className="text-sm text-muted-foreground">Photos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Rooms</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Amenities</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">
            Experience It Yourself
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Pictures capture the beauty, but nothing compares to experiencing Narayani Hotel in person. 
            Book your stay and create your own unforgettable memories.
          </p>
          <Button size="lg">
            Book Your Stay
          </Button>
        </div>
      </div>
    </section>
  );
}
