"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Grid3X3, Maximize, X, ChevronLeft, ChevronRight } from "lucide-react";

interface RoomGalleryProps {
  images: string[];
  roomName: string;
}

export function RoomGallery({ images, roomName }: RoomGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = React.useState(false);

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = React.useCallback((event: KeyboardEvent) => {
    if (!isGalleryOpen) return;
    
    if (event.key === "ArrowRight") {
      nextImage();
    } else if (event.key === "ArrowLeft") {
      prevImage();
    } else if (event.key === "Escape") {
      setIsGalleryOpen(false);
    }
  }, [isGalleryOpen]);

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section className="relative">
      {/* Main Gallery Grid */}
      <div className="grid grid-cols-4 gap-2 h-[60vh] md:h-[70vh]">
        {/* Main Image */}
        <div className="col-span-4 md:col-span-2 relative group cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
          <Image
            src={images[0]}
            alt={`${roomName} - Main view`}
            fill
            className="object-cover rounded-l-lg md:rounded-l-none"
            priority
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-l-lg md:rounded-l-none" />
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <Badge className="bg-white/90 text-black">
              <Maximize className="h-3 w-3 mr-1" />
              View Full Size
            </Badge>
          </div>
        </div>

        {/* Secondary Images */}
        <div className="hidden md:block col-span-1 space-y-2">
          {images.slice(1, 3).map((image, index) => (
            <div 
              key={index} 
              className="relative h-[calc(50%-4px)] group cursor-pointer"
              onClick={() => {
                setSelectedImageIndex(index + 1);
                setIsGalleryOpen(true);
              }}
            >
              <Image
                src={image}
                alt={`${roomName} - View ${index + 2}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>

        {/* More Images Grid */}
        <div className="hidden md:block col-span-1 space-y-2">
          {images.slice(3, 5).map((image, index) => (
            <div 
              key={index} 
              className="relative h-[calc(50%-4px)] group cursor-pointer"
              onClick={() => {
                setSelectedImageIndex(index + 3);
                setIsGalleryOpen(true);
              }}
            >
              <Image
                src={image}
                alt={`${roomName} - View ${index + 4}`}
                fill
                className="object-cover rounded-r-lg"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-r-lg" />
              {index === 1 && images.length > 5 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-r-lg">
                  <div className="text-white text-center">
                    <Grid3X3 className="h-8 w-8 mx-auto mb-2" />
                    <span className="text-lg font-semibold">+{images.length - 5}</span>
                    <div className="text-sm">More Photos</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View All Photos Button */}
      <div className="md:hidden absolute bottom-4 right-4">
        <Button 
          variant="secondary" 
          className="bg-white/90 text-black hover:bg-white"
          onClick={() => setIsGalleryOpen(true)}
        >
          <Grid3X3 className="h-4 w-4 mr-2" />
          View All {images.length} Photos
        </Button>
      </div>

      {/* Desktop View All Photos Button */}
      <div className="hidden md:block absolute bottom-4 right-4">
        <Button 
          variant="secondary" 
          className="bg-white/90 text-black hover:bg-white"
          onClick={() => setIsGalleryOpen(true)}
        >
          <Grid3X3 className="h-4 w-4 mr-2" />
          View All {images.length} Photos
        </Button>
      </div>

      {/* Full Screen Gallery Dialog */}
      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent className="max-w-7xl w-full h-full max-h-screen p-0 bg-black">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              onClick={() => setIsGalleryOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 z-10">
              <Badge className="bg-black/50 text-white">
                {selectedImageIndex + 1} / {images.length}
              </Badge>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 z-10 text-white hover:bg-white/20"
              onClick={prevImage}
              disabled={images.length <= 1}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 z-10 text-white hover:bg-white/20"
              onClick={nextImage}
              disabled={images.length <= 1}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Main Image */}
            <div className="relative w-full h-full max-w-5xl max-h-[80vh]">
              <Image
                src={images[selectedImageIndex]}
                alt={`${roomName} - View ${selectedImageIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="flex space-x-2 bg-black/50 p-2 rounded-lg max-w-md overflow-x-auto">
                {images.map((image, index) => (
                  <button
                    key={index}
                    className={`relative w-16 h-12 flex-shrink-0 rounded overflow-hidden ${
                      index === selectedImageIndex ? 'ring-2 ring-white' : ''
                    }`}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
