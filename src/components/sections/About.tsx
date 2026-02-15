"use client";

import Image from "next/image";
import Link from "next/link";
import { useInViewOnce } from "@/hooks/useInViewOnce";

export function About() {
  const { ref: headRef, inView: headIn } = useInViewOnce<HTMLDivElement>();
  const { ref: gridRef, inView: gridIn } = useInViewOnce<HTMLDivElement>();
  const { ref: pillarsRef, inView: pillarsIn } =
    useInViewOnce<HTMLDivElement>();

  return (
    <section id="nosotros" className="bg-white">
      <div className="relative overflow-hidden border-y border-[rgb(var(--line))] bg-gradient-to-r from-[rgb(var(--brand))]/6 to-transparent">
        <div
          ref={headRef}
          className={`container py-12 md:py-16 reveal ${headIn ? "is-in" : ""}`}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="badge">Nosotros</span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[rgb(var(--brand))] md:text-4xl">
                Ingeniería y mano de obra calificada para izaje industrial
              </h2>
              <p className="p mt-3">
                En SMI trabajamos con un enfoque técnico orientado a{" "}
                <strong>seguridad operativa</strong>,{" "}
                <strong>continuidad de producción</strong> y{" "}
                <strong>documentación</strong>. Conocemos el terreno y hablamos
                el lenguaje de planta: diagnóstico, intervención y trazabilidad.
              </p>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[rgb(var(--brand))]/10 blur-3xl" />
      </div>

      <div className="section">
        <div className="container">
          <div
            ref={gridRef}
            className={`grid gap-8 md:grid-cols-12 reveal ${
              gridIn ? "is-in" : ""
            }`}
          >
            <div className="md:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-[rgb(var(--line))] bg-gray-100 shadow-sm">
                <div className="absolute inset-x-0 top-0 h-[3px] bg-[rgb(var(--accent))]" />
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/works/arnes.jpeg"
                    alt="Equipo técnico SMI en planta"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="text-sm font-semibold text-[rgb(var(--fg))]">
                    Enfoque de campo + soporte de ingeniería
                  </div>
                  <p className="p mt-2">
                    Intervenciones planificadas, ejecución segura y reporte
                    técnico para mantenimiento planificado y auditorías
                    internas.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-[rgb(var(--line))] bg-[rgb(var(--brand))]/5 p-5">
                <div className="text-sm font-semibold text-[rgb(var(--brand))]">
                  Dirección
                </div>
                <p className="p mt-2">
                  <strong>Ruben H. Llorens</strong> • Dirección y gestión
                  técnica.
                </p>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-semibold tracking-tight text-[rgb(var(--fg))]">
                  Visión y misión con foco industrial
                </h3>
                <p className="p mt-3">
                  Buscamos ser un referente por la calidad de ejecución, mano de
                  obra calificada y atención al cliente. Nuestra misión es
                  simple:{" "}
                  <strong>
                    elevar cargas y elevar el rendimiento reduciendo costos
                  </strong>{" "}
                  mediante servicios técnicos confiables.
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="card border border-[rgb(var(--line))] bg-white p-6 shadow-sm">
                  <div className="text-sm font-semibold text-[rgb(var(--brand))]">
                    Visión
                  </div>
                  <p className="p mt-2">
                    Liderar por experiencia, personal calificado y una atención
                    técnica consistente, siendo referencia en el mercado de
                    izaje industrial.
                  </p>
                </div>

                <div className="card border border-[rgb(var(--line))] bg-white p-6 shadow-sm">
                  <div className="text-sm font-semibold text-[rgb(var(--brand))]">
                    Misión
                  </div>
                  <p className="p mt-2">
                    Mejorar seguridad y rendimiento operativo, reduciendo costos
                    a través de mantenimiento, inspección y modernización con
                    trazabilidad.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-[rgb(var(--line))] bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-[rgb(var(--fg))]">
                  Capacidades clave
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {[
                    "Mantenimiento y reparación de equipos de izaje",
                    "Inspecciones técnicas y documentación",
                    "Capacitación de operadores (in company)",
                    "Herramental y procedimientos adecuados",
                    "Personal técnico calificado",
                    "Enfoque en continuidad y seguridad operativa",
                  ].map((x) => (
                    <div
                      key={x}
                      className="flex gap-2 text-sm text-[rgb(var(--muted))]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent))]" />
                      {x}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            ref={pillarsRef}
            className={`mt-12 grid gap-6 md:grid-cols-3 reveal ${
              pillarsIn ? "is-in" : ""
            }`}
          >
            {[
              {
                title: "Seguridad operativa",
                desc: "Priorizamos prevención de riesgos, chequeos críticos y ejecución segura en campo.",
              },
              {
                title: "Calidad y trazabilidad",
                desc: "Documentación y registros para mantenimiento planificado, auditorías y control interno.",
              },
              {
                title: "Continuidad de producción",
                desc: "Planificación por ventanas operativas y enfoque en reducir paradas no planificadas.",
              },
            ].map((p, i) => (
              <div
                key={p.title}
                className="card rounded-2xl border border-[rgb(var(--line))] bg-gray-50/70 p-6 shadow-sm"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-sm font-semibold text-[rgb(var(--fg))]">
                  {p.title}
                </div>
                <p className="p mt-2">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
