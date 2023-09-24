import React from "react";

interface LinkCardProps {
  title: string;
  links: { name: string; url: string }[];
}

const LinkCard: React.FC<LinkCardProps> = ({ title, links }) => {
  return (
    <div className="bg-white bg-opacity-90 p-7 rounded-3xl shadow-xl expand-on-hover">
      <h2 className="font-serif italic mb-3 text-2xl text-[#2e99b1]">
        {title}
      </h2>
      <div className="font-normal grid justify-between">
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
