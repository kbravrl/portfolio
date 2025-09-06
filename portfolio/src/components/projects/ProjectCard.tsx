import React from "react";
import { Github, Code } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, github }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <div className="text-blue-600/30 group-hover:text-blue-600 transition-colors">
        <Code size={24} />
      </div>
    </div>
    <p className="text-gray-600 mb-4 text-sm line-clamp-3">{description}</p>
    <div className="flex flex-wrap gap-1 mb-4">
      {technologies.slice(0, 3).map((tech, i) => (
        <span
          key={i}
          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
        >
          {tech}
        </span>
      ))}
      {technologies.length > 3 && (
        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
          +{technologies.length - 3}
        </span>
      )}
    </div>
    <div className="flex gap-3">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
      >
        <Github size={16} />
        <span className="text-sm font-medium">Kod</span>
      </a>
    </div>
  </div>
);

export default ProjectCard;
