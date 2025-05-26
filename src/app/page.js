import Header1 from "@/components/sections/Header1";
import Hero1 from "@/components/sections/Hero1";
import Services1 from "@/components/sections/Services1";
import Testimonial1 from "@/components/sections/Testimonial1";
import Contact1 from "@/components/sections/Contact1";
import Footer1 from "@/components/sections/Footer1";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header1 />
      <Hero1 />
      <Services1 />
      <Testimonial1 />
      <Contact1 />
      <Footer1 />
    </main>
  );
} 