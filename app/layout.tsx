import type { Metadata } from "next";
import { Montserrat, Lato, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Granja GMG",
  description: "Granja de eventos sociales en Chihuahua, al costado de Romanzza. Alberca, áreas verdes y área techada para tu evento perfecto. Contáctanos por WhatsApp.",
  keywords: "granja eventos, eventos sociales Chihuahua, salón eventos, alberca, Romanzza",
  openGraph: {
    title: "Granja GMG - Tu evento, como lo soñaste",
    description: "El lugar perfecto para tu evento social en Chihuahua",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${lato.variable} ${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
