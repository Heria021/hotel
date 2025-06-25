import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/navigation/footer";
import { RoomDetails } from "@/components/rooms/room-details";
import { RoomGallery } from "@/components/rooms/room-gallery";
import { BookingWidget } from "@/components/booking/booking-widget";
import { SimilarRooms } from "@/components/rooms/similar-rooms";

interface RoomPageProps {
  params: {
    slug: string;
  };
}

// This would typically come from a database or CMS
const getRoomData = (slug: string) => {
  const rooms = {
    "deluxe-king": {
      id: "deluxe-king",
      name: "Deluxe King Room",
      type: "Deluxe Room",
      description: "Experience comfort and elegance in our spacious Deluxe King Room. Featuring modern amenities, premium furnishings, and stunning city views, this room is perfect for business travelers and couples seeking a luxurious stay.",
      longDescription: "Our Deluxe King Room offers the perfect blend of comfort and sophistication. The room features a plush king-size bed with premium linens, a spacious work area with ergonomic seating, and a marble bathroom with rainfall shower. Floor-to-ceiling windows provide breathtaking city views and fill the space with natural light. Modern amenities include a 55-inch smart TV, complimentary high-speed WiFi, and a well-stocked minibar.",
      price: 299,
      originalPrice: 349,
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
      ],
      size: "450 sq ft",
      occupancy: "2 guests",
      bedType: "1 King Bed",
      view: "City View",
      floor: "15th-25th Floor",
      amenities: [
        "Free High-Speed WiFi",
        "55-inch Smart TV",
        "Air Conditioning",
        "24/7 Room Service",
        "Premium Minibar",
        "Coffee/Tea Maker",
        "In-room Safe",
        "Iron & Ironing Board",
        "Hair Dryer",
        "Bathrobes & Slippers",
        "Premium Bath Amenities",
        "Daily Housekeeping"
      ],
      features: [
        "King-size bed with premium linens",
        "Marble bathroom with rainfall shower",
        "Work desk with ergonomic chair",
        "Floor-to-ceiling windows",
        "Blackout curtains",
        "Climate control",
        "USB charging ports",
        "Telephone with voicemail"
      ]
    },
    "executive-suite": {
      id: "executive-suite",
      name: "Executive Suite",
      type: "Executive Suite",
      description: "Indulge in luxury with our Executive Suite featuring separate living and sleeping areas, premium amenities, and exclusive access to the Executive Lounge.",
      longDescription: "The Executive Suite represents the pinnacle of comfort and luxury. This spacious suite features a separate living room with comfortable seating, a dining area, and a fully equipped work station. The bedroom boasts a king-size bed with the finest linens, while the marble bathroom includes both a soaking tub and separate rainfall shower. Guests enjoy exclusive access to the Executive Lounge with complimentary breakfast, evening cocktails, and business services.",
      price: 599,
      originalPrice: 699,
      images: [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
      ],
      size: "750 sq ft",
      occupancy: "4 guests",
      bedType: "1 King Bed + Sofa Bed",
      view: "Mountain View",
      floor: "20th-30th Floor",
      amenities: [
        "Executive Lounge Access",
        "Free High-Speed WiFi",
        "65-inch Smart TV",
        "Air Conditioning",
        "24/7 Butler Service",
        "Premium Minibar",
        "Nespresso Machine",
        "In-room Safe",
        "Iron & Ironing Board",
        "Hair Dryer",
        "Luxury Bathrobes & Slippers",
        "Premium Bath Amenities",
        "Twice Daily Housekeeping",
        "Complimentary Breakfast",
        "Evening Cocktails"
      ],
      features: [
        "Separate living and sleeping areas",
        "King-size bed with luxury linens",
        "Marble bathroom with soaking tub",
        "Separate rainfall shower",
        "Dining area for 4",
        "Work station with printer",
        "Panoramic mountain views",
        "Premium sound system"
      ]
    }
  };

  return rooms[slug as keyof typeof rooms] || null;
};

export default function RoomPage({ params }: RoomPageProps) {
  const room = getRoomData(params.slug);

  if (!room) {
    return (
      <div className="min-h-screen flex flex-col">
        <MainNav />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Room Not Found</h1>
            <p className="text-muted-foreground">The room you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">
        {/* Room Gallery */}
        <RoomGallery images={room.images} roomName={room.name} />
        
        {/* Room Details */}
        <RoomDetails room={room} />
        
        {/* Booking Section */}
        <section className="py-8 bg-muted/30">
          <div className="container">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Ready to Book?</h2>
              <p className="text-muted-foreground">Select your dates and reserve this room</p>
            </div>
            <div className="flex justify-center">
              <BookingWidget variant="hero" />
            </div>
          </div>
        </section>
        
        {/* Similar Rooms */}
        <SimilarRooms currentRoomId={room.id} />
      </main>
      <Footer />
    </div>
  );
}
