"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { navigationMenu, navigationLinks } from "@/constants/navigation";
import { Container } from "@/ui";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.inner}>
            <Link
              href={navigationLinks.home}
              className={styles.brand}
              aria-label="Home"
            >
              <Image
                src="/logo-main.png"
                alt="Logo"
                width={180}
                height={72}
                priority
                className={styles.logo}
              />
            </Link>

            <nav className={styles.nav} aria-label="Main">
              {navigationMenu.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  className={`${styles.link} ${
                    pathname === item.link ? styles.active : ""
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            <button
              className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </Container>

        <div
          id="mobile-menu"
          className={`${styles.mobile} ${open ? styles.mobileOpen : ""}`}
          aria-hidden={!open}
        >
          <div className={styles.sheet}>
            <div className={styles.sheetHeader}>
              <Link
                href={navigationLinks.home}
                className={styles.brand}
                aria-label="Home"
              >
                <Image
                  src="/logo-main.png"
                  alt="Logo"
                  width={160}
                  height={60}
                  priority
                  className={styles.logo}
                />
              </Link>
              <button
                className={`${styles.close} ${open ? styles.closeOpen : ""}`}
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <span />
                <span />
              </button>
            </div>

            <nav className={styles.mobileNav} aria-label="Mobile">
              {navigationMenu.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  className={`${styles.mobileLink} ${
                    pathname === item.link ? styles.mobileActive : ""
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <div className={styles.headerSpacer} />
    </>
  );
}
