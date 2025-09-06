import { contactData } from "../../data/contactData";

const ContactExtra = () => (
  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white">
    <h3 className="text-xl font-bold mb-4">{contactData.extra.title}</h3>
    <p className="text-blue-100">{contactData.extra.text}</p>
  </div>
);

export default ContactExtra;
