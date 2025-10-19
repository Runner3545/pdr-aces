import { Icon, Text, Slider, Section, Container } from "@/ui";
import { CheckCircle } from "@/ui/icons";
import { texts } from "@/constants";
import styles from "./page.module.css";

export default function PaintlessDentRepairPage() {
  const { paintlessDentSection } = texts;

  return (
    <Section>
      <Container>
        <Text as="h2" className={styles.title} weight="bold">
          {paintlessDentSection.title}
        </Text>

        <div className={styles.content}>
          {/* Lists */}
          <div className={styles.contentRow}>
            <div className={`${styles.listBlock} ${styles.stack}`}>
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

            <div className={`${styles.listBlock} ${styles.stack}`}>
              <Text as="h4">{paintlessDentSection.listTwo.list_name}</Text>
              <ul className={styles.list}>
                {[
                  paintlessDentSection.listTwo.list_textOne,
                  paintlessDentSection.listTwo.list_textTwo,
                  paintlessDentSection.listTwo.list_textThree,
                  paintlessDentSection.listTwo.list_textFour,
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
          </div>

          {/* Sliders */}
          <div className={styles.sliderContainer}>
            <Slider
              before="/PDRphoto1-before.jpg"
              after="/PDRphoto1-after.jpg"
              altBefore="Car dent before repair"
              altAfter="Car after paintless dent repair"
            />
            <Slider
              before="/PDRphoto2-before.jpg"
              after="/PDRphoto2-after.jpg"
              altBefore="Car dent before repair"
              altAfter="Car after paintless dent repair"
            />
            <Slider
              before="/PDRphoto3-before.jpg"
              after="/PDRphoto3-after.jpg"
              altBefore="Car dent before repair"
              altAfter="Car after paintless dent repair"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
