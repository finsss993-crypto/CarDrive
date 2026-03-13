import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import HyperspeedLayer from "./components/Hyperspeed/HyperspeedLayer";
import { GlobalStyles } from "./global.styles";

export const metadata: Metadata = {
  title: "DrivEon — каршеринг",
  description: "Каршеринг: свобода без своей машины",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" style={{ background: "#000" }}>
      <body
        style={{
          position: "relative",
          minHeight: "100vh",
          background: "#000",
        }}
      >
        <HyperspeedLayer />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            minHeight: "100vh",
            background: "transparent",
          }}
        >
          <GlobalStyles />
          <Header />
          <div className="app-shell">{children}</div>
        </div>
      </body>
    </html>
  );
}
