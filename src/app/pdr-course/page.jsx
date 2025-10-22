import { ContactForm } from "@/components";
import { Section, Container } from "@/ui";
import { texts } from "@/constants";

export default function PDRCoursePage() {
  const t = texts.contact;

  return (
    <Section id="section-contact">
      <Container>
        <ContactForm
          descriptionLabel={t.descriptionLabelCourse}
          descriptionPlaceholder={t.descriptionPlaceholderCourse}
          buttonText={t.buttonTextCourse}
        />
      </Container>
    </Section>
  );
}
