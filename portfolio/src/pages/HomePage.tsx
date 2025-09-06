import About from "../components/about/About";
import Education from "../components/education/Education";
import Experience from "../components/experience/Experience";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Skills from "../components/skills/Skills";

const HomePage = () => {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
    </main>
  );
};

export default HomePage;
