"use client";

import dynamic from "next/dynamic";
import { hyperspeedPresets } from "./HyperSpeedPresets";

const Hyperspeed = dynamic(() => import("./Hyperspeed"), { ssr: false });

/**
 * Прессеты из HyperSpeedPresets — кортежи как number[], типы Hyperspeed строже.
 * Стабильная ссылка: один и тот же preset на весь сеанс.
 */
const DRIVEON_BG = hyperspeedPresets.four;

export default function HyperspeedLayer() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        background: "#000000",
      }}
    >
      <Hyperspeed effectOptions={DRIVEON_BG as never} />
    </div>
  );
}
