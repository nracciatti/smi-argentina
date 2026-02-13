"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

type NavItem = { href: string; label: string };

const NAV: NavItem[] = [
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);

  const lastY = useRef(0);
  const ticking = useRef(false);

  // hide on scroll down / show on scroll up
  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY.current;

        // siempre visible cerca del top
        if (y < 20) {
          setHideNav(false);
          lastY.current = y;
          ticking.current = false;
          return;
        }

        // umbral anti-parpadeo
        if (Math.abs(delta) > 8) {
          if (delta > 0) setHideNav(true); // bajando
          else setHideNav(false); // subiendo
        }

        lastY.current = y;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock scroll cuando abre el drawer mobile
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* top bar fijo */}
      <div className="bg-[rgb(var(--brand))] text-white">
        <div className="container flex h-9 items-center justify-between text-xs">
          <span className="font-semibold">{site.name}</span>
          <div className="flex items-center gap-4">
            <a
              className="opacity-90 hover:opacity-100"
              href={`tel:${site.phone}`}
            >
              {site.phone}
            </a>
            <span className="opacity-40">•</span>
            <a
              className="opacity-90 hover:opacity-100"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>

      {/* nav principal */}
      <div
        className={[
          "border-b border-[rgb(var(--line))] bg-white transition-transform duration-300",
          hideNav ? "-translate-y-full" : "translate-y-0",
        ].join(" ")}
      >
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="SMI Argentina"
              width={96}
              height={28}
              className="h-7 w-auto object-contain md:h-8"
              priority
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-[rgb(var(--fg))] md:text-base">
                SMI Argentina
              </div>
              <div className="text-xs text-[rgb(var(--muted))]">
                Izaje industrial · Mantenimiento
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[rgb(var(--muted))] transition hover:text-[rgb(var(--fg))]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden items-center gap-2 md:flex">
            <a className="btn-ghost" href={`mailto:${site.email}`}>
              Email
            </a>
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center rounded-xl bg-[rgb(var(--accent))] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
            >
              Contáctenos
            </Link>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-xl border border-[rgb(var(--line))] bg-white px-3 py-2 text-sm font-semibold text-[rgb(var(--fg))] md:hidden"
          >
            Menú
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={[
          "fixed inset-0 z-[60] md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        {/* Overlay */}
        <div
          className={[
            "absolute inset-0 bg-black/40 transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={() => setOpen(false)}
        />

        {/* Panel */}
        <div
          className={[
            "absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-xl transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <div className="flex items-center justify-between border-b border-[rgb(var(--line))] p-4">
            <div className="text-sm font-semibold">{site.name}</div>
            <button
              className="rounded-xl border border-[rgb(var(--line))] px-3 py-2 text-sm font-semibold"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
            >
              Cerrar
            </button>
          </div>

          <div className="p-4">
            <div className="space-y-2">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl border border-[rgb(var(--line))] bg-white px-4 py-3 text-sm font-semibold text-[rgb(var(--fg))] hover:bg-gray-50"
                >
                  {item.label}
                  <span className="text-[rgb(var(--muted))]">→</span>
                </Link>
              ))}
            </div>

            <div className="mt-6 grid gap-2">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center rounded-xl border border-[rgb(var(--line))] bg-white px-4 py-3 text-sm font-semibold text-[rgb(var(--fg))] hover:bg-gray-50"
              >
                Enviar email
              </a>
              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-xl bg-[rgb(var(--accent))] px-4 py-3 text-sm font-semibold text-white hover:brightness-95"
              >
                Contáctenos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
