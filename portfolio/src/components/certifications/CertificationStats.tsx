import React from "react";

interface CertificationStatsProps {
  stats: { label: string; value: string }[];
}

const CertificationStats: React.FC<CertificationStatsProps> = ({ stats }) => (
  <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
    {stats.map((stat, i) => (
      <div key={i} className="text-center">
        <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
        <div className="text-gray-600 text-sm">{stat.label}</div>
      </div>
    ))}
  </div>
);

export default CertificationStats;
