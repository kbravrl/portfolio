import { certificationsData } from "../../data/certificationsData";
import CertificationCard from "./CertificationCard";
import CertificationStats from "./CertificationStats";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {certificationsData.title}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {certificationsData.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificationsData.certifications.map((cert, i) => (
            <CertificationCard key={i} {...cert} />
          ))}
        </div>
        
        <CertificationStats stats={certificationsData.stats} />
      </div>
    </section>
  );
};

export default Certifications;
