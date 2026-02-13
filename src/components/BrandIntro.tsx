"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function BrandIntro() {
  const [show, setShow] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("brand_intro_seen");
    if (seen) return;

    sessionStorage.setItem("brand_intro_seen", "1");

    // modo intro activadoo
    document.documentElement.classList.add("intro-on");
    setShow(true);

    // tiempo visible y fade out
    const t1 = setTimeout(() => setFadeOut(true), 1000);
    const t2 = setTimeout(() => {
      setShow(false);
      document.documentElement.classList.remove("intro-on");
    }, 1100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.documentElement.classList.remove("intro-on");
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={[
        "fixed inset-0 z-[90] grid place-items-center",
        "bg-gradient-to-b from-white via-white to-gray-50",
        "transition-opacity duration-300",
        fadeOut ? "opacity-0" : "opacity-100",
      ].join(" ")}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center text-center animate-introScaleIn">
        <Image
          src="/images/logo-HD.png"
          alt="SMI Argentina"
          width={420}
          height={140}
          className="h-28 w-auto object-contain md:h-32"
          priority
        />

        <div className="mt-4 text-base font-semibold tracking-[0.18em] text-[rgb(var(--brand))]">
          SERVICIOS INDUSTRIALES DE IZAJE
        </div>

        <div className="mt-2 text-sm tracking-wide text-[rgb(var(--muted))]">
          Inspección · Mantenimiento · Revamping · Fabricación y montaje
        </div>

        <div className="mt-7 h-[4px] w-72 rounded-full bg-[rgb(var(--brand))]" />
      </div>
    </div>
  );
}
