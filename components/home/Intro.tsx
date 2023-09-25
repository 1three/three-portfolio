import React from "react";
import MouseAnimation from "../common/MouseAnimation";
import useTextAnimation from "@/utils/useTextAnimation";

const Intro = () => {
  const textAnimation = useTextAnimation("1s");

  const background = {
    backgroundImage:
      "linear-gradient(to top left, #0a99b9 0%, #2aa7c3 35%, #5abcd1 65%, #f1fdff 100%)",
  };

  return (
    <div className="min-h-screen grid relative" style={background}>
      <div className="relative z-10 flex flex-col font-light justify-center items-center h-screen text-white leading-relaxed lg:leading-relaxed">
        <div className={`flex items-center ${textAnimation}`}>
          {/* 프로필 사진 */}
          <img
            src="../images/profile.png"
            alt="profile"
            className="w-64 h-64 rounded-full mr-16 lg:w-96 lg:h-96 lg:mr-24"
          />

          {/* 인트로 본문 */}
          <div>
            <p className="text-[36px] lg:text-[50px]">안녕하세요.</p>
            <p className="text-[40px] lg:text-[56px]">
              <span className="font-medium">작은 디테일</span>에{" "}
              <br className="lg:hidden" />
              집착하는 개발자,
            </p>
            <p className="text-[38px] lg:text-[54px]">
              <span className="font-semibold text-[44px] lg:text-[60px]">
                김한슬
              </span>{" "}
              입니다.
            </p>
          </div>
        </div>

        {/* 마우스 스크롤 아이콘 */}
        <div className="absolute bottom-8 cursor-pointer">
          <MouseAnimation />
        </div>
      </div>
    </div>
  );
};

export default Intro;
