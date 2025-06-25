import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/navigation/footer";
import { FAQSection } from "@/components/faq/faq-section";

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
