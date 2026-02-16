"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { site } from "@/lib/site";

function waLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

const highlights = [
  { k: "Cobertura", v: "Argentina" },
  { k: "Respuesta", v: "24–48h" },
  { k: "Entregables", v: "Informe + registro técnico" },
];

const chips = [
  "Puentes grúa",
  "Grúas pórtico / semi pórtico",
  "Polipastos",
  "Electrificación",
  "Automatización",
  "END / Inspección",
];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [y, setY] = useState(0);

  const whatsappHref = useMemo(
    () =>
      waLink(
        "Hola, quiero solicitar una cotización técnica. Equipo/activo: ____. Ubicación: ____. Urgencia: ____."
      ),
    []
  );

  useEffect(() => {
    setMounted(true);

    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parallax = Math.min(18, y * 0.06);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${parallax}px)` }}
        >
          <Image
            src="/images/smi-arg-hero.jpg"
            alt="Izaje industrial - mantenimiento e inspección"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,42,94,0.95)] via-[rgba(10,42,94,0.80)] to-[rgba(10,42,94,0.45)]" />

        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_15%_20%,rgba(255,255,255,0.10),transparent_60%)]" />
      </div>

      <div className="relative">
        <div className="container py-16 md:py-24">
          <div className="grid items-end gap-10 md:grid-cols-[1.15fr_0.85fr]">
            <div
              className={[
                "text-white transition-all duration-700 ease-out",
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3",
              ].join(" ")}
            >
              <div
                className={[
                  "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm backdrop-blur transition-all duration-700",
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3",
                ].join(" ")}
                style={{ transitionDelay: "40ms" }}
              >
                <span className="h-2 w-2 rounded-full bg-[rgb(var(--accent))]" />
                Fabricación • Inspección • Mantenimiento • Revamping
              </div>

              <h1
                className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
                style={{ transitionDelay: "80ms" }}
              >
                Reparación y mantenimiento de puentes grúa.
              </h1>

              <p
                className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
                style={{ transitionDelay: "120ms" }}
              >
                Soluciones a la altura de su empresa.
              </p>

              <div
                className="mt-7 flex flex-wrap gap-3"
                style={{ transitionDelay: "160ms" }}
              >
                <Link
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-xl bg-[rgb(var(--accent))] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:brightness-95"
                >
                  Solicitar cotización técnica
                </Link>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Auditoría de equipo
                </a>

                <Link
                  href="#servicios"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Ver servicios
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {chips.map((c, i) => (
                  <span
                    key={c}
                    className={[
                      "rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/85 backdrop-blur",
                      "transition-all duration-700 ease-out",
                      mounted
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2",
                    ].join(" ")}
                    style={{ transitionDelay: `${220 + i * 45}ms` }}
                  >
                    {c}
                  </span>
                ))}
              </div>

              {/* Indicador scroll (opcional, discreto) */}
              <div className="mt-10 hidden items-center gap-2 text-xs text-white/70 md:flex">
                <span className="inline-block h-6 w-[1px] bg-white/30" />
                <span>Deslizá para ver servicios</span>
              </div>
            </div>

            {/* panel ficha tecnica */}
            <div
              className={[
                "relative overflow-hidden rounded-2xl border border-white/15 bg-white/15 backdrop-blur-md p-6 text-white ",
                "transition-all duration-700 ease-out",
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3",
              ].join(" ")}
              style={{ transitionDelay: "120ms" }}
            >
              {/* sheen sutil */}
              <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rotate-12 bg-white/10 blur-2xl" />
              <div className="pointer-events-none absolute -right-24 -bottom-24 h-64 w-64 rotate-12 bg-white/5 blur-2xl" />

              <div className="text-sm font-semibold">
                Ficha técnica de servicio
              </div>
              <p className="mt-2 text-sm text-white/80">
                Enfoque orientado a entornos industriales: seguridad,
                cumplimiento y reducción de paradas no planificadas.
              </p>

              <div className="mt-5 grid gap-3">
                {highlights.map((x) => (
                  <div
                    key={x.k}
                    className="flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-3"
                  >
                    <span className="text-sm text-white/85">{x.k}</span>
                    <span className="text-sm font-semibold">{x.v}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-white/15 bg-white/5 p-4">
                <div className="text-sm font-semibold">¿Qué recibís?</div>
                <ul className="mt-2 space-y-2 text-sm text-white/85">
                  <li>• Relevamiento + criticidad del activo</li>
                  <li>• Hallazgos con evidencia (fotos/mediciones)</li>
                  <li>• Recomendaciones y plan de acción</li>
                  <li>• Registro para mantenimiento planificado</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
