import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/navigation/footer";
import { AmenitiesHero } from "@/components/amenities/amenities-hero";
import { AmenitiesGrid } from "@/components/amenities/amenities-grid";
import { AmenitiesShowcase } from "@/components/amenities/amenities-showcase";

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">
        <AmenitiesHero />
        <AmenitiesGrid />
        <AmenitiesShowcase />
      </main>
      <Footer />
    </div>
  );
}
