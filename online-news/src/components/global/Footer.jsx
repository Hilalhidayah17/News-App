import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 rounded-b-md">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-pink-500">YNews</h2>
          <p className="text-gray-400 mt-2 text-sm leading-relaxed">
            Setting the Standard for Quality Mining Services and Solutions.
            Innovative solutions and services that change lives every day.
          </p>
          {/* Social Media Icons */}
          <div className="flex gap-3 mt-4">
            <a href="#" className="bg-pink-500 p-2 rounded-full">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="bg-pink-500 p-2 rounded-full">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="bg-pink-500 p-2 rounded-full">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="bg-pink-500 p-2 rounded-full">
              <i className="fa-brands fa-pinterest"></i>
            </a>
          </div>
        </div>

        {/* About Section */}
        <div>
          <h3 className="font-semibold text-lg">About</h3>
          <ul className="mt-2 space-y-1 sm:space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="font-semibold text-lg">Company</h3>
          <ul className="mt-2 space-y-1 sm:space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Partner With Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-semibold text-lg">Contact us</h3>
          <ul className="mt-2 space-y-1 sm:space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-pink-500" />
              <span>Miningcontractor.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-pink-500" />
              <span>+61-493314230</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-pink-500" />
              <span>Unit 104, 21-37 Waitara Ave</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
