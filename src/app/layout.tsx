import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { site } from "@/lib/site";
import { GOOGLE_ADS_ID } from "@/lib/googleAds";

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
      <Script id="google-tag-manager" strategy="beforeInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T6GJQZZ7');
        `}
      </Script>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T6GJQZZ7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
