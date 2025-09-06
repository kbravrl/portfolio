import React from "react";

interface DesktopMenuProps {
  items: { href: string; label: string }[];
  scrollToSection: (href: string) => void;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ items, scrollToSection }) => (
  <div className="hidden md:flex space-x-8">
    {items.map((item) => (
      <button
        key={item.href}
        onClick={() => scrollToSection(item.href)}
        className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
      >
        {item.label}
      </button>
    ))}
  </div>
);

export default DesktopMenu;
