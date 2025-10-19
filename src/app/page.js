import Link from "next/link";
import { Icon, Button, Text, Slider } from "@/ui";
import { ArrowRight, CheckCircle } from "@/ui/icons";
import { texts } from "@/constants";
import styles from "./page.module.css";

export default function HomePage() {
  const { paintlessDentSection, autoHailRepairSection, courseSection } = texts;

  return (
    <div className={styles.page}>
      {/* SECTION 1 — Paintless Dent Repair */}
      <section className={styles.section}>
        <div className={styles.container}>
          <Text as="h2" className={styles.title}>
            {paintlessDentSection.title}
          </Text>

          <div className={styles.content}>
            <Text as="p">{paintlessDentSection.paragraphOne}</Text>
            <Text as="p">{paintlessDentSection.paragraphTwo}</Text>

            <div className={styles.contentRow}>
              {/* Left — Lists */}
              <div className={styles.leftColumn}>
                <div>
                  <Text as="h4">{paintlessDentSection.listOne.list_name}</Text>
                  <ul className={styles.list}>
                    {[
                      paintlessDentSection.listOne.list_textOne,
                      paintlessDentSection.listOne.list_textTwo,
                      paintlessDentSection.listOne.list_textThree,
                      paintlessDentSection.listOne.list_textFour,
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

                <div>
                  <Text as="h4">{paintlessDentSection.listTwo.list_name}</Text>
                  <ul className={styles.list}>
                    <li>{paintlessDentSection.listTwo.list_textOne}</li>
                    <li>{paintlessDentSection.listTwo.list_textTwo}</li>
                    <li>{paintlessDentSection.listTwo.list_textThree}</li>
                    <li>{paintlessDentSection.listTwo.list_textFour}</li>
                  </ul>
                </div>
              </div>

              {/* Right — Slider */}
              <div className={styles.rightColumn}>
                <Slider
                  before="/paintlessDentRepair-before.jpg"
                  after="/paintlessDentRepair-after.jpg"
                  altBefore="Car dent before repair"
                  altAfter="Car after paintless dent repair"
                />
              </div>
            </div>

            <Link href="/paintless-dent">
              <Button icon={<Icon as={ArrowRight} />} variant="secondary">
                {texts.default.button_link_title}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Auto Hail Repair (reversed layout for variety) */}
      <section className={styles.section}>
        <div className={styles.container}>
          <Text as="h2" className={styles.title}>
            {autoHailRepairSection.title}
          </Text>

          <div className={styles.content}>
            <Text as="p">{autoHailRepairSection.paragraphOne}</Text>
            <Text as="p">{autoHailRepairSection.paragraphTwo}</Text>

            <div className={`${styles.contentRow} ${styles.reverse}`}>
              {/* Left — Slider */}
              <div className={styles.rightColumn}>
                <Slider
                  before="/autoHailRepair-before.jpg"
                  after="/autoHailRepair-after.jpg"
                  altBefore="Car before hail repair"
                  altAfter="Car after hail repair"
                />
              </div>

              {/* Right — Lists */}
              <div className={styles.leftColumn}>
                <div>
                  <Text as="h4">{autoHailRepairSection.listOne.list_name}</Text>
                  <ul className={styles.list}>
                    {[
                      autoHailRepairSection.listOne.list_textOne,
                      autoHailRepairSection.listOne.list_textTwo,
                      autoHailRepairSection.listOne.list_textThree,
                      autoHailRepairSection.listOne.list_textFour,
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

                <div>
                  <Text as="h4">{autoHailRepairSection.listTwo.list_name}</Text>
                  <ul className={styles.list}>
                    <li>{autoHailRepairSection.listTwo.list_textOne}</li>
                    <li>{autoHailRepairSection.listTwo.list_textTwo}</li>
                    <li>{autoHailRepairSection.listTwo.list_textThree}</li>
                    <li>{autoHailRepairSection.listTwo.list_textFour}</li>
                  </ul>
                </div>
              </div>
            </div>

            <Link href="/auto-hail-repair">
              <Button icon={<Icon as={ArrowRight} />} variant="secondary">
                {texts.default.button_link_title}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Learn More About the PDR Course */}
      <section className={styles.section}>
        <div className={styles.container}>
          <Text as="h2" className={styles.title}>
            {courseSection.title}
          </Text>

          <div className={styles.content}>
            <Text>{courseSection.paragraphOne}</Text>
            <Text>{courseSection.paragraphTwo}</Text>
            <Text>{courseSection.paragraphThree}</Text>

            <div className={styles.listBlock}>
              <Text as="h4">{courseSection.listOne.list_name}</Text>
              <ul className={styles.list}>
                <li>{courseSection.listOne.list_textOne}</li>
                <li>{courseSection.listOne.list_textTwo}</li>
              </ul>
            </div>

            <Text>{courseSection.paragraphFour}</Text>
            <Text>{courseSection.paragraphFive}</Text>
          </div>
        </div>
      </section>
    </div>
  );
}
