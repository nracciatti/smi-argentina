import Image from "next/image";

const companies = [
  { name: "Encometal", logo: "/images/trustClients/normalized/encometal.webp" },
  { name: "Voith", logo: "/images/trustClients/normalized/voith.webp" },
  { name: "Pilkington", logo: "/images/trustClients/normalized/pilkington.webp" },
  { name: "Defiba", logo: "/images/trustClients/normalized/defiba.webp" },
  { name: "Grupo Pecam", logo: "/images/trustClients/normalized/grupo-pecam.webp" },
  { name: "Ferrocarriles", logo: "/images/trustClients/normalized/ferrocarriles.webp" },
  { name: "Digo", logo: "/images/trustClients/normalized/digo.webp" },
  { name: "Cladd", logo: "/images/trustClients/normalized/cladd.webp" },
  { name: "Smurfit", logo: "/images/trustClients/normalized/smurfit.webp" },
  { name: "Seaboard", logo: "/images/trustClients/normalized/seaboard.webp" },
  { name: "Aluar", logo: "/images/trustClients/normalized/aluar.webp" },
  { name: "Cummins", logo: "/images/trustClients/normalized/cummins.webp" },
  { name: "Flowserve", logo: "/images/trustClients/normalized/flowserve.webp" },
  { name: "FPT", logo: "/images/trustClients/normalized/fpt.webp" },
  { name: "Jan De Nul", logo: "/images/trustClients/normalized/jan-de-nul.webp" },
  { name: "Motherson", logo: "/images/trustClients/normalized/motherson.webp" },
  {
    name: "Canteras Piatti",
    logo: "/images/trustClients/normalized/canteras-piatti.webp",
  },
  { name: "MSU Energy", logo: "/images/trustClients/normalized/msu-energy.webp" },
  {
    name: "Mazzeo",
    logo: "/images/trustClients/normalized/mazzeo-solo-el-triangulo-no-colocar-lo-de-haciendofuertealaindustria.webp",
  },
  { name: "Jacto", logo: "/images/trustClients/normalized/jacto.webp" },
  { name: "CESVI", logo: "/images/trustClients/normalized/cesvi.webp" },
  { name: "Iveco", logo: "/images/trustClients/normalized/iveco.webp" },
  { name: "Ferro Mallas", logo: "/images/trustClients/normalized/ferro-mallas.webp" },
  { name: "Tandanor", logo: "/images/trustClients/normalized/tandanor.webp" },
];

const marqueeCompanies = [...companies, ...companies];

export function TrustedCompanies() {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50">
      <div className="container py-10 md:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-blue-700" />
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">
            Empresas que confiaron en nosotros
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">
            Clientes y organizaciones que confían en nuestra capacidad técnica,
            respuesta y trazabilidad.
          </p>
        </div>

        <div
          aria-label="Carrusel de empresas que confiaron en SMI Argentina"
          className="pause-marquee mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <div className="animate-marquee flex w-max gap-4">
            {marqueeCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex h-24 w-[240px] shrink-0 items-center justify-center rounded-lg border border-neutral-300 bg-white px-4 py-3 shadow-sm transition hover:border-blue-700"
              >
                <Image
                  src={company.logo}
                  alt={`Logo de ${company.name}`}
                  width={320}
                  height={160}
                  className="h-full w-full object-contain"
                  loading="eager"
                  sizes="240px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
