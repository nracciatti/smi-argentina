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
        <section className="sr-only">
          <h2>Reparación de puentes grúa</h2>
          <p>
            SMI Argentina ofrece servicios de reparación de puentes grúa,
            mantenimiento de puentes grúa, inspección técnica de equipos de
            izaje, revamping de grúas puente, polipastos y sistemas de elevación
            industrial en Argentina.
          </p>
        </section>
      </main>
      <Footer />
      <WhatsAppPopup />
      <BrandIntro />
    </>
  );
}
