"use client";

import styled, { keyframes } from "styled-components";

const rise = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Section = styled.section`
  margin: clamp(2rem, 5vw, 4rem) 0;
  animation: ${rise} 0.8s ease-out both;
`;

export const Title = styled.div`
  font-family: bim, system-ui, sans-serif;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  color: #f0f4f5;
  text-align: center;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 40px rgba(98, 161, 168, 0.35);

  .fleet-title-blur span {
    font: inherit;
    color: inherit;
    text-shadow: inherit;
  }
`;

export const Sub = styled.div`
  text-align: center;
  color: rgba(240, 244, 245, 0.65);
  font-size: 1rem;
  max-width: 36rem;
  margin: 0 auto 1.75rem;
  line-height: 1.5;

  .fleet-sub-blur span {
    font-size: inherit;
    color: inherit;
    line-height: 1.45;
  }
`;

export const Panel = styled.div`
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.07) 0%,
    rgba(98, 161, 168, 0.08) 100%
  );
  border: 1px solid rgba(98, 161, 168, 0.25);
  border-radius: 24px;
  padding: clamp(1.25rem, 3vw, 2rem);
  backdrop-filter: blur(14px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);

  .slash {
    color: rgba(255, 255, 255, 0.25);
    font-family: boon, sans-serif;
    font-size: 1.5rem;
  }
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
`;

export const TabBtn = styled.button<{ $active: boolean }>`
  font-family: boon, system-ui, sans-serif;
  font-size: clamp(1.1rem, 2.5vw, 1.45rem);
  letter-spacing: 0.04em;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0.35rem 0.75rem;
  border-radius: 12px;
  transition: color 0.25s, background 0.25s, box-shadow 0.25s;
  color: ${(p) => (p.$active ? "#0a0e10" : "rgba(240, 244, 245, 0.45)")};
  background: ${(p) =>
    p.$active ? "linear-gradient(135deg, #62a1a8, #4a8f96)" : "transparent"};
  box-shadow: ${(p) =>
    p.$active ? "0 8px 24px rgba(98, 161, 168, 0.35)" : "none"};

  &:hover {
    color: ${(p) => (p.$active ? "#0a0e10" : "#8ec4ca")};
  }
`;

export const PillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Pill = styled.span`
  font-size: 0.72rem;
  font-family: boon, sans-serif;
  letter-spacing: 0.06em;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(98, 161, 168, 0.35);
  color: rgba(240, 244, 245, 0.85);
`;

export const Hint = styled.p`
  text-align: center;
  font-size: 0.88rem;
  line-height: 1.55;
  color: rgba(240, 244, 245, 0.75);
  max-width: 32rem;
  margin: 0 auto 1.5rem;
  strong {
    color: #8ec4ca;
  }
`;

export const CarRow = styled.div`
  display: flex;
  gap: 1.25rem;
  overflow-x: auto;
  padding: 0.5rem 0 1rem;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
  scrollbar-color: #62a1a8 transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(98, 161, 168, 0.5);
    border-radius: 99px;
  }

  .car-card {
    flex: 0 0 min(280px, 85vw);
    scroll-snap-align: start;
    border-radius: 16px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(98, 161, 168, 0.2);
    transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
    animation: ${rise} 0.6s ease-out both;

    &:hover {
      transform: translateY(-6px);
      border-color: rgba(98, 161, 168, 0.5);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
    }
  }

  .img-wrap {
    position: relative;
    aspect-ratio: 16 / 10;
    width: 100%;
  }

  .car-img {
    object-fit: cover;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0.65rem;
  font-family: boon, sans-serif;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  background: rgba(10, 14, 16, 0.85);
  color: #62a1a8;
  border: 1px solid rgba(98, 161, 168, 0.4);
`;

export const CarMeta = styled.div`
  padding: 1rem 1rem 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  .model {
    font-size: 0.85rem;
    color: rgba(240, 244, 245, 0.55);
  }
`;

export const CarName = styled.span`
  font-family: boon, system-ui, sans-serif;
  font-size: 1.05rem;
  color: #f0f4f5;
  letter-spacing: 0.02em;
`;
