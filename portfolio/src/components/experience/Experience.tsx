import { experienceData } from "../../data/experienceData";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {experienceData.title}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experienceData.experiences.map((exp, i) => (
            <ExperienceCard key={i} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
