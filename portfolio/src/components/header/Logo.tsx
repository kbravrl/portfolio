import React from "react";

interface LogoProps {
  text: string;
}

const Logo: React.FC<LogoProps> = ({ text }) => (
  <div className="text-2xl font-bold text-blue-600">{text}</div>
);

export default Logo;