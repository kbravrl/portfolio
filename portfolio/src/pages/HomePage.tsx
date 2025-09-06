import About from "../components/about/About";
import Experience from "../components/experience/Experience";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

const HomePage = () => {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Experience />
    </main>
  );
};

export default HomePage;
