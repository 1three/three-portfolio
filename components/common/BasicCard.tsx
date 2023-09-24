import React from "react";

interface CardProps {
  title: string;
  contents?: string[];
}

const BasicCard: React.FC<CardProps> = ({ title, contents = [] }) => {
  return (
    <div className="bg-white bg-opacity-90 p-7 rounded-3xl shadow-xl expand-on-hover">
      <h2 className="font-serif italic mb-3 text-2xl text-[#1490ab]">
        {title}
      </h2>
      <div className="font-normal grid justify-between">
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
