import Link from "next/link";
import { site } from "@/lib/site";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=PEGAR_ACA_TU_SRC_COMPLETO";

export function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--line))] bg-[rgb(var(--brand))] text-white">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-lg font-semibold">{site.name}</div>
            <p className="mt-3 text-sm text-white/80">
              Servicios de izaje industrial, inspección, mantenimiento,
              reparación y revamping de equipos. Enfoque en seguridad y
              continuidad operativa.
            </p>

            <div className="mt-5 space-y-2 text-sm">
              <a
                className="block text-white/90 hover:text-white"
                href={`tel:${site.phone}`}
              >
                {site.phone}
              </a>
              <a
                className="block text-white/90 hover:text-white"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
              {site.address ? (
                <div className="text-white/80">{site.address}</div>
              ) : null}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-sm font-semibold">Secciones</div>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>
                <Link className="hover:text-white" href="#servicios">
                  Servicios
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="#trabajos">
                  Trabajos
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="#nosotros">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="#contacto">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* mapa */}
          <div className="md:col-span-5">
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-semibold">Ubicación</div>

              {/* cta como llegar */}
              {site.mapsUrl ? (
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-white/90 hover:text-white underline underline-offset-4"
                >
                  Cómo llegar →
                </a>
              ) : null}
            </div>

            <div className="mt-3 overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-sm">
              <div className="relative aspect-[16/10] md:aspect-[16/9]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15899.361383961852!2d-58.519281177699504!3d-34.55400819510912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb72001663b1d%3A0x5efcba2fe72ac866!2sVilla%20Martelli%2C%20Provincia%20de%20Buenos%20Aires!5e1!3m2!1ses!2sar!4v1771177434007!5m2!1ses!2sar"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full"
                  allowFullScreen
                  aria-label="Mapa de ubicación"
                />
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3">
                <div className="text-xs text-white/75">
                  {site.city ? `${site.city} •` : ""} Atención técnica con
                  coordinación previa.
                </div>

                {site.mapsUrl ? (
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15"
                  >
                    Abrir en Maps
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/70 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} {site.name}. Todos los derechos
            reservados.
          </div>
          <div className="text-white/60">
            Diseño y desarrollo • Racciatti.dev
          </div>
        </div>
      </div>
    </footer>
  );
}
