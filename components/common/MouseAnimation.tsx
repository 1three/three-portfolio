"use client";

import React, { useEffect, useState } from "react";
import "./MouseAnimation.css";

const MouseAnimation: React.FC = () => {
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  const smoothScrollTo = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  if (!isClient) {
    return null; // 또는 서버에서 렌더링할 컴포넌트
  }

  return (
    <div className="mouse" onClick={() => smoothScrollTo("about-section")} />
  );
};

export default MouseAnimation;
