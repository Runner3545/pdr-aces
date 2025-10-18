// import Image from "next/image";
import Link from "next/link";

import { Icon, Button, Text } from "@/ui";
import { ArrowRight } from "@/ui/icons";
import { texts } from "@/constants";

export default function HomePage() {
  return (
    <div>
      <Text as="h4">{texts.paintlessDentSection.title}</Text>
      <Text as="p">{texts.paintlessDentSection.paragraphOne}</Text>
      <Text as="p">{texts.paintlessDentSection.paragraphTwo}</Text>

      <Text as="h4">{texts.paintlessDentSection.listOne.list_name}</Text>
      <Text>{texts.paintlessDentSection.listOne.list_textOne}</Text>
      <Text>{texts.paintlessDentSection.listOne.list_textTwo}</Text>
      <Text>{texts.paintlessDentSection.listOne.list_textThree}</Text>
      <Text>{texts.paintlessDentSection.listOne.list_textFour}</Text>

      <Text as="h4">{texts.paintlessDentSection.listTwo.list_name}</Text>
      <Text>{texts.paintlessDentSection.listTwo.list_textOne}</Text>
      <Text>{texts.paintlessDentSection.listTwo.list_textTwo}</Text>
      <Text>{texts.paintlessDentSection.listTwo.list_textThree}</Text>
      <Text>{texts.paintlessDentSection.listTwo.list_textFour}</Text>

      <Link href="/paintless-dent">
        <Button icon={<Icon as={ArrowRight} />} variant="secondary">
          {texts.default.button_link_title}
        </Button>
      </Link>

      <Text as="h4">{texts.autoHailRepairSection.title}</Text>
      <Text>{texts.autoHailRepairSection.paragraphOne}</Text>
      <Text>{texts.autoHailRepairSection.paragraphTwo}</Text>

      <Text>{texts.autoHailRepairSection.listOne.list_name}</Text>
      <Text>{texts.autoHailRepairSection.listOne.list_textOne}</Text>
      <Text>{texts.autoHailRepairSection.listOne.list_textTwo}</Text>
      <Text>{texts.autoHailRepairSection.listOne.list_textThree}</Text>
      <Text>{texts.autoHailRepairSection.listOne.list_textFour}</Text>

      <Text>{texts.autoHailRepairSection.listTwo.list_name}</Text>
      <Text>{texts.autoHailRepairSection.listTwo.list_textOne}</Text>
      <Text>{texts.autoHailRepairSection.listTwo.list_textTwo}</Text>
      <Text>{texts.autoHailRepairSection.listTwo.list_textThree}</Text>
      <Text>{texts.autoHailRepairSection.listTwo.list_textFour}</Text>

      <Text as="h4">{texts.courseSection.title}</Text>
      <Text>{texts.courseSection.paragraphOne}</Text>
      <Text>{texts.courseSection.paragraphTwo}</Text>
      <Text>{texts.courseSection.paragraphThree}</Text>

      <Link href="/auto-hail-repair">
        <Button icon={<Icon as={ArrowRight} />} variant="secondary">
          {texts.default.button_link_title}
        </Button>
      </Link>

      <Text as="h4">{texts.courseSection.title}</Text>
      <Text>{texts.courseSection.paragraphOne}</Text>
      <Text>{texts.courseSection.paragraphTwo}</Text>
      <Text>{texts.courseSection.paragraphThree}</Text>

      <Text>{texts.courseSection.listOne.list_name}</Text>
      <Text>{texts.courseSection.listOne.list_textOne}</Text>
      <Text>{texts.courseSection.listOne.list_textTwo}</Text>

      <Text>{texts.courseSection.paragraphFour}</Text>
      <Text>{texts.courseSection.paragraphFive}</Text>

      <Text as="h4">{texts.bottomSection.title}</Text>
      <Text>{texts.bottomSection.paragraphOne}</Text>
      <Text>{texts.bottomSection.paragraphTwo}</Text>
      <Text>{texts.bottomSection.paragraphThree}</Text>

      {/* <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />  */}
    </div>
  );
}
