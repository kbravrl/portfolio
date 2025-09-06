import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

interface HeroSocialProps {
  links: { name: string; url: string; icon: string }[];
}

const HeroSocial: React.FC<HeroSocialProps> = ({ links }) => {
  const icons: Record<string, React.ElementType> = { Github, Linkedin, Mail };

  return (
    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
      <div className="flex gap-4 bg-white rounded-full px-6 py-3 shadow-lg">
        {links.map((social, i) => {
          const IconComponent = icons[social.icon];
          return (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors hover:scale-110 transform"
            >
              <IconComponent size={24} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSocial;
