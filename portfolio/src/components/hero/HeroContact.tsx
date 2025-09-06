import React from "react";
import { Mail, MapPin } from "lucide-react";

interface HeroContactProps {
  email: string;
  location: string;
}

const HeroContact: React.FC<HeroContactProps> = ({ email, location }) => (
  <div className="flex flex-wrap gap-6 text-gray-600">
    <div className="flex items-center gap-2">
      <Mail size={18} className="text-blue-600" />
      <span className="text-sm hover:text-blue-600 transition-colors">{email}</span>
    </div>
    <div className="flex items-center gap-2">
      <MapPin size={18} className="text-blue-600" />
      <span className="text-sm hover:text-blue-600 transition-colors">{location}</span>
    </div>
  </div>
);

export default HeroContact;
