"use client";

import Link from "next/link";
import { Icon, Button, Text, Slider, Section, Container } from "@/ui";
import { ArrowRight } from "@/ui/icons";
import { texts } from "@/constants";
import styles from "./page.module.css";
import { navigationLinks } from "@/constants/navigation";

export default function HomePage() {
  const { paintlessDentSection, autoHailRepairSection, courseSection } = texts;

  return (
    <>
      <Section id="section-paintless-dent-repair">
        <Container>
          <Text as="h2" className={styles.title} weight="bold">
            {paintlessDentSection.title}
          </Text>

          <div className={styles.content}>
            <div className={styles.contentRow}>
              <div
                className={`${styles.leftColumn} ${styles.stack}`}
                data-reveal
              >
                <Text
                  as="p"
                  className={`${styles.lede} ${styles.measure}`}
                  weight="medium"
                >
                  {paintlessDentSection.paragraphOne}
                </Text>
                <Text as="p" className={styles.measure}>
                  {paintlessDentSection.paragraphTwo}
                </Text>

                <div className={styles.ctaRow}>
                  <Link href={navigationLinks.paintlessDent}>
                    <Button
                      icon={<Icon as={ArrowRight} />}
                      variant="secondary"
                      data-reveal
                    >
                      {texts.default.button_link_title}
                    </Button>
                  </Link>
                </div>
              </div>

              <div className={styles.rightColumn} data-reveal>
                <Slider
                  before="/paintlessDentRepair-before.jpg"
                  after="/paintlessDentRepair-after.jpg"
                  altBefore="Door dent before repair"
                  altAfter="Door panel after paintless dent repair—like new"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="section-auto-hail-repair">
        <Container>
          <Text as="h2" className={styles.title} weight="bold">
            {autoHailRepairSection.title}
          </Text>

          <div className={styles.content}>
            <div className={`${styles.contentRow} ${styles.reverse}`}>
              <div
                className={`${styles.leftColumn} ${styles.stack}`}
                data-reveal
              >
                <Text
                  as="p"
                  className={`${styles.lede} ${styles.measure}`}
                  weight="medium"
                >
                  {autoHailRepairSection.paragraphOne}
                </Text>
                <Text as="p" className={styles.measure}>
                  {autoHailRepairSection.paragraphTwo}
                </Text>

                <div className={styles.ctaRow}>
                  <Link href={navigationLinks.autoHailRepair}>
                    <Button
                      icon={<Icon as={ArrowRight} />}
                      variant="secondary"
                      data-reveal
                    >
                      {texts.default.button_link_title}
                    </Button>
                  </Link>
                </div>
              </div>

              <div className={styles.rightColumn} data-reveal>
                <Slider
                  before="/autoHailRepair-before.jpg"
                  after="/autoHailRepair-after.jpg"
                  altBefore="Roof and hood with hail dents"
                  altAfter="Panels restored after hail repair"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="section-pdr-course">
        <Container>
          <Text as="h2" className={styles.title} weight="bold">
            {courseSection.title}
          </Text>

          <div className={`${styles.content} ${styles.centered}`}>
            <div
              className={styles.stack}
              data-reveal
              style={{ "--delay": "80ms" }}
            >
              <Text
                as="p"
                className={`${styles.lede} ${styles.measure}`}
                weight="medium"
              >
                {courseSection.paragraphOne}
              </Text>
              <Text as="p" className={styles.measure}>
                {courseSection.paragraphTwo}
              </Text>
            </div>

            <div className={styles.ctaRow}>
              <Link href={navigationLinks.pdrCourse}>
                <Button
                  icon={<Icon as={ArrowRight} />}
                  variant="secondary"
                  data-reveal
                  style={{ "--delay": "120ms" }}
                >
                  {texts.default.button_link_title}
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
