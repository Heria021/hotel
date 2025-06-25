import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/navigation/footer";
import { DiningHero } from "@/components/amenities/dining/dining-hero";
import { RestaurantShowcase } from "@/components/amenities/dining/restaurant-showcase";
import { MenuHighlights } from "@/components/amenities/dining/menu-highlights";
import { DiningReservation } from "@/components/amenities/dining/dining-reservation";

export default function DiningPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">
        <DiningHero />
        <RestaurantShowcase />
        <MenuHighlights />
        <DiningReservation />
      </main>
      <Footer />
    </div>
  );
}
