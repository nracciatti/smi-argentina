"use client";

import { useState } from "react";
import { useInViewOnce } from "@/hooks/useInViewOnce";

export function Contact() {
  const { ref: headRef, inView: headIn } = useInViewOnce<HTMLDivElement>();
  const { ref: formRef, inView: formIn } = useInViewOnce<HTMLFormElement>();

  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      nombre: String(data.get("nombre") || ""),
      apellido: String(data.get("apellido") || ""),
      empresa: String(data.get("empresa") || ""),
      email: String(data.get("email") || ""),
      asunto: String(data.get("asunto") || ""),
      mensaje: String(data.get("mensaje") || ""),
      // honeypot (si viene lleno, casi seguro bot)
      website: String(data.get("website") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const j = await res.json().catch(() => null);
        throw new Error(j?.error || "Error al enviar el mensaje");
      }

      setOk(true);
      form.reset();
    } catch (err: any) {
      setOk(false);
      setError(
        err?.message || "No se pudo enviar el mensaje. Probá nuevamente."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contacto" className="bg-white">
      <div className="relative overflow-hidden border-y border-[rgb(var(--line))] bg-gradient-to-r from-[rgb(var(--brand))]/6 to-transparent">
        <div
          ref={headRef}
          className={`container py-12 md:py-16 reveal ${headIn ? "is-in" : ""}`}
        >
          <span className="badge">Contacto</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[rgb(var(--brand))] md:text-4xl">
            Contacto técnico
          </h2>
          <p className="p mt-3 max-w-3xl">
            Enviá tu consulta y respondemos con alcance, requerimientos y
            próximos pasos.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <form
            ref={formRef}
            onSubmit={onSubmit}
            className={`reveal ${
              formIn ? "is-in" : ""
            } mx-auto max-w-3xl rounded-2xl border border-[rgb(var(--line))] bg-white p-6 shadow-sm`}
          >
            {/* Honeypot anti-spam (no tocar) */}
            <div className="hidden" aria-hidden="true">
              <label>
                Website
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[rgb(var(--muted))]">
                  Nombre
                </label>
                <input
                  required
                  name="nombre"
                  className="input"
                  placeholder="Juan"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[rgb(var(--muted))]">
                  Apellido
                </label>
                <input
                  required
                  name="apellido"
                  className="input"
                  placeholder="Pérez"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[rgb(var(--muted))]">
                  Empresa
                </label>
                <input
                  name="empresa"
                  className="input"
                  placeholder="Empresa S.A."
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[rgb(var(--muted))]">
                  Email
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  className="input"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[rgb(var(--muted))]">
                  Asunto
                </label>
                <input
                  required
                  name="asunto"
                  className="input"
                  placeholder="Inspección de puente grúa"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[rgb(var(--muted))]">
                  Mensaje
                </label>
                <textarea
                  required
                  name="mensaje"
                  rows={6}
                  className="textarea"
                  placeholder="Contanos tipo de equipo, ubicación, urgencia y cualquier detalle técnico relevante…"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs text-[rgb(var(--muted))]">
                Te respondemos al email que ingresaste.
              </div>

              <button
                disabled={loading}
                className="btn-primary disabled:opacity-60"
                type="submit"
              >
                {loading ? "Enviando..." : "Enviar consulta"}
              </button>
            </div>

            {ok === true && (
              <div className="mt-4 rounded-xl border border-[rgb(var(--line))] bg-green-50 p-3 text-sm text-green-700">
                Listo: tu mensaje se envió correctamente.
              </div>
            )}

            {ok === false && (
              <div className="mt-4 rounded-xl border border-[rgb(var(--line))] bg-red-50 p-3 text-sm text-red-700">
                {error ?? "Ocurrió un error al enviar el mensaje."}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
