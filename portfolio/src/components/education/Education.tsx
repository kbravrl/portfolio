import { educationData } from "../../data/educationData";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {educationData.title}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            <div className="absolute left-2 sm:left-6 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

            {educationData.timeline.map((edu, i) => (
              <EducationCard key={i} {...edu} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
