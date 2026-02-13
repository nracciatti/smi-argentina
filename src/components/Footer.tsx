import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#0A1F33] text-white">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="SMI Argentina"
                width={40}
                height={40}
                className="rounded"
              />
              <div>
                <div className="font-semibold">SMI Argentina</div>
                <div className="text-xs text-white/70">
                  Izaje industrial · Mantenimiento · Revamping
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-white/70 max-w-xs">
              Servicios especializados en fabricación, inspección y
              mantenimiento de equipos de izaje para entornos industriales.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/80">
              Servicios
            </div>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Inspección técnica</li>
              <li>Mantenimiento y reparaciones</li>
              <li>Fabricación y montaje</li>
              <li>Capacitaciones in company</li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/80">
              Empresa
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#nosotros"
                  className="text-white/70 hover:text-white"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#trabajos"
                  className="text-white/70 hover:text-white"
                >
                  Trabajos
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="text-white/70 hover:text-white"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/80">
              Contacto
            </div>
            <ul className="space-y-2 text-sm text-white/70">
              <li>📞 +54 11 xxxx-xxxx</li>
              <li>✉️ contacto@smiargentina.com</li>
              <li>📍 Buenos Aires · Interior</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} SMI Argentina. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
