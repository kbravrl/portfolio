import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { headerData } from "../../data/headerData";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo text={headerData.logo} />

          <DesktopMenu items={headerData.menuItems} scrollToSection={scrollToSection} />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <MobileMenu
          items={headerData.menuItems}
          isOpen={isMenuOpen}
          scrollToSection={scrollToSection}
        />
      </nav>
    </header>
  );
};

export default Header;
