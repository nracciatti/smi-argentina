"use client";

import Link from "next/link";
import { useInViewOnce } from "@/hooks/useInViewOnce";

const services = [
  {
    title: "Inspección de equipos de izaje",
    desc: "Inspecciones periódicas orientadas a prevenir fallas, reducir paradas no planificadas y evitar costos innecesarios.",
    bullets: [
      "Inspección trimestral integral de equipos y elementos de izaje",
      "Detección temprana de desvíos y riesgos operativos",
      "Informe técnico con recomendaciones",
      "Enfoque en mantenimiento predictivo",
    ],
  },
  {
    title: "Reparaciones y mantenimiento",
    desc: "Mantenimiento preventivo, correctivo y reparación de equipos de izaje y movimiento de cargas.",
    bullets: [
      "Intervenciones con herramental específico",
      "Técnicos electromecánicos, eléctricos y electrónicos",
      "Soporte de ingenieros calculistas y electromecánicos",
      "Procedimientos técnicos y registro de tareas",
    ],
  },
  {
    title: "Fabricación y montaje",
    desc: "Fabricación, montaje y puesta en marcha de equipos y estructuras de izaje para grandes cargas.",
    bullets: [
      "Puentes grúa, pórticos y semi pórticos",
      "Grúas portuarias, transtainers y monorrieles",
      "Polipastos, grúas torre y grúas tipo pluma",
      "Sistemas de electrificación y automatización",
    ],
  },
  {
    title: "Capacitaciones in company",
    desc: "Capacitación técnica para operadores, riggers y supervisores adaptada a cada operación.",
    bullets: [
      "Cursos para operadores de equipos de izaje",
      "Formación para riggers y supervisores",
      "Curso de autoelevadores según Resolución 960/15",
      "Enfoque en seguridad y operación eficiente",
    ],
  },
];

export function Services() {
  const { ref: headRef, inView: headIn } = useInViewOnce<HTMLDivElement>();
  const { ref: gridRef, inView: gridIn } = useInViewOnce<HTMLDivElement>();
  const { ref: trustRef, inView: trustIn } = useInViewOnce<HTMLDivElement>();
  const { ref: ctaRef, inView: ctaIn } = useInViewOnce<HTMLDivElement>();

  return (
    <section id="servicios" className="bg-white">
      {/* Mini-hero de sección */}
      <div className="relative overflow-hidden border-b border-[rgb(var(--line))] bg-gradient-to-r from-[rgb(var(--brand))]/5 to-transparent">
        <div
          ref={headRef}
          className={`container py-12 md:py-16 reveal ${headIn ? "is-in" : ""}`}
        >
          <span className="badge">Servicios</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[rgb(var(--brand))] md:text-4xl">
            Servicios industriales de izaje
          </h2>

          <div className="mt-4 max-w-3xl space-y-3">
            <p className="p">
              Mano de obra calificada para fabricación y montaje, inspección,
              mantenimiento y reparación (revamping) de equipos de izaje y
              movimiento de grandes cargas, con foco en seguridad, continuidad
              operativa y cumplimiento técnico.
            </p>

            <p className="p">
              Especialistas en puentes grúa pórtico y semi pórtico,
              transtainers, grúas portuarias, monorrieles, polipastos,
              autoelevadores, grúas torre y grúas tipo pluma. Soluciones
              integrales en electrificación, automatización, controles a
              distancia y ensayos no destructivos (END).
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[rgb(var(--brand))]/10 blur-3xl" />
      </div>

      {/* Cards */}
      <div className="section">
        <div className="container">
          <div
            ref={gridRef}
            className={`grid gap-6 md:grid-cols-2 reveal ${
              gridIn ? "is-in" : ""
            }`}
          >
            {services.map((s, i) => (
              <div
                key={s.title}
                className={[
                  "card group relative overflow-hidden border border-[rgb(var(--line))] bg-white shadow-sm transition-all",
                  "hover:-translate-y-1 hover:shadow-md hover:border-[rgb(var(--brand))]/30",
                  "reveal",
                  gridIn ? "is-in" : "",
                ].join(" ")}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-[3px] bg-[rgb(var(--brand))]" />

                <div className="p-6">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-[rgb(var(--brand))]">
                    Servicio
                  </div>

                  <div className="text-lg font-semibold text-[rgb(var(--fg))]">
                    {s.title}
                  </div>
                  <p className="p mt-2">{s.desc}</p>

                  <ul className="mt-4 space-y-2 text-sm text-[rgb(var(--muted))]">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent))]" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#contacto"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--accent))] transition group-hover:underline"
                  >
                    Consultar este servicio <span aria-hidden>→</span>
                  </Link>
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent to-[rgb(var(--brand))] opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
              </div>
            ))}
          </div>

          {/* Bloque de confianza */}
          <div
            ref={trustRef}
            className={`my-12 grid gap-6 md:grid-cols-2 reveal ${
              trustIn ? "is-in" : ""
            }`}
          >
            <div className="rounded-2xl border border-[rgb(var(--line))] bg-[rgb(var(--brand))]/5 p-8">
              <h3 className="text-xl font-semibold text-[rgb(var(--brand))]">
                Enfoque técnico orientado a operación segura
              </h3>
              <p className="p mt-3">
                Priorizamos seguridad operativa, reducción de paradas no
                planificadas y documentación técnica para mantenimiento
                planificado y auditorías internas.
              </p>
            </div>

            <div className="rounded-2xl border border-[rgb(var(--line))] bg-white p-8">
              <div className="text-sm font-semibold text-[rgb(var(--fg))]">
                Qué entregamos
              </div>
              <ul className="mt-4 space-y-2 text-sm text-[rgb(var(--muted))]">
                <li>• Relevamiento en planta y definición de alcance</li>
                <li>• Informe técnico con evidencia (fotos/mediciones)</li>
                <li>
                  • Recomendaciones y plan de acción priorizado por criticidad
                </li>
                <li>• Registro de intervención y trazabilidad</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA final con sheen */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,42,94,0.95)] to-[rgba(10,42,94,0.75)]" />
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-40 top-0 h-full w-40 skew-x-[-20deg] bg-white/10 animate-[sheen_4.5s_ease-in-out_infinite]" />
        </div>

        <div
          ref={ctaRef}
          className={`relative container py-14 md:py-16 text-white reveal ${
            ctaIn ? "is-in" : ""
          }`}
        >
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
            ¿Necesitás inspección, mantenimiento o modernización de equipos de
            izaje?
          </h3>
          <p className="mt-3 max-w-2xl text-sm text-white/85 md:text-base">
            Coordiná una visita técnica o solicitá cotización. Respondemos con
            alcance, requerimientos y próximos pasos.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center rounded-xl bg-[rgb(var(--accent))] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:brightness-95"
            >
              Solicitar cotización técnica
            </Link>

            <Link
              href="#contacto"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Contacto
            </Link>
          </div>
        </div>

        <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      </div>
    </section>
  );
}
