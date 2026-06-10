import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.name} | Raising Business`,
    template: `%s | ${site.name}`,
  },
  description:
    "Mantenimiento, inspección, reparación y revamping de puentes grúa y equipos de izaje. Servicio técnico industrial en Argentina. Respuesta rápida y cumplimiento normativo.",
  applicationName: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon-smi.ico",
  },
  openGraph: {
    type: "website",
    url: `https://${site.domain}`,
    title: `Servicios de Izaje Industrial en Argentina | ${site.name}`,
    description:
      "Mantenimiento, inspección, reparación y revamping de puentes grúa y equipos de izaje. Servicio técnico industrial en Argentina.",
    siteName: site.name,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} - Izaje Industrial`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Servicios de Izaje Industrial | ${site.name}`,
    description:
      "Mantenimiento e inspección de puentes grúa, reparación de equipos de izaje y servicios técnicos industriales en Argentina.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-18217037623"
        strategy="afterInteractive"
      />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-18217037623');
        `}
      </Script>
      <body>{children}</body>
    </html>
  );
}
