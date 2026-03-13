"use client";

import Link from "next/link";
import {
  Eyebrow,
  GlassCard,
  Lead,
  MaxW,
  PageInner,
  PageRoot,
  Title,
} from "../styles/innerPages.style";

export default function AboutPage() {
  return (
    <PageRoot style={{ justifyContent: "flex-start", paddingTop: "3rem" }}>
      <PageInner as={MaxW}>
        <GlassCard>
          <Eyebrow>DrivEon</Eyebrow>
          <Title>О нас</Title>
          <Lead style={{ marginBottom: "1.25rem" }}>
            Мы делаем каршеринг простым: машина рядом, понятные тарифы, без
            лишней бюрократии. Свобода — когда своей машины нет, а доехать нужно.
          </Lead>
          <Lead style={{ marginBottom: "1.25rem" }}>
            Команда сервиса следит за состоянием автопарка, поддержкой в приложении
            и честными условиями для водителей и пассажиров.
          </Lead>
          <Lead style={{ marginBottom: 0 }}>
            Хотите поехать уже сегодня — начните с главной и скачайте приложение.
          </Lead>
          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                padding: "0.85rem 1.5rem",
                background: "linear-gradient(135deg, #62a1a8 0%, #4a8f96 100%)",
                color: "#0a0e10",
                fontWeight: 600,
                borderRadius: 12,
                textDecoration: "none",
                fontFamily: "boon, system-ui, sans-serif",
                fontSize: "0.9rem",
              }}
            >
              На главную
            </Link>
            <Link
              href="/support"
              style={{
                color: "#62a1a8",
                alignSelf: "center",
                fontSize: "0.9rem",
                textDecoration: "none",
                borderBottom: "1px solid rgba(98, 161, 168, 0.35)",
              }}
            >
              Поддержка
            </Link>
          </div>
        </GlassCard>
      </PageInner>
    </PageRoot>
  );
}
