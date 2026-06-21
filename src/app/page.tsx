import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <Features />
        <Testimonials />
        <Pricing />
      </main>
    </>
  );
}
