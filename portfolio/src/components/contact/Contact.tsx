import { contactData } from "../../data/contactData";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import ContactExtra from "./ContactExtra";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {contactData.title}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{contactData.description}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ContactForm />
          <div className="space-y-8">
            <ContactInfo />
            <ContactSocial />
            <ContactExtra />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
