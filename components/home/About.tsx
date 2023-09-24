import React from "react";

const About = () => {
  const background = {
    backgroundImage:
      "linear-gradient(to bottom left, #0a99b9 0%, #2aa7c3 35%, #5abcd1 65%, #5abcd1 100%)",
  };

  return (
    <div className="min-h-screen grid text-[#323232]" style={background}>
      <div className="relative z-10 font-light p-16 lg:p-32 h-screen leading-relaxed lg:leading-relaxed">
        <h2 className="font-serif italic text-white text-4xl lg:text-5xl">
          About me
        </h2>
        <div className="bg-white mt-10 p-7 rounded-2xl shadow-xl">
          <p className="text-[18px] lg:text-[20px] leading-8 lg:leading-9">
            안녕하세요. <br />
            저는{" "}
            <span className="bg-sky-100">
              작은 디테일에도 세심한 주의를 기울이는 것
            </span>
            을 좋아하는 <br className="lg:hidden" />
            프론트엔드 주니어 개발자
            <span className="font-medium"> 김한슬</span> 입니다.
            <br />
            <br />
            <span className="font-medium bg-sky-100">산업보안학과</span>를
            전공하며 보안과 컴퓨터에 대한 깊은 통찰력을 얻었습니다. <br />
            이를 바탕으로, 사용자들에게 안전하며 친숙하게 느껴지는
            <br className="lg:hidden" /> 웹 경험을 제공하고 싶습니다.
            <br />
            <br />
            따듯한 인터페이스, 사용자의 눈높이에 맞는 디자인
            <br className="lg:hidden" /> 그리고 눈에 띄지 않는
            <span className="font-medium"> 작은 디테일</span>까지 챙기는 것.
            <br />
            이런 부분들이 모여 사용자들에게
            <span className="font-medium"> 감동</span>을 준다고 생각합니다.
            <br />
            <br />
            최근 <span className="bg-sky-100">네이버클라우드 캠프</span>를
            수료하였으며, <br />
            이제는 이러한 감동을 실제 프로젝트에 녹여내고자
            <br className="lg:hidden" /> 다음 도전을 준비하고 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
