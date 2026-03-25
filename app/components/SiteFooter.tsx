import Link from "next/link";
import { Foot, Inner, Links } from "./SiteFooter.style";

export default function SiteFooter() {
  return (
    <Foot>
      <Inner>
        <span>© DrivEon — каршеринг</span>
        <Links>
          <Link href="/about">О нас</Link>
          <Link href="/support">Поддержка</Link>
          <Link href="#zayavka">Заявка</Link>
        </Links>
      </Inner>
    </Foot>
  );
}
