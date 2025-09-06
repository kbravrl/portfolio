import { heroData } from "../../data/heroData";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroContact from "./HeroContact";
import HeroImage from "./HeroImage";
import HeroSocial from "./HeroSocial";

const Hero = () => {
    return (
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-14">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <HeroTitle name={heroData.name} title={heroData.title} />
                        <HeroDescription description={heroData.description} />
                        <HeroContact email={heroData.email} location={heroData.location} />
                    </div>

                    <HeroImage image={heroData.image}>
                        <HeroSocial links={heroData.socialLinks} />
                    </HeroImage>

                </div>
            </div>
        </section>
    );
};

export default Hero;





