import Link from "next/link";
import {
  Big404,
  BtnPrimary,
  GhostLink,
  GlassCard,
  Lead,
  LinkRow,
  PageInner,
  PageRoot,
  Title,
} from "./styles/innerPages.style";

export default function NotFound() {
  return (
    <PageRoot>
      <PageInner>
        <GlassCard style={{ textAlign: "center" }}>
          <Big404>404</Big404>
          <Title style={{ fontSize: "clamp(1.25rem, 4vw, 1.6rem)" }}>
            Страница не найдена
          </Title>
          <Lead>
            Похоже, вы свернули не туда. Такого маршрута у DrivEon нет — зато
            есть главная, раздел «О нас» и поддержка.
          </Lead>
          <Link href="/" passHref legacyBehavior>
            <BtnPrimary>На главную</BtnPrimary>
          </Link>
          <LinkRow>
            <Link href="/about" passHref legacyBehavior>
              <GhostLink>О нас</GhostLink>
            </Link>
            <Link href="/support" passHref legacyBehavior>
              <GhostLink>Поддержка</GhostLink>
            </Link>
          </LinkRow>
        </GlassCard>
      </PageInner>
    </PageRoot>
  );
}
