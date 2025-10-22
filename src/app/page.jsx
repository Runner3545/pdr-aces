"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Icon,
  Button,
  Text,
  Slider,
  Section,
  Container,
  SlideIn,
  FlipIn,
} from "@/ui";
import { ArrowRight, CheckCircle } from "@/ui/icons";
import { texts } from "@/constants";
import styles from "./page.module.css";
import { navigationLinks } from "@/constants/navigation";
import { ContactForm, Hero } from "@/components";
import clsx from "clsx";

export default function HomePage() {
  const { paintlessDentSection, autoHailRepairSection, courseSection } = texts;

  return (
    <>
      <Hero />

      <Section id="section-paintless-dent-repair">
        <Container>
          <Text
            as="h2"
            className={styles.title}
            weight="bold"
            animate="words"
            trigger="scroll"
          >
            {paintlessDentSection.title}
          </Text>

          <div className={styles.content}>
            <div className={styles.contentRow}>
              <div className={styles.leftColumn} data-reveal>
                <SlideIn from="left" trigger="scroll">
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
                </SlideIn>

                <SlideIn from="left" trigger="scroll">
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
                </SlideIn>
              </div>

              <div className={styles.rightColumn} data-reveal>
                <SlideIn from="right" trigger="scroll">
                  <Slider
                    before="/paintlessDentRepair-before.jpg"
                    after="/paintlessDentRepair-after.jpg"
                    altBefore="Door dent before repair"
                    altAfter="Door panel after paintless dent repair—like new"
                  />
                </SlideIn>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="section-auto-hail-repair">
        <Container>
          <Text
            as="h2"
            className={styles.title}
            weight="bold"
            animate="words"
            trigger="scroll"
          >
            {autoHailRepairSection.title}
          </Text>

          <div className={styles.content}>
            <div className={`${styles.contentRow} ${styles.reverse}`}>
              <div className={styles.leftColumn} data-reveal>
                <SlideIn from="right" trigger="scroll">
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
                </SlideIn>

                <SlideIn from="right" trigger="scroll">
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
                </SlideIn>
              </div>

              <div className={styles.rightColumn} data-reveal>
                <SlideIn from="left" trigger="scroll">
                  <Slider
                    before="/autoHailRepair-before.jpg"
                    after="/autoHailRepair-after.jpg"
                    altBefore="Roof and hood with hail dents"
                    altAfter="Panels restored after hail repair"
                  />
                </SlideIn>
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
                  <Text
                    as="h2"
                    className={styles.title}
                    weight="bold"
                    animate="words"
                    trigger="scroll"
                  >
                    {courseSection.title}
                  </Text>

                  <SlideIn from="left" trigger="scroll">
                    <Text as="p" className={styles.measure}>
                      {courseSection.listTwo.list_name}
                    </Text>
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

                    <div className={clsx(styles.ctaRow, styles.spacingTop)}>
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
                  </SlideIn>
                </div>

                <div className={styles.logoWrapper}>
                  <SlideIn from="right" trigger="scroll">
                    <Image
                      src="/pdr-course-logo.jpg"
                      alt="PDR Course Logo"
                      width={400}
                      height={400}
                      className={styles.logo}
                      priority
                    />
                  </SlideIn>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="section-contact">
        <Container>
          <FlipIn direction="top" trigger="scroll">
            <ContactForm type="default" />
          </FlipIn>
        </Container>
      </Section>
    </>
  );
}
