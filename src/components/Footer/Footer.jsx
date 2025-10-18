import styles from "./Footer.module.css";
import { texts } from "@/constants";
import { Text } from "@/ui";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Text align="center">{texts.footer.footer_text}</Text>
      <div className={styles.socials}>
        <a
          href="https://www.instagram.com/pdraces?igsh=ZWNlN2ZiaGM5NzZl&utm_source=qr"
          target="_blank"
          aria-label="Instagram"
        >
          Instagram
        </a>
        <a
          href="https://www.tiktok.com/@pdraces?_t=ZT-90Nv7zLdZaH"
          target="_blank"
          aria-label="TikTok"
        >
          TikTok
        </a>
        <a
          href="https://www.facebook.com/share/1A3y3GGqoW/?mibextid=wwXIfr"
          target="_blank"
          aria-label="Facebook"
        >
          Facebook
        </a>
        <a
          href="https://youtube.com/@pdraces?si=vajtbK0Nk6QVPzEX"
          target="_blank"
          aria-label="YouTube"
        >
          YouTube
        </a>
        <a href="https://yelp.to/sG1JBQXoF8" target="_blank" aria-label="Yelp">
          Yelp
        </a>
      </div>
    </div>
  );
}
