import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Calculator } from "@/components/Calculator";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { Partners } from "@/components/Partners";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-night/80 pb-24 text-white">
      <Header />
      <Hero />
      <Calculator />
      <Benefits />
      <HowItWorks />
      <FAQ />
      <Testimonials />
      <Partners />
      <CTA />
      <Footer />
    </main>
  );
}
