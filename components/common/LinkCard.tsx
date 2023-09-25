import React from "react";

interface LinkCardProps {
  title: string;
  links: { name: string; url: string }[];
}

// React.FC<LinkCardProps> : LinkCard 컴포넌트의 props 타입 설정
const LinkCard: React.FC<LinkCardProps> = ({ title, links }) => {
  return (
    <div className="bg-white bg-opacity-90 p-7 rounded-3xl shadow-xl expand-on-hover">
      {/* 카드의 제목 */}
      <h2 className="font-serif italic mb-3 text-2xl text-[#2e99b1]">
        {title}
      </h2>

      {/* 링크의 이름과 URL */}
      <div className="font-normal grid justify-between">
        {/* links 배열을 순회하며 각 링크를 p 태그로 출력 */}
        {links.map((link, index) => (
          <p key={index} className="my-1 text-gray-800">
            {link.name}{" "}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2b6b79] underline hover:text-[#2e99b1]"
            >
              {link.url}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LinkCard;
