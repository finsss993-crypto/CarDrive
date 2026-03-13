import styled, { keyframes } from "styled-components";

const fade = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const MidWrap = styled.div`
  text-align: center;
  padding: 0 0 1.5rem;
  animation: ${fade} 0.8s ease-out 0.2s both;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(1.25rem, 4vw, 2.5rem);
  margin-bottom: 1.25rem;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 120px;
`;

export const Value = styled.span`
  font-family: boon, system-ui, sans-serif;
  font-size: clamp(1rem, 2.2vw, 1.25rem);
  color: #62a1a8;
  letter-spacing: 0.04em;
`;

export const Label = styled.span`
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(240, 244, 245, 0.45);
`;

export const Bar = styled.div`
  height: 1px;
  max-width: 200px;
  margin: 0 auto 1.25rem;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(98, 161, 168, 0.5),
    transparent
  );
`;

export const Cta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  font-family: boon, sans-serif;
  font-size: 0.9rem;

  a {
    color: #8ec4ca;
    text-decoration: none;
    border-bottom: 1px solid rgba(142, 196, 202, 0.35);
    padding-bottom: 2px;
    transition: color 0.2s, border-color 0.2s;
  }
  a:hover {
    color: #fff;
    border-color: rgba(255, 255, 255, 0.4);
  }
  span {
    color: rgba(255, 255, 255, 0.25);
  }
`;
