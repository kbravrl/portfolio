import React from "react";
import { Award, Calendar, ExternalLink } from "lucide-react";

interface CertificationCardProps {
  title: string;
  issuer: string;
  description: string;
  date: string;
  link: string;
  skills: string[];
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  description,
  date,
  link,
  skills,
}) => (
  <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group border border-blue-100">
    <div className="flex items-start justify-between mb-6">
      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
        <Award className="w-6 h-6 text-blue-600" />
      </div>
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <Calendar size={14} />
        <span>{date}</span>
      </div>
    </div>

    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
      {title}
    </h3>
    <p className="text-blue-600 font-semibold mb-4 text-sm">{issuer}</p>
    <p className="text-gray-600 text-sm mb-6 leading-relaxed">{description}</p>

    <div className="flex flex-wrap gap-2 mb-6">
      {skills.map((skill, i) => (
        <span
          key={i}
          className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
        >
          {skill}
        </span>
      ))}
    </div>

    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium text-sm group-hover:underline"
    >
      <ExternalLink size={16} />
      See the Certificate
    </a>
  </div>
);

export default CertificationCard;
