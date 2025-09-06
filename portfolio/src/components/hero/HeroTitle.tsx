import React from "react";

interface HeroTitleProps {
  name: string;
  title: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ name, title }) => (
  <div className="mb-6">
    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
      Merhaba, Ben
      <span className="text-blue-600 block">{name}</span>
    </h1>
    <p className="text-xl lg:text-2xl text-gray-600 font-medium">{title}</p>
  </div>
);

export default HeroTitle;
