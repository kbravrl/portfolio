import React from "react";
import { Github, ExternalLink, Code, Database, Globe } from "lucide-react";

interface FeaturedProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string | null;
  image?: string;
}

const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({
  title,
  description,
  technologies,
  github,
  demo,
  image,
}) => {
  const getIcon = (tech: string) => {
    if (["Java", "JavaScript", "ReactJS", "React", "Node.js", "Express.js"].includes(tech))
      return Code;
    if (["MySQL", "MongoDB", "PostgreSQL"].includes(tech)) return Database;
    return Globe;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {image ? (
        <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
          <div className="text-6xl text-blue-600/30 group-hover:text-blue-600/50 transition-colors">
            <Code />
          </div>
        </div>
      )}

      <div className="p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, i) => {
            const IconComponent = getIcon(tech);
            return (
              <span
                key={i}
                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"
              >
                <IconComponent size={12} />
                {tech}
              </span>
            );
          })}
        </div>
        <div className="flex gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Github size={18} />
            <span className="text-sm font-medium">Kod</span>
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ExternalLink size={18} />
              <span className="text-sm font-medium">Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
