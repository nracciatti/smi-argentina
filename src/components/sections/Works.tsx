"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useInViewOnce } from "@/hooks/useInViewOnce";

const WORKS = [
  {
    src: "/images/works/puente-grua-75.jpeg",
    title: "Mantenimiento preventivo",
    meta: "Puente grúa 75 TON • Chequeo integral + ajustes",
  },
  {
    src: "/images/works/secure.jpeg",
    title: "Inspección técnica",
    meta: "Evaluación + recomendaciones",
  },
  {
    src: "/images/works/arnes.jpeg",
    title: "Seguro de arneses y cabo de vida",
    meta: "Asegurado de arneses y verificación de cabo de vida",
  },
  {
    src: "/images/works/guide.jpeg",
    title: "Reparación",
    meta: "Pórtico / semi pórtico • Puesta en marcha",
  },
  {
    src: "/images/works/extraccion-smi.jpeg",
    title: "Extracción",
    meta: "Reparado con bobinado • Colocación freno con traslación",
  },
  {
    src: "/images/works/conection.jpeg",
    title: "Conexión de tensión en carro",
    meta: "Verificación de alarma sonora • Puesta a punto",
  },
  {
    src: "/images/works/inspection.jpeg",
    title: "Inspección",
    meta: "Inspección visual • Debate previo con el equipo",
  },
];

function clampIndex(i: number, max: number) {
  if (i < 0) return 0;
  if (i > max) return max;
  return i;
}

