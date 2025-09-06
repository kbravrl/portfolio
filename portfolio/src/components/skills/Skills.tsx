import { skillsData } from "../../data/skillsData";
import SkillCategory from "./SkillCategory";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {skillsData.title}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {skillsData.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.categories.map((category, i) => (
            <SkillCategory key={i} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
