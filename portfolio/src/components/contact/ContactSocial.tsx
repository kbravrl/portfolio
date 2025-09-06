import { contactData } from "../../data/contactData";

const ContactSocial = () => (
  <div className="bg-white rounded-xl shadow-lg p-8">
    <h3 className="text-2xl font-bold text-gray-900 mb-6">Sosyal Medya</h3>
    <div className="flex gap-4">
      {contactData.socials.map((social, i) => (
        <a
          key={i}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 p-4 rounded-lg border-2 border-gray-200 hover:border-blue-200 transition-all ${social.color} group w-full`}
        >
          <social.icon size={20} />
          <span className="font-medium">{social.name}</span>
        </a>
      ))}
    </div>
  </div>
);

export default ContactSocial;
