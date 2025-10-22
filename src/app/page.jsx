"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon, Button, Text, Slider, Section, Container } from "@/ui";
import { ArrowRight, CheckCircle } from "@/ui/icons";
import { texts } from "@/constants";
import styles from "./page.module.css";
import { navigationLinks } from "@/constants/navigation";
import { ContactForm, Hero } from "@/components";

export default function HomePage() {
  const { paintlessDentSection, autoHailRepairSection, courseSection } = texts;

  return (
    <>
      <Hero />

      <Section id="section-paintless-dent-repair">
        <Container>
          <Text as="h2" className={styles.title} weight="bold">
            {paintlessDentSection.title}
          </Text>

          <div className={styles.content}>
            <div className={styles.contentRow}>
              <div className={styles.leftColumn} data-reveal>
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
              <div className={styles.leftColumn} data-reveal>
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
          <div className={styles.courseWrapper}>
            <div>
              <div className={styles.contentRow}>
                <div className={styles.leftColumn}>
                  <Text as="h2" className={styles.title} weight="bold">
                    {courseSection.title}
                  </Text>

                  <Text>{courseSection.listTwo.list_name}</Text>
                  <ul className={styles.list}>
                    {[
                      courseSection.listTwo.list_textOne,
                      courseSection.listTwo.list_textTwo,
                      courseSection.listTwo.list_textThree,
                      courseSection.listTwo.list_textFour,
                    ].map((item, i) => (
                      <li key={i} className={styles.listItem}>
                        <Icon
                          as={CheckCircle}
                          size="sm"
                          strokeWidth={2}
                          className={styles.icon}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.logoWrapper}>
                  <Image
                    src="/pdr-course-logo.jpg"
                    alt="PDR Course Logo"
                    width={300}
                    height={300}
                    className={styles.logo}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.content} ${styles.centered}`}>
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

      <Section id="section-contact">
        <Container>
          <ContactForm />
        </Container>
      </Section>
    </>
  );
}
