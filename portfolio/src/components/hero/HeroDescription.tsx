import React from "react";

interface HeroDescriptionProps {
  description: string;
}

const HeroDescription: React.FC<HeroDescriptionProps> = ({ description }) => (
  <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl">
    {description}
  </p>
);

export default HeroDescription;
