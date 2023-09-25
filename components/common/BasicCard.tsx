import React from "react";

interface BasicCardProps {
  title: string;
  contents?: string[];
}

// React.FC<BasicCardProps> : BasicCard 컴포넌트의 props 타입 설정
const BasicCard: React.FC<BasicCardProps> = ({ title, contents = [] }) => {
  return (
    <div className="bg-white bg-opacity-90 p-7 rounded-3xl shadow-xl expand-on-hover">
      {/* 카드의 제목 */}
      <h2 className="font-serif italic mb-3 text-2xl text-[#1490ab]">
        {title}
      </h2>

      {/* 텍스트 내용 */}
      <div className="font-normal grid justify-between">
        {/* contents 배열을 순회하며 각 텍스트를 p 태그로 출력 */}
        {contents.map((content, index) => (
          <p key={index} className="my-1 text-gray-800">
            {content}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BasicCard;
