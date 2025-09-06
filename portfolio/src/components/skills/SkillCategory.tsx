import React from "react";

interface SkillCategoryProps {
  title: string;
  color: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, color, skills }) => {
  const colors = {
    blue: "bg-blue-100 text-blue-800 border-blue-300",
    green: "bg-green-100 text-green-800 border-green-300",
    purple: "bg-purple-100 text-purple-800 border-purple-300",
    orange: "bg-orange-100 text-orange-800 border-orange-300",
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
      <h3 className="text-xl font-bold mb-6 text-gray-900">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <span
            key={i}
            className={`px-4 py-2 rounded-lg border text-sm font-medium ${colors[color as keyof typeof colors]}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
