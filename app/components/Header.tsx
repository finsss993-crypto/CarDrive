"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineClipboardDocumentList,
  HiOutlineHome,
  HiOutlineInformationCircle,
} from "react-icons/hi2";
import { MdOutlineDirectionsCar } from "react-icons/md";
import { VscCloudDownload } from "react-icons/vsc";
import Dock from "./Dock/Dock";
import type { DockItemConfig } from "./Dock/Dock";
import { Container, Logo, NavWrap } from "./Header.style";
import "./Dock/Dock.css";

export default function Header() {
  const router = useRouter();

  const dockItems: DockItemConfig[] = useMemo(
    () => [
      {
        icon: <HiOutlineHome size={22} strokeWidth={1.75} />,
        label: "Главная",
        onClick: () => router.push("/"),
      },
      {
        icon: <MdOutlineDirectionsCar size={24} />,
        label: "Парк",
        onClick: () => {
          router.push("/");
          requestAnimationFrame(() =>
            document.getElementById("park")?.scrollIntoView({ behavior: "smooth" })
          );
        },
      },
      {
        icon: <HiOutlineClipboardDocumentList size={22} strokeWidth={1.75} />,
        label: "Заявка",
        onClick: () => {
          router.push("/");
          requestAnimationFrame(() =>
            document.getElementById("zayavka")?.scrollIntoView({ behavior: "smooth" })
          );
        },
      },
      {
        icon: <HiOutlineInformationCircle size={24} strokeWidth={1.75} />,
        label: "О нас",
        onClick: () => router.push("/about"),
      },
      {
        icon: <HiOutlineChatBubbleBottomCenterText size={22} strokeWidth={1.75} />,
        label: "Поддержка",
        onClick: () => router.push("/support"),
      },
    ],
    [router]
  );

  return (
    <Container>
      <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Logo>DrivEon</Logo>
      </Link>
      <NavWrap>
        <Dock
          items={dockItems}
          panelHeight={64}
          baseItemSize={48}
          magnification={68}
          distance={180}
        />
      </NavWrap>
      <div className="header-cta" style={{ alignSelf: "flex-end", marginBottom: 2 }}>
        <div className="dock-cta-panel">
          <button
            type="button"
            className="dock-download-btn"
            onClick={() => {
              window.open("https://apps.apple.com", "_blank", "noopener,noreferrer");
            }}
            aria-label="Скачать приложение"
          >
            <VscCloudDownload size={22} />
            СКАЧАТЬ
          </button>
        </div>
      </div>
    </Container>
  );
}
