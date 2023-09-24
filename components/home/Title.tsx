"use client";

import React, { useEffect, useRef } from "react";

const Title = () => {
  // useRef : DOM 요소 참조
  // titleRef : 동적으로 <h2> 수정
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // isScrolled : 스크롤 여부 저장하는 플래그
    let isScrolled = false;

    // <h2> 위치 왼쪽(-100%)으로 초기화
    if (titleRef.current) {
      titleRef.current.style.transform = "translateX(-100%)";
    }

    // 스크롤 이벤트 발생 시 실행 함수
    const handleScroll = () => {
      isScrolled = true;
    };

    // <h2> 위치 업데이트 함수
    const updateTitlePosition = () => {
      if (isScrolled && titleRef.current) {
        // 현재 스크롤 양(window.scrollY)에 따라 <h2> 위치 조정
        const scrolledAmount = window.scrollY / 15;
        titleRef.current.style.transform = `translateX(${
          scrolledAmount - 100
        }%)`;

        isScrolled = false;
      }

      // requestAnimationFrame : 애니메이션 최적화 메서드 (부드러운 애니메이션 효과)
      // <h2> 업데이트 함수 재실행
      requestAnimationFrame(updateTitlePosition);
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", handleScroll);

    // 애니메이션 시작
    requestAnimationFrame(updateTitlePosition);

    // 컴포넌트 언마운트 시 스크롤 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#0a99b9] grid overflow-x-hidden">
      <div className="relative z-10 font-sans font-bold h-[300px] flex items-center">
        <h2
          ref={titleRef}
          className=" text-white text-opacity-70 text-[110px] lg:text-[150px] whitespace-nowrap"
        >
          Introduce Three Kim.
        </h2>
      </div>
    </div>
  );
};

export default Title;
