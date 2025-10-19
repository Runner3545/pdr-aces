import { Icon, Text, Slider } from "@/ui";
import { CheckCircle } from "@/ui/icons";
import { texts } from "@/constants";
import styles from "./page.module.css";

export default function AutoHailRepairPage() {
  const { autoHailRepairSection } = texts;
  return (
    <>
      <Text as="h4">{autoHailRepairSection.listOne.list_name}</Text>
      <div>
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
      <div className={styles.sliderContainer}>
        <Slider
          before="/AHRphoto1-before.jpg"
          after="/AHRphoto1-after.jpg"
          altBefore="Car dent before repair"
          altAfter="Car after paintless dent repair"
        />
        <Slider
          before="/AHRphoto2-before.jpg"
          after="/AHRphoto2-after.jpg"
          altBefore="Car dent before repair"
          altAfter="Car after paintless dent repair"
        />
        <Slider
          before="/AHRphoto3-before.jpg"
          after="/AHRphoto3-after.jpg"
          altBefore="Car dent before repair"
          altAfter="Car after paintless dent repair"
        />
        <Slider
          before="/AHRphoto4-before.jpg"
          after="/AHRphoto4-after.jpg"
          altBefore="Car dent before repair"
          altAfter="Car after paintless dent repair"
        />
        <Slider
          before="/AHRphoto5-before.jpg"
          after="/AHRphoto5-after.jpg"
          altBefore="Car dent before repair"
          altAfter="Car after paintless dent repair"
        />
      </div>
    </>
  );
}
