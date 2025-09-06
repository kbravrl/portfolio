import { Mail, MapPin, Github, Linkedin } from "lucide-react";

export const contactData = {
  title: "Get in Touch",
  description:
    "If you would like to work with me or have any questions, feel free to reach out using the form below.",
  info: [
    {
      icon: Mail,
      title: "Email",
      value: "kubravarol499@gmail.com",
      link: "mailto:kubravarol499@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Manisa, Turkey",
      link: null,
    },
  ],
  socials: [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/kbravrl",
      color: "hover:text-blue-600",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/k%C3%BCbravarol/",
      color: "hover:text-blue-600",
    },
  ],
  extra: {
    title: "For Collaboration",
    text: "If you are looking for backend development support in your software projects, feel free to contact me.",
  },
};
