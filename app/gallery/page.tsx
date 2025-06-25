import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/navigation/footer";
import { GallerySection } from "@/components/gallery/gallery-section";

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}
