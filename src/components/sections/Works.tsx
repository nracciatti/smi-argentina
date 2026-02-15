"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
      {/* Header */}
      <div className="relative overflow-hidden border-y border-[rgb(var(--line))] bg-gradient-to-r from-[rgb(var(--brand))]/6 to-transparent">
        <div
          ref={headRef}
          className={`container py-12 md:py-16 reveal ${headIn ? "is-in" : ""}`}
        >
          <span className="badge">Trabajos</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[rgb(var(--brand))] md:text-4xl">
            Evidencia en campo
          </h2>
          <p className="p mt-3 max-w-3xl">
            Intervenciones reales en equipos de izaje y movimiento de cargas:
            inspección, mantenimiento, fabricación/montaje y revamping.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="section">
        <div className="container">
          <div ref={gridRef} className={`reveal ${gridIn ? "is-in" : ""}`}>
            <div className="grid gap-4 md:grid-cols-12">
              <button
                type="button"
                onClick={() => openAt(0)}
                className="group relative overflow-hidden rounded-2xl border border-[rgb(var(--line))] bg-gray-100 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md md:col-span-7 md:row-span-2"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={WORKS[0].src}
                    alt={`${WORKS[0].title} - ${WORKS[0].meta}`}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <div className="text-sm font-semibold">
                      {WORKS[0].title}
                    </div>
                    <div className="text-xs text-white/80">{WORKS[0].meta}</div>
                  </div>
                </div>
              </button>

              {WORKS.slice(1).map((w, i) => (
                <button
                  key={w.src}
                  type="button"
                  onClick={() => openAt(i + 1)}
                  className="group relative overflow-hidden rounded-2xl border border-[rgb(var(--line))] bg-gray-100 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md md:col-span-5"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={w.src}
                      alt={`${w.title} - ${w.meta}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <div className="text-sm font-semibold">{w.title}</div>
                      <div className="text-xs text-white/80">{w.meta}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* CTA final */}
          <div
            ref={ctaRef}
            className={`mt-12 rounded-2xl border border-[rgb(var(--line))] bg-gray-50/70 p-8 md:p-10 reveal ${
              ctaIn ? "is-in" : ""
            }`}
          >
            <h3 className="text-2xl font-semibold tracking-tight">
              Coordinemos una visita técnica
            </h3>
            <p className="p mt-3">
              Inspección, diagnóstico, mantenimiento planificado o revamping.
            </p>
            <Link href="#contacto" className="btn-primary mt-4 inline-block">
              Solicitar cotización técnica
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {mounted &&
        open &&
        current &&
        createPortal(
          <div className="fixed inset-0 z-[9999]">
            {/* Overlay */}
            <button
              type="button"
              aria-label="Cerrar"
              className="absolute inset-0 bg-black/70"
              onClick={close}
            />

            {/* Center */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div
                className="w-full max-w-5xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="overflow-hidden rounded-2xl bg-black shadow-2xl">
                  <div className="relative aspect-[16/9] max-h-[70vh] bg-black">
                    <Image
                      src={current.src}
                      alt={`${current.title} - ${current.meta}`}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 bg-black/70 p-4 text-white">
                    <div>
                      <div className="text-sm font-semibold">
                        {current.title}
                      </div>
                      <div className="text-xs text-white/75">
                        {current.meta}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={prev}
                        className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15"
                      >
                        ←
                      </button>
                      <button
                        type="button"
                        onClick={next}
                        className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15"
                      >
                        →
                      </button>
                      <button
                        type="button"
                        onClick={close}
                        className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15"
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
          </div>,
          document.body
        )}
    </section>
  );
}
