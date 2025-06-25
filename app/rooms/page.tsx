import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/navigation/footer";
import { BookingWidget } from "@/components/booking/booking-widget";
import { RoomsList } from "@/components/rooms/rooms-list";
import { RoomsFilters } from "@/components/rooms/rooms-filters";
import { Badge } from "@/components/ui/badge";

export default function RoomsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4">
                Accommodations
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                Rooms & Suites
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover our collection of elegantly appointed rooms and suites, each designed 
                to provide the ultimate in comfort, luxury, and personalized service.
              </p>
            </div>
            
            {/* Booking Widget */}
            <div className="flex justify-center">
              <BookingWidget variant="compact" />
            </div>
          </div>
        </section>

        {/* Rooms Content */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <RoomsFilters />
              </div>
              
              {/* Rooms List */}
              <div className="lg:col-span-3">
                <RoomsList />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
