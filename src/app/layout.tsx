import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mejores Frases de Amor | Inspiración y Reflexión",
  description: "Descubre las mejores frases de amor de autores reconocidos. Inspiración, reflexión y romanticismo en cada palabra.",
  keywords: "frases de amor, frases románticas, frases inspiradoras, amor",
  authors: [{ name: "Mejores Frases de Amor" }],
  openGraph: {
    title: "Mejores Frases de Amor",
    description: "Inspiración profunda en cada palabra",
    url: "https://mejoresfrasesdeamor.com",
    siteName: "Mejores Frases de Amor",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mejores Frases de Amor",
    description: "Inspiración profunda en cada palabra",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "index, follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mejores Frases de Amor",
    description: "Inspiración profunda en frases de amor",
    url: "https://mejoresfrasesdeamor.com",
    inLanguage: "es-ES",
  };

  return (
    <html
      lang="es"
      className="h-full antialiased light"
      style={{ colorScheme: "light" }}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="google-site-verification" content="YuuAQliI4fQsTcdsZ7LilCj2bJusiQRFV514gD7R82c" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
