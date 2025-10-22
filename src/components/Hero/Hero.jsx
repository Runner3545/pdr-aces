"use client";

import Link from "next/link";
import clsx from "clsx";
import styles from "./Hero.module.css";
import { Section, Container, Text, Button, Icon } from "@/ui";
import { ArrowRight } from "@/ui/icons";
import { texts } from "@/constants";

import TrustList from "./TrustList";

export default function Hero({
  eyebrow = "Auto Hail Repair & PDR Training",
  title = "Restore your vehicle’s value.\nLearn an in-demand skill.",
  description = "Precision paintless dent repair in Denver, CO plus a hands-on PDR course designed to get you job-ready.",
  primaryHref = "#section-contact",
  primaryText = "Request estimate",
  imageSrc = "/logo-main.png",
  imageAlt = "PDR Aces Logo",
  className = "",
}) {
  return (
    <Section id="hero" className={clsx(styles.hero, className)}>
      <div className={styles.bgWrap} aria-hidden="true">
        <div className={styles.radial} />
        <div className={styles.grid} />
        <div className={styles.glow} />
      </div>

      <Container className={styles.inner}>
        <div className={styles.content}>
          {eyebrow ? (
            <Text
              as="p"
              className={styles.eyebrow}
              weight="medium"
              color="secondary"
            >
              {eyebrow}
            </Text>
          ) : null}

          <Text as="h1" variant="h1" className={styles.title} animate="words">
            {title}
          </Text>

          <Text as="p" className={styles.subtitle} color="secondary">
            {description}
          </Text>

          <TrustList />

          <div className={styles.actions}>
            <Link href={primaryHref}>
              <Button
                icon={<Icon as={ArrowRight} />}
                className={styles.primaryCta}
              >
                {primaryText}
              </Button>
            </Link>
          </div>
        </div>

        <div className={styles.visual}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className={styles.image}
            loading="eager"
          />
        </div>
      </Container>
    </Section>
  );
}
