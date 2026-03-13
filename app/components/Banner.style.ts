import styled, { keyframes } from "styled-components";

const glow = keyframes`
  0%, 100% { filter: drop-shadow(0 0 20px rgba(98, 161, 168, 0.25)); }
  50% { filter: drop-shadow(0 0 36px rgba(98, 161, 168, 0.45)); }
`;

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Wrap = styled.section`
  min-height: clamp(220px, 32vh, 380px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(2rem, 6vw, 4rem) 0;
  position: relative;
`;

export const Mid = styled.h1`
  font-family: bim, system-ui, sans-serif;
  font-size: clamp(1.85rem, 5.5vw, 3.25rem);
  line-height: 1.15;
  text-align: center;
  color: #f0f4f5;
  max-width: 18ch;
  margin: 0 auto;
  animation: ${fadeUp} 1s ease-out both, ${glow} 4s ease-in-out infinite;
  text-shadow: 0 4px 32px rgba(0, 0, 0, 0.6);
`;

export const HeroBlur = styled.div`
  max-width: 22ch;
  margin: 0 auto;
  text-align: center;

  .banner-blur-text,
  .banner-blur-text span {
    font-family: bim, system-ui, sans-serif;
    font-size: clamp(1.75rem, 5.2vw, 3rem);
    line-height: 1.2;
    color: #f0f4f5;
    text-shadow: 0 4px 32px rgba(0, 0, 0, 0.6);
  }

  /* лёгкое свечение после появления */
  animation: ${glow} 5s ease-in-out infinite 1.2s both;
`;
