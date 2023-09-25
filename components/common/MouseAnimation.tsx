"use client";

import React, { CSSProperties, useEffect, useState } from "react";

const MouseAnimation: React.FC = () => {
  // isClient : 클라이언트 측 렌더링인지 확인하는 상태 값
  const [isClient, setIsClient] = useState(false);

  // 마운트 시, isClient 상태를 true로 설정
  useEffect(() => {
    setIsClient(true);
  }, []);

  // 부드러운 스크롤 실행 함수
  const smoothScrollTo = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // 옵션
      });
    }
  };

  // 마우스 아이콘에 적용할 인라인 스타일
  const mouseStyles: CSSProperties = {
    width: "40px",
    height: "70px",
    border: "1px solid #fff",
    borderRadius: "20px",
    position: "relative",
  };

  // 서버 측 렌더링 시 null 반환
  if (!isClient) {
    return null;
  }

  // 클라이언트 측 렌더링 시 마우스 아이콘 출력
  return (
    <div style={mouseStyles} onClick={() => smoothScrollTo("about-section")}>
      <div
        style={{
          content: '""',
          width: "10px",
          height: "10px",
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#fff",
          borderRadius: "50%",
          opacity: 1,
          animation: "wheel 2s infinite",
        }}
      />
      {/* 애니메이션을 위한 글로벌 CSS */}
      <style jsx global>{`
        @keyframes wheel {
          to {
            opacity: 0;
            top: 45px;
          }
        }

        @-webkit-keyframes wheel {
          to {
            opacity: 0;
            top: 45px;
          }
        }
      `}</style>
    </div>
  );
};

export default MouseAnimation;
