import { contactData } from "../../data/contactData";

const ContactInfo = () => (
  <div className="bg-white rounded-xl shadow-lg p-8">
    <h3 className="text-2xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h3>
    <div className="space-y-4">
      {contactData.info.map((info, i) => (
        <div key={i} className="flex items-center gap-4">
          <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
            <info.icon className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{info.title}</h4>
            {info.link ? (
              <a href={info.link} className="text-gray-600 hover:text-blue-600">
                {info.value}
              </a>
            ) : (
              <span className="text-gray-600">{info.value}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ContactInfo;
