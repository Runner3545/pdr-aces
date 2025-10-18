// import Image from "next/image";
import Link from "next/link";

import { Icon, Button } from "@/ui";
import { ArrowRight } from "@/ui/icons";
import { texts } from "@/constants";

export default function HomePage() {
  return (
    <div>
      <Link href="/paintless-dent">
        <Button icon={<Icon as={ArrowRight} />} variant="secondary">
          {texts.default.button_link_title}
        </Button>
      </Link>
      <Link href="/auto-hail-repair">
        <Button icon={<Icon as={ArrowRight} />} variant="secondary">
          {texts.default.button_link_title}
        </Button>
      </Link>
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
