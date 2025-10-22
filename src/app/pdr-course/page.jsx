import Image from "next/image";
import { ContactForm } from "@/components";
import { Section, Container, Text } from "@/ui";
import { texts } from "@/constants";
import styles from "./page.module.css";

export default function PDRCoursePage() {
  const t = texts.contact;

  return (
    <Section id="section-contact">
      <Container>
        <div className={styles.stack} data-reveal style={{ "--delay": "80ms" }}>
          <div className={styles.textBlock}>
            <Text
              as="p"
              className={`${styles.lede} ${styles.measure}`}
              weight="medium"
            >
              {texts.contact.paragraphOne}
            </Text>
            <Text as="p" className={styles.measure}>
              {texts.contact.paragraphTwo}
            </Text>
          </div>
          <Image
            src="/pdr-course-logo.jpg"
            alt="PDR Course Logo"
            width={180}
            height={180}
            className={styles.logo}
            priority
          />
        </div>
        <ContactForm
          title={t.titleCourse}
          description={t.descriptionCourse}
          descriptionLabel={t.descriptionLabelCourse}
          descriptionPlaceholder={t.descriptionPlaceholderCourse}
          buttonText={t.buttonTextCourse}
        />
      </Container>
    </Section>
  );

  {
    /* <Container> 
    <div className={styles.stack} data-reveal style={{ "--delay": "80ms" }}> 
    <Text as="p" className={${styles.lede} ${styles.measure}} weight="medium" > {texts.courseSection.paragraphOne} 
    </Text> 
    <Text as="p" className={styles.measure}> {texts.courseSection.paragraphTwo} </Text>
     </div> 
     <ContactForm title={t.titleCourse} description={t.descriptionCourse} descriptionLabel={t.descriptionLabelCourse} descriptionPlaceholder={t.descriptionPlaceholderCourse} buttonText={t.buttonTextCourse} />
     </Container>
     </Section> */
  }
}
