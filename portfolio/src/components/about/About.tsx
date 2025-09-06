import { aboutData } from "../../data/aboutData";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {aboutData.title}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {aboutData.subtitle}
            </h3>
            {aboutData.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-700 mb-6 leading-relaxed">
                {p}
              </p>
            ))}
            <div className="flex flex-wrap gap-3">
              {aboutData.tags.map((tag, i) => (
                <span key={i} className="px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {aboutData.highlights.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
