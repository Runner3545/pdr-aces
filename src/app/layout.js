import { Poppins } from "next/font/google";
import { Footer, Header, SectionPager } from "@/components";
import { PageWrapper } from "@/ui";

import "../styles/variables.css";
import "../styles/reset.css";
import "../styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "PDRACES",
  description: "Paintless Dent Repair Specialists",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Header />
        {/* <SectionPager headerSelector="header" delayMs={140} duration={0.8}> */}
        {children}
        {/* </SectionPager> */}

        <Footer />
      </body>
    </html>
  );
}
