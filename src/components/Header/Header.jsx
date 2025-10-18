import styles from "./Header.module.css";
import { texts } from "@/constants";
import { Text } from "@/ui";

export default function Header() {
  return (
    <div className={styles.header}>
      <Text as="h3">{texts.header.header_text_1}</Text>
      <Text as="h3">{texts.header.line}</Text>
      <Text as="h3">{texts.header.header_text_2}</Text>
    </div>
  );
}
