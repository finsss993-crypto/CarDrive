"use client";

import BlurText from "./BlurText/BlurText";
import { HeroBlur, Wrap } from "./Banner.style";

export default function Banner() {
  return (
    <Wrap>
      <HeroBlur as="div">
        <BlurText
          text="Свобода — когда своей машины нет. А каршеринг есть."
          delay={120}
          animateBy="words"
          direction="top"
          stepDuration={0.4}
          className="banner-blur-text"
        />
      </HeroBlur>
    </Wrap>
  );
}
