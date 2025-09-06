import React from "react";

interface MobileMenuProps {
  items: { href: string; label: string }[];
  isOpen: boolean;
  scrollToSection: (href: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ items, isOpen, scrollToSection }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
      <div className="px-4 py-4 space-y-2">
        {items.map((item) => (
          <button
            key={item.href}
            onClick={() => scrollToSection(item.href)}
            className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
