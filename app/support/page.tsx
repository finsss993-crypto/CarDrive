"use client";

import Link from "next/link";
import {
  CardGrid,
  CardText,
  CardTitle,
  Eyebrow,
  GlassCard,
  Lead,
  MaxW,
  PageInner,
  PageRoot,
  SmallCard,
  Title,
} from "../styles/innerPages.style";

export default function SupportPage() {
  return (
    <PageRoot style={{ justifyContent: "flex-start", paddingTop: "3rem" }}>
      <PageInner as={MaxW}>
        <GlassCard>
          <Eyebrow>Поддержка</Eyebrow>
          <Title>Мы рядом</Title>
          <Lead>
            Вопросы по поездкам, оплате и приложению — выберите удобный способ
            связи. Отвечаем в рабочее время и по срочным обращениям в приложении.
          </Lead>
          <CardGrid>
            <SmallCard>
              <CardTitle>Приложение</CardTitle>
              <CardText>
                Чат в разделе «Помощь» — самый быстрый способ решить вопрос по
                активной поездке или бронированию.
              </CardText>
            </SmallCard>
            <SmallCard>
              <CardTitle>Почта</CardTitle>
              <CardText>
                <a
                  href="mailto:support@driveon.example"
                  style={{
                    color: "#8ec4ca",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(142, 196, 202, 0.4)",
                  }}
                >
                  support@driveon.example
                </a>
                — для документов и нетиповых ситуаций.
              </CardText>
            </SmallCard>
            <SmallCard>
              <CardTitle>Частые темы</CardTitle>
              <CardText>
                Возврат средств, продление аренды, неисправность авто — сначала
                загляните в «О нас»: там кратко о правилах сервиса.
              </CardText>
            </SmallCard>
          </CardGrid>
          <div style={{ marginTop: "2rem" }}>
            <Link
              href="/"
              style={{
                color: "#62a1a8",
                fontSize: "0.9rem",
                textDecoration: "none",
                borderBottom: "1px solid rgba(98, 161, 168, 0.35)",
              }}
            >
              ← На главную
            </Link>
          </div>
        </GlassCard>
      </PageInner>
    </PageRoot>
  );
}
