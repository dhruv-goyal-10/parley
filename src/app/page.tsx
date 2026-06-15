import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <Features />
      </main>
    </>
  );
}
