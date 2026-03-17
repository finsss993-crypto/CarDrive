"use client";

import Image from "next/image";
import { useState } from "react";
import BlurText from "./BlurText/BlurText";
import {
  Badge,
  CarMeta,
  CarName,
  CarRow,
  Hint,
  Panel,
  Pill,
  PillRow,
  Section,
  Sub,
  TabBtn,
  Tabs,
  Title,
} from "./FleetSection.style";

export type FleetKind = "passenger" | "van";

const PASSENGER = [
  {
    name: "BMW",
    model: "3 Series",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80",
    tier: "Премиум",
  },
  {
    name: "Mercedes-Benz",
    model: "C-Class",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80",
    tier: "Премиум",
  },
  {
    name: "Audi",
    model: "A4",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80",
    tier: "Бизнес",
  },
  {
    name: "Mercedes-Benz",
    model: "E-Class",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&q=80",
    tier: "Премиум",
  },
];

const VANS = [
  {
    name: "Mercedes-Benz",
    model: "Vito",
    img: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&q=80",
    tier: "Фургон",
  },
  {
    name: "Ford",
    model: "Transit",
    img: "https://images.unsplash.com/photo-1532630571098-79d3d050b9fe?w=600&q=80",
    tier: "Грузовой",
  },
  {
    name: "Volkswagen",
    model: "Caddy",
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80",
    tier: "Компакт",
  },
];

export default function FleetSection() {
  const [kind, setKind] = useState<FleetKind>("passenger");
  const list = kind === "passenger" ? PASSENGER : VANS;

  return (
    <Section id="park">
      <Title role="heading" aria-level={2}>
        <BlurText
          text="Парк DrivEon"
          delay={80}
          animateBy="chars"
          direction="top"
          className="fleet-title-blur"
        />
      </Title>
      <Sub>
        <BlurText
          text="Выберите класс — легковые для города или фургоны для перевозок"
          delay={35}
          animateBy="words"
          direction="bottom"
          className="fleet-sub-blur"
        />
      </Sub>

      <Panel>
        <Tabs>
          <TabBtn
            type="button"
            $active={kind === "passenger"}
            onClick={() => setKind("passenger")}
          >
            Легковые
          </TabBtn>
          <span className="slash" aria-hidden>
            /
          </span>
          <TabBtn
            type="button"
            $active={kind === "van"}
            onClick={() => setKind("van")}
          >
            Фургоны
          </TabBtn>
        </Tabs>

        <PillRow>
          <Pill>18+</Pill>
          <Pill>ВУ категории «B»</Pill>
          <Pill>Оплата в приложении</Pill>
        </PillRow>

        <Hint>
          Нужны <strong>18 лет</strong> и действующее{" "}
          <strong>водительское удостоверение категории «B»</strong> — для
          легковых и фургонов до 3,5 т.
        </Hint>

        <CarRow>
          {list.map((car) => (
            <article key={`${car.name}-${car.model}`} className="car-card">
              <div className="img-wrap">
                <Image
                  src={car.img}
                  alt={`${car.name} ${car.model}`}
                  fill
                  sizes="280px"
                  className="car-img"
                />
                <Badge>{car.tier}</Badge>
              </div>
              <CarMeta>
                <CarName>{car.name}</CarName>
                <span className="model">{car.model}</span>
              </CarMeta>
            </article>
          ))}
        </CarRow>
      </Panel>
    </Section>
  );
}
