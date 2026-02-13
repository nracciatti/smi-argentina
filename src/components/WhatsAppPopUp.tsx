"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const PHONE = "1133268700"; // ← poné el número real (sin + ni espacios)
const PRESET = encodeURIComponent(
  "Hola, quiero consultar por un servicio de izaje (tipo de equipo, ubicación y urgencia)."
);

export function WhatsAppPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setShowPopup(true);
      sessionStorage.setItem("wa_popup_seen", "1");
    }, 4500);

    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/*btn siempre visible*/}
      <Link
        href={`https://wa.me/${PHONE}?text=${PRESET}`}
        target="_blank"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-5 right-5 z-[70] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[rgb(var(--accent))] text-white shadow-lg ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]/60 focus-visible:ring-offset-2"
      >
        {/* icono wp */}
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-current"
          aria-hidden="true"
        >
          <path d="M19.11 17.63c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26 0 1.33.97 2.62 1.11 2.8.14.18 1.9 2.9 4.6 4.06.64.28 1.14.45 1.53.58.64.2 1.22.17 1.68.1.51-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
          <path d="M16 3C9.37 3 4 8.37 4 15c0 2.4.7 4.64 1.9 6.53L4 29l7.64-1.99A11.94 11.94 0 0 0 16 27c6.63 0 12-5.37 12-12S22.63 3 16 3zm0 21.6c-2.08 0-4.01-.6-5.64-1.64l-.4-.24-4.53 1.18 1.21-4.41-.26-.42A9.56 9.56 0 0 1 6.4 15C6.4 9.86 10.86 5.4 16 5.4S25.6 9.86 25.6 15 21.14 24.6 16 24.6z" />
        </svg>
      </Link>

      {/* Mini pop-up */}
      <div
        className={[
          "fixed bottom-24 right-5 z-[70] w-[92vw] max-w-sm transition-all duration-300",
          showPopup && !dismissed
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0",
        ].join(" ")}
        aria-hidden={!(showPopup && !dismissed)}
      >
        <div className="rounded-2xl border border-[rgb(var(--line))] bg-white p-4 shadow-xl">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-sm font-semibold text-[rgb(var(--fg))]">
                ¿Necesitás una cotización técnica?
              </div>
              <p className="mt-1 text-xs text-[rgb(var(--muted))]">
                Respondemos por WhatsApp. Contanos tipo de equipo, ubicación y
                urgencia.
              </p>
            </div>
            <button
              onClick={() => setDismissed(true)}
              aria-label="Cerrar"
              className="rounded-lg px-2 py-1 text-xs font-semibold text-[rgb(var(--muted))] hover:bg-gray-100"
            >
              ✕
            </button>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <Link
              href={`https://wa.me/${PHONE}?text=${PRESET}`}
              target="_blank"
              className="inline-flex items-center justify-center rounded-xl bg-[rgb(var(--accent))] px-4 py-2 text-xs font-semibold text-white hover:brightness-95"
            >
              Hablar por WhatsApp
            </Link>
            <button
              onClick={() => setDismissed(true)}
              className="rounded-xl border border-[rgb(var(--line))] px-3 py-2 text-xs font-semibold text-[rgb(var(--fg))] hover:bg-gray-50"
            >
              Más tarde
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
