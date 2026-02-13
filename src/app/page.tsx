import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { Works } from "@/components/sections/Works";
import { About } from "@/components/sections/About";
import { WhatsAppPopup } from "@/components/WhatsAppPopUp";
import { BrandIntro } from "@/components/BrandIntro";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Works />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppPopup />
      <BrandIntro/>
    </>
  );
}
