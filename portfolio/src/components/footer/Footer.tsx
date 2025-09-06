import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-gray-400">
            © 2025 Kübra Varol. All rights reserved. 
            <span className="flex items-center gap-1">
              Made with <Heart size={16} className="text-red-500" /> in Turkey
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
