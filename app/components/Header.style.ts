import styled from "styled-components";

export const Container = styled.header({
  minHeight: 96,
  padding: "0.65rem clamp(1rem, 3vw, 2rem)",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
  borderBottom: "1px solid rgba(98, 161, 168, 0.12)",
  background:
    "linear-gradient(180deg, rgba(12, 18, 20, 0.97) 0%, rgba(8, 12, 14, 0.92) 100%)",
  backdropFilter: "blur(10px)",
  position: "relative",
  zIndex: 10,

  ".header-cta": {
    flexShrink: 0,
  },
});

export const Logo = styled.div({
  color: "#62a1a8",
  fontSize: "1.5rem",
  fontWeight: 700,
  letterSpacing: "0.02em",
  flexShrink: 0,
});

export const NavWrap = styled.div({
  flex: "1 1 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  minWidth: 0,
  /* совпадает с высотой Dock — без скачков */
  height: 120,
  maxHeight: 120,
  overflow: "visible",
});
