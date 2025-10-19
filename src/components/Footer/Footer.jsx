"use client";

import styles from "./Footer.module.css";
import { texts } from "@/constants";
import { Text } from "@/ui";
import { Instagram, Facebook, Youtube, Music2 } from "lucide-react";
import YelpIcon from "@/ui/custom-icons/Yelp";
import Link from "next/link";
import { navigationMenu } from "@/constants/navigation";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* --- Social Media --- */}
        <div className={styles.socialLinks}>
          <a
            href="https://www.instagram.com/pdraces?igsh=ZWNlN2ZiaGM5NzZl&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={`${styles.socialItem} ${styles.instagram}`}
          >
            <Instagram className={styles.icon} />
            Instagram
          </a>

          <a
            href="https://www.tiktok.com/@pdraces?_t=ZT-90Nv7zLdZaH"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className={`${styles.socialItem} ${styles.tiktok}`}
          >
            <Music2 className={styles.icon} />
            TikTok
          </a>

          <a
            href="https://www.facebook.com/share/1A3y3GGqoW/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={`${styles.socialItem} ${styles.facebook}`}
          >
            <Facebook className={styles.icon} />
            Facebook
          </a>

          <a
            href="https://youtube.com/@pdraces?si=vajtbK0Nk6QVPzEX"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className={`${styles.socialItem} ${styles.youtube}`}
          >
            <Youtube className={styles.icon} />
            YouTube
          </a>

          <a
            href="https://yelp.to/sG1JBQXoF8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Yelp"
            className={`${styles.socialItem} ${styles.yelp}`}
          >
            <YelpIcon className={styles.icon} />
            Yelp
          </a>
        </div>

        {/* --- Navigation Links (minimal) --- */}
        <nav className={styles.quickLinks} aria-label="Quick links">
          {navigationMenu.map((item) => (
            <Link key={item.link} href={item.link} className={styles.link}>
              {item.title}
            </Link>
          ))}
        </nav>
      </div>

      {/* --- Bottom Text --- */}
      <div className={styles.footerBottom}>
        <Text align="center">{texts.footer.footer_text}</Text>
      </div>
    </footer>
  );
}
