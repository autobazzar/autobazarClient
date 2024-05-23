
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function CallUs() {
  return (
    <div dir="rtl" className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl space-y-4 md:space-y-0 md:space-x-4">
        <div className="bg-[#4C857A] p-6 rounded-lg shadow-lg w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-white">تماس با ما</h2>
          <div className="mb-2 flex items-center">
            <FaPhoneAlt className="text-white ml-2" />
            <span className="font-bold text-white">تلفن پشتیبانی:</span>
            <span className="text-white ml-2">29901</span>
          </div>
          <div className="mb-2 flex items-center">
            <FaEnvelope className="text-white ml-2" />
            <span className="font-bold text-white">ایمیل:</span>
            <span className="text-white ml-2">pr-office@sbu.ac.ir</span>
          </div>
          <div className="mb-2 flex items-center">
            <FaMapMarkerAlt className="text-white ml-2" />
            <span className="font-bold text-white">کد پستی:</span>
            <span className="text-white ml-2">1983969411</span>
          </div>
        </div>
        <div className="bg-[#4C857A] p-6 rounded-lg shadow-lg w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-white">نشانی</h2>
          <div className="text-white mb-4">
            تهران، اوین، میدان شهید شهریاری
          </div>
          <div className="bg-white h-64 rounded-lg shadow-inner">
            {/* Map centered on Evin, Tehran */}
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.4561442697943!2d51.37460811519291!3d35.78847358017013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e06b8cda65d37%3A0xa58b8c2b75bdb905!2sEvin%2C%20Tehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2sus!4v1682577406497!5m2!1sen!2sus"
              className="w-full h-full rounded-lg"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