export function Works() {
  const { ref: headRef, inView: headIn } = useInViewOnce<HTMLDivElement>();
  const { ref: gridRef, inView: gridIn } = useInViewOnce<HTMLDivElement>();
  const { ref: ctaRef, inView: ctaIn } = useInViewOnce<HTMLDivElement>();

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const total = WORKS.length;

  const openAt = useCallback(
    (idx: number) => {
      setActive(clampIndex(idx, total - 1));
      setOpen(true);
    },
    [total]
  );

  const close = useCallback(() => setOpen(false), []);
  const next = useCallback(() => setActive((i) => (i + 1) % total), [total]);
  const prev = useCallback(
    () => setActive((i) => (i - 1 + total) % total),
    [total]
  );

  // scroll block cuando estoy en lightbox
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // controles teclado
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, next, prev]);

  const current = useMemo(() => WORKS[active], [active]);

  return (
    <section id="trabajos" className="bg-white">
      {/* mini hero */}
      <div className="relative overflow-hidden border-y border-[rgb(var(--line))] bg-gradient-to-r from-[rgb(var(--brand))]/6 to-transparent">
        <div
          ref={headRef}
          className={`container py-12 md:py-16 reveal ${headIn ? "is-in" : ""}`}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="badge">Trabajos</span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[rgb(var(--brand))] md:text-4xl">
                Evidencia en campo
              </h2>
              <p className="p mt-3">
                Intervenciones reales en equipos de izaje y movimiento de
                cargas: inspección, mantenimiento, fabricación/montaje y
                revamping. Documentación técnica y enfoque en seguridad
                operativa.
              </p>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[rgb(var(--brand))]/10 blur-3xl" />
      </div>

      {/* Grid premium */}
      <div className="section">
        <div className="container">
          <div ref={gridRef} className={`reveal ${gridIn ? "is-in" : ""}`}>
            <div className="grid gap-4 md:grid-cols-12">
              {/* Columna grande */}
              <button
                type="button"
                onClick={() => openAt(0)}
                className={[
                  "group relative overflow-hidden rounded-2xl border border-[rgb(var(--line))] bg-gray-100 shadow-sm",
                  "md:col-span-7 md:row-span-2",
                  "transition-all hover:-translate-y-1 hover:shadow-md hover:border-[rgb(var(--brand))]/30",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(243,108,33,0.6)] focus-visible:ring-offset-2",
                  "reveal",
                  gridIn ? "is-in" : "",
                ].join(" ")}
                style={{ transitionDelay: "80ms" }}
                aria-label={`Abrir imagen: ${WORKS[0]?.title ?? "Trabajo"}`}
              >
                {/* ✅ Detalle de marca (accent) */}
                <div className="absolute inset-x-0 top-0 z-[2] h-[3px] bg-[rgb(var(--accent))]" />

                <div className="relative aspect-[16/10] md:aspect-[16/9]">
                  <Image
                    src={WORKS[0].src}
                    alt={`${WORKS[0].title} - ${WORKS[0].meta}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    priority
                  />

                  {/* ✅ Más contraste abajo para lectura */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 text-left text-white">
                    <div className="text-sm font-semibold">
                      {WORKS[0].title}
                    </div>
                    <div className="mt-1 text-xs text-white/80">
                      {WORKS[0].meta}
                    </div>
                  </div>

                  {/* “sheen” sutil al hover */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-40">
                    <div className="absolute -left-40 top-0 h-full w-40 skew-x-[-20deg] bg-white/10 animate-[sheen_4.5s_ease-in-out_infinite]" />
                  </div>
                </div>
              </button>

              {/* Tiles chicos */}
              {WORKS.slice(1, 7).map((w, i) => (
                <button
                  key={w.src}
                  type="button"
                  onClick={() => openAt(i + 1)}
                  className={[
                    "group relative overflow-hidden rounded-2xl border border-[rgb(var(--line))] bg-gray-100 shadow-sm",
                    "md:col-span-5",
                    "transition-all hover:-translate-y-1 hover:shadow-md hover:border-[rgb(var(--brand))]/30",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(243,108,33,0.6)] focus-visible:ring-offset-2",
                    "reveal",
                    gridIn ? "is-in" : "",
                  ].join(" ")}
                  style={{ transitionDelay: `${160 + i * 70}ms` }}
                  aria-label={`Abrir imagen: ${w.title}`}
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={w.src}
                      alt={`${w.title} - ${w.meta}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    {/* ✅ Unificamos overlay para mejor legibilidad */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-4 text-left text-white">
                      <div className="text-sm font-semibold">{w.title}</div>
                      <div className="mt-1 text-xs text-white/80">{w.meta}</div>
                    </div>
                  </div>
                </button>
              ))}

              {/* Tile CTA */}
              <div
                className={[
                  "relative overflow-hidden rounded-2xl border border-[rgb(var(--line))] bg-[rgb(var(--brand))]/5 p-6",
                  "md:col-span-5",
                  "reveal",
                  gridIn ? "is-in" : "",
                ].join(" ")}
                style={{ transitionDelay: "640ms" }}
              >
                <div className="text-sm font-semibold text-[rgb(var(--brand))]">
                  ¿Querés ver un caso similar al tuyo?
                </div>
                <p className="p mt-2">
                  Contanos tipo de equipo, ubicación y urgencia. Respondemos con
                  próximos pasos y alcance.
                </p>

                {/* ✅ Un solo CTA contextual */}
                <div className="mt-5">
                  <Link href="/servicios" className="btn-ghost">
                    Ver servicios
                  </Link>
                </div>

                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[rgb(var(--brand))]/10 blur-3xl" />
              </div>
            </div>
          </div>

          {/* CTA final (solo un botón fuerte) */}
          <div
            ref={ctaRef}
            className={`mt-12 rounded-2xl border border-[rgb(var(--line))] bg-gray-50/70 p-8 md:p-10 reveal ${
              ctaIn ? "is-in" : ""
            }`}
          >
            <div className="grid items-center gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-[rgb(var(--fg))]">
                  Coordinemos una visita técnica
                </h3>
                <p className="p mt-3">
                  Ideal para inspección, diagnóstico, mantenimiento planificado
                  o revamping. Definimos alcance y documentación requerida.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link href="/contacto" className="btn-primary">
                  Solicitar cotización técnica
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <div
        className={[
          "fixed inset-0 z-[80]",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        {/* Overlay */}
        <div
          className={[
            "absolute inset-0 bg-black/70 transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={close}
        />

        {/* Modal */}
        <div
          className={[
            "absolute left-1/2 top-1/2 w-[92%] max-w-5xl -translate-x-1/2 -translate-y-1/2",
            "transition-all duration-200",
            open ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]",
          ].join(" ")}
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada del trabajo"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
            <div className="relative aspect-[16/10] bg-black md:aspect-[16/9]">
              {current ? (
                <Image
                  src={current.src}
                  alt={`${current.title} - ${current.meta}`}
                  fill
                  className="object-contain"
                />
              ) : null}
            </div>

            <div className="flex flex-col gap-3 border-t border-white/10 bg-black/70 p-4 text-white md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm font-semibold">{current?.title}</div>
                <div className="text-xs text-white/75">{current?.meta}</div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15"
                  aria-label="Anterior"
                >
                  ←
                </button>
                <button
                  onClick={next}
                  className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15"
                  aria-label="Siguiente"
                >
                  →
                </button>
                <button
                  onClick={close}
                  className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15"
                  aria-label="Cerrar"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>

          <div className="mt-3 text-center text-xs text-white/70">
            Tip: usá flechas del teclado (← →) para navegar.
          </div>
        </div>
      </div>
    </section>
  );
}
