"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function scrollToCurrentHash() {
  const hash = window.location.hash.replace(/^#/, "");

  if (!hash) {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return;
  }

  const target = document.getElementById(hash);

  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const runScroll = () => {
      window.requestAnimationFrame(() => {
        window.setTimeout(scrollToCurrentHash, 40);
      });
    };

    runScroll();
    window.addEventListener("hashchange", runScroll);

    return () => {
      window.removeEventListener("hashchange", runScroll);
    };
  }, [pathname]);

  return null;
}
