import React from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

interface EducationCardProps {
  degree: string;
  school: string;
  status: string;
  period: string;
  location: string;
  courses: string[];
}

const EducationCard: React.FC<EducationCardProps> = ({
  degree,
  school,
  status,
  period,
  location,
  courses,
}) => (
  <div className="ml-12 sm:ml-20">
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{degree}</h3>
          <div className="flex items-center gap-2 text-blue-600 mb-2">
            <GraduationCap size={18} />
            <span className="font-semibold">{school}</span>
          </div>
        </div>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          {status}
        </span>
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

      <div className="bg-white/60 p-6 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-3">Main Classes:</h4>
        <div className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700">
          {courses.map((course, i) => (
            <span key={i}>• {course}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default EducationCard;
