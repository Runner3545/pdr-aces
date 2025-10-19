import styles from "./Footer.module.css";
import { texts } from "@/constants";
import { Text } from "@/ui";

function Badge({ href, className, icon, title, subtitle, right }) {
  const Content = (
    <div className={`${styles.badge} ${className || ""}`}>
      <div className={styles.badgeLeft}>
        <span className={styles.iconWrap}>{icon}</span>
        <div className={styles.badgeText}>
          <span className={styles.badgeTitle}>{title}</span>
          {subtitle ? (
            <span className={styles.badgeSubtitle}>{subtitle}</span>
          ) : null}
        </div>
      </div>
      {right ? <div className={styles.badgeRight}>{right}</div> : null}
    </div>
  );
  return href ? (
    <a
      className={styles.badgeLink}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title}
    >
      {Content}
    </a>
  ) : (
    Content
  );
}

// Minimal inline SVGs (no external assets needed)
const Icons = {
  Google: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.5c-.2 1.4-1.7 4-5.5 4-3.3 0-6-2.8-6-6.1s2.7-6.1 6-6.1c1.9 0 3.2.8 4 1.6l2.7-2.6C17.5 3.3 15 2 12 2 6.9 2 2.8 6.1 2.8 11.2S6.9 20.4 12 20.4c6.5 0 8.7-4.4 8.7-6.7 0-.5-.1-1-.2-1.4H12z"
      />
    </svg>
  ),
  Yelp: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="#D32323"
        d="M10.8 2.1c-.6-.2-1.2.2-1.3.8L8 10.8c-.1.6.3 1.1.9 1.2l2.5.3c.6.1 1.1-.3 1.2-.9l.7-7.9c.1-.5-.3-1.1-.9-1.3zM4 8.8c-.4.4-.4 1.1 0 1.5l5.7 5.6c.4.4 1.1.4 1.5 0l1.4-1.3c.4-.4.4-1.1 0-1.5L6.9 7.6c-.4-.4-1.1-.4-1.5 0L4 8.8zM16.7 12.6c-.6-.2-1.3.1-1.4.7l-.9 3.6c-.1.6.2 1.1.8 1.3l3.6 1.1c.6.2 1.3-.1 1.4-.7l.9-3.6c.1-.6-.2-1.1-.8-1.3l-3.6-1.1zM12.7 18.2c-.5-.3-1.2 0-1.4.5l-1.2 3.4c-.2.6.1 1.2.7 1.4l3.4 1.2c.6.2 1.2-.1 1.4-.7l1.2-3.4c.2-.6-.1-1.2-.7-1.4l-3.4-1.2z"
      />
    </svg>
  ),
  Thumbtack: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="#2CB1F5"
        d="M12 2c3.3 0 6 2.7 6 6 0 2.3-1.3 4.3-3.2 5.3l.5 5.7-2.6-3.2-2.6 3.2.5-5.7C7.3 12.3 6 10.3 6 8c0-3.3 2.7-6 6-6z"
      />
    </svg>
  ),
  Check: (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="#34A853"
        d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z"
      />
    </svg>
  ),
  EPA: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#2F7D32" />
      <circle cx="12" cy="12" r="6.5" fill="#fff" />
      <circle cx="12" cy="12" r="3.5" fill="#2F7D32" />
    </svg>
  ),
  Star: (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        fill="#f59e0b"
        d="M12 17.3l-5.1 3 1.3-5.7L3 9.7l5.8-.5L12 3.8l3.2 5.4 5.8.5-5.2 4.9 1.3 5.7z"
      />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Text align="center">{texts.footer.footer_text}</Text>

        {/* Trust badges like in the screenshot */}
        <div className={styles.badgesGrid}>
          <Badge
            href="https://g.page/r"
            className={styles.badgeGoogle}
            icon={Icons.Google}
            title="Google"
            subtitle="Reviews"
            right={
              <div className={styles.rating}>
                <span>5.0</span>
                <span className={styles.stars}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={styles.starIcon}>
                      {Icons.Star}
                    </span>
                  ))}
                </span>
              </div>
            }
          />

          <Badge
            href="https://www.yelp.com/"
            className={styles.badgeYelp}
            icon={Icons.Yelp}
            title="yelp"
          />

          <Badge
            href="https://www.thumbtack.com/"
            className={styles.badgeThumbtack}
            icon={Icons.Thumbtack}
            title="Thumbtack"
          />

          <Badge
            href="https://support.google.com/ads/answer/7279088"
            className={styles.badgeGuaranteed}
            icon={Icons.Check}
            title="Google"
            subtitle="Guaranteed"
            right={
              <div className={styles.rating}>
                <span className={styles.stars}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={styles.starIcon}>
                      {Icons.Star}
                    </span>
                  ))}
                </span>
              </div>
            }
          />

          <Badge
            href="https://www.epa.gov/"
            className={styles.badgeEPA}
            icon={Icons.EPA}
            title="EPA"
            subtitle="CERTIFIED"
          />
        </div>

        {/* Socials */}
        <div className={styles.socials}>
          <a
            href="https://www.instagram.com/pdraces?igsh=ZWNlN2ZiaGM5NzZl&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={styles.socialBtn}
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@pdraces?_t=ZT-90Nv7zLdZaH"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className={styles.socialBtn}
          >
            TikTok
          </a>
          <a
            href="https://www.facebook.com/share/1A3y3GGqoW/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={styles.socialBtn}
          >
            Facebook
          </a>
          <a
            href="https://youtube.com/@pdraces?si=vajtbK0Nk6QVPzEX"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className={styles.socialBtn}
          >
            YouTube
          </a>
          <a
            href="https://yelp.to/sG1JBQXoF8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Yelp"
            className={styles.socialBtn}
          >
            Yelp
          </a>
        </div>
      </div>
    </footer>
  );
}
