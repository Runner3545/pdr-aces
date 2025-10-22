import { ContactForm } from "@/components";
import { Section, Container } from "@/ui";
import { texts } from "@/constants";

export default function PDRCoursePage() {
  const t = texts.contact;

  return (
    <Section id="section-contact">
      <Container>
        <ContactForm
          title={t.titleCourse}
          description={
            <>
              <p>{t.description1}</p>
              <p>{t.description2}</p>
              <p>{t.descriptionCourse}</p>
            </>
          }
          descriptionLabel={t.descriptionLabelCourse}
          descriptionPlaceholder={t.descriptionPlaceholderCourse}
          buttonText={t.buttonTextCourse}
          showLogo
        />
      </Container>
    </Section>
  );
}
