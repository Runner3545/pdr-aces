import { Poppins } from "next/font/google";
import { Footer, Header } from "@/components";
import { PageWrapper } from "@/ui";

import "../styles/variables.css";
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/paged-scroller.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "PDRACES",
  description: "Paintless Dent Repair Specialists",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "PDRACES",
    description: "Paintless Dent Repair Specialists",
    siteName: "PDRACES",
    images: [
      {
        url: "./favicon.ico",
        width: 1200,
        height: 630,
        alt: "PDRACES - Paintless Dent Repair Specialists",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
