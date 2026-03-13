"use client";

import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

export const PageRoot = styled.main`
  min-height: calc(100vh - 100px);
  padding: clamp(2rem, 6vw, 4rem) clamp(1rem, 4vw, 2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    /* Лёгкое затемнение поверх Hyperspeed, дорога остаётся видна */
    background: radial-gradient(
        ellipse 90% 60% at 50% 0%,
        rgba(12, 18, 20, 0.45) 0%,
        transparent 55%
      ),
      linear-gradient(
        180deg,
        rgba(6, 8, 9, 0.5) 0%,
        rgba(6, 8, 9, 0.35) 45%,
        rgba(6, 8, 9, 0.5) 100%
      );
    z-index: 0;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
      rgba(255, 255, 255, 0.03) 1px,
      transparent 1px
    );
    background-size: 24px 24px;
    z-index: 0;
    pointer-events: none;
  }
`;

export const PageInner = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 560px;
  animation: ${fadeUp} 0.7s ease-out both;
`;

export const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(98, 161, 168, 0.2);
  border-radius: 20px;
  padding: clamp(2rem, 5vw, 3rem);
  backdrop-filter: blur(12px);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
`;

export const Eyebrow = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #62a1a8;
  margin-bottom: 0.75rem;
  font-family: boon, system-ui, sans-serif;
`;

export const Title = styled.h1`
  font-family: bim, system-ui, sans-serif;
  font-size: clamp(2rem, 6vw, 3.25rem);
  line-height: 1.1;
  color: #f0f4f5;
  margin-bottom: 1rem;
  font-weight: 400;
`;

export const Lead = styled.p`
  font-size: 1.05rem;
  line-height: 1.65;
  color: rgba(240, 244, 245, 0.72);
  margin-bottom: 1.5rem;
`;

export const Big404 = styled.span`
  display: block;
  font-family: bim, system-ui, sans-serif;
  font-size: clamp(4.5rem, 18vw, 8rem);
  line-height: 1;
  background: linear-gradient(135deg, #62a1a8 0%, #3d7a82 50%, #62a1a8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  animation: ${float} 5s ease-in-out infinite;
  text-align: center;
`;

export const BtnPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.9rem 1.75rem;
  background: linear-gradient(135deg, #62a1a8 0%, #4a8f96 100%);
  color: #0a0e10 !important;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 12px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  font-family: boon, system-ui, sans-serif;
  letter-spacing: 0.04em;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(98, 161, 168, 0.35);
  }
`;

export const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
  margin-top: 1.5rem;
  justify-content: center;
`;

export const GhostLink = styled.a`
  color: rgba(98, 161, 168, 0.95);
  text-decoration: none;
  font-size: 0.9rem;
  border-bottom: 1px solid rgba(98, 161, 168, 0.35);
  padding-bottom: 2px;
  transition: color 0.2s, border-color 0.2s;

  &:hover {
    color: #8ec4ca;
    border-color: #8ec4ca;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const SmallCard = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(98, 161, 168, 0.15);
  border-radius: 14px;
  padding: 1.25rem 1.5rem;
  transition: border-color 0.2s, background 0.2s;

  &:hover {
    border-color: rgba(98, 161, 168, 0.35);
    background: rgba(98, 161, 168, 0.06);
  }
`;

export const CardTitle = styled.h3`
  font-family: boon, system-ui, sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.06em;
  color: #62a1a8;
  margin-bottom: 0.35rem;
`;

export const CardText = styled.p`
  font-size: 0.95rem;
  color: rgba(240, 244, 245, 0.75);
  line-height: 1.5;
  margin: 0;
`;

export const MaxW = styled.div`
  max-width: 640px;
  width: 100%;
`;
