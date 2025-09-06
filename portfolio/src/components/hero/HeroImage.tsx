import React from "react";

interface HeroImageProps {
  image?: string;    
  initials?: string;
  children?: React.ReactNode;
}

const HeroImage: React.FC<HeroImageProps> = ({ image, initials, children }) => (
  <div className="lg:w-1/2 flex justify-center">
    <div className="relative">
      <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-2xl overflow-hidden">
        <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
          {image ? (
            <img
              src={image}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div className="text-6xl lg:text-8xl text-blue-600 font-bold">
              {initials}
            </div>
          )}
        </div>
      </div>
      {children}
    </div>
  </div>
);

export default HeroImage;
