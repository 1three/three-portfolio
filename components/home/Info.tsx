"use client";

import React from "react";
import BasicCard from "../common/BasicCard";
import LinkCard from "../common/LinkCard";

const Info = () => {
  return (
    <div className="bg-[#0a99b9] min-h-screen grid relative">
      <div className="relative z-10 flex flex-col justify-center items-center h-screen text-white leading-relaxed lg:leading-relaxed">
        {/* 본인 소개 */}
        <div className="flex flex-col space-y-4">
          <BasicCard
            title="Kim Hanseul"
            contents={[
              "경기도 의왕시, 대한민국",
              "B. 1999년 12월 16일",
              "E. 1soelkim@gmail.com",
              "T. 010-2847-7968",
            ]}
          />
          <LinkCard
            title="Channels"
            links={[
              { name: "Blog.", url: "https://1-three.tistory.com" },
              { name: "GitHub.", url: "https://github.com/1three" },
            ]}
          />
          <BasicCard
            title="Education"
            contents={[
              "네이버클라우드 캠프 AIaaS 수료 (2023.03 - 2023.09)",
              "한세대학교 IT학부 산업보안학과 졸업 (2018.03 - 2023.08)",
            ]}
          />
          <BasicCard title="Language" contents={["TOEIC 730 (2022.09)"]} />
        </div>
      </div>
    </div>
  );
};

export default Info;
