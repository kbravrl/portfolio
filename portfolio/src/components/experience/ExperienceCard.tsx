import React from "react";
import { Building2, Calendar, MapPin } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  current: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  location,
  period,
  description,
  current,
}) => (
  <div className="relative">
    <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
    <div className="absolute left-2 sm:left-6 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

    <div className="ml-12 sm:ml-20 pb-12">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <Building2 size={18} />
              <span className="font-semibold ">{company}</span>
            </div>
          </div>
          {current && (
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Currently working
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span className="text-sm">{period}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        <ul className="space-y-3">
          {description.map((desc, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default ExperienceCard;
