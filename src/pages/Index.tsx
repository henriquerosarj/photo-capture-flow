import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import BookingForm from "@/components/sections/BookingForm";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Gallery />
      <BookingForm />
    </main>
  );
};

export default Index;
