"use client";

import styled, { keyframes } from "styled-components";

const rise = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Section = styled.section`
  margin: clamp(2.5rem, 6vw, 5rem) 0 4rem;
  animation: ${rise} 0.75s ease-out 0.15s both;
`;

export const FormTitle = styled.div`
  font-family: bim, system-ui, sans-serif;
  font-size: clamp(1.6rem, 3.5vw, 2.25rem);
  color: #f0f4f5;
  text-align: center;
  margin-bottom: 0.5rem;

  .lead-title-blur span {
    font: inherit;
    color: inherit;
  }
`;

export const Sub = styled.div`
  text-align: center;
  color: rgba(240, 244, 245, 0.6);
  font-size: 0.95rem;
  max-width: 28rem;
  margin: 0 auto 1.75rem;
  line-height: 1.5;

  .lead-sub-blur span {
    font-size: inherit;
    color: inherit;
  }
`;

export const FormCard = styled.div`
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.06) 0%,
    rgba(98, 161, 168, 0.06) 100%
  );
  border: 1px solid rgba(98, 161, 168, 0.22);
  border-radius: 24px;
  padding: clamp(1.5rem, 4vw, 2.25rem);
  backdrop-filter: blur(16px);
  box-shadow: 0 28px 64px rgba(0, 0, 0, 0.5);

  .thanks {
    text-align: center;
    color: #8ec4ca;
    font-size: 1.05rem;
    padding: 2rem 1rem;
    line-height: 1.6;
  }

  .dark-input,
  .dark-input textarea {
    background: rgba(0, 0, 0, 0.45) !important;
    border: 1px solid rgba(98, 161, 168, 0.25) !important;
    color: #f0f4f5 !important;
    border-radius: 12px !important;
  }
  .dark-input::placeholder {
    color: rgba(255, 255, 255, 0.35);
  }
  .dark-input:hover,
  .dark-input:focus {
    border-color: #62a1a8 !important;
  }

  .dark-select .ant-select-selector {
    background: rgba(0, 0, 0, 0.45) !important;
    border: 1px solid rgba(98, 161, 168, 0.25) !important;
    color: #f0f4f5 !important;
    border-radius: 12px !important;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

export const FieldLabel = styled.span`
  display: block;
  font-size: 0.75rem;
  font-family: boon, sans-serif;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(98, 161, 168, 0.95);
  margin-bottom: 0.35rem;
`;
