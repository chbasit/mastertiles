import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

import logo from "../assets/images/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#343437] text-[#fff]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

        {/* Top Line */}
        <div className="border-t border-gray-200 mb-16"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={logo}
                alt="MasterOne"
                className="w-16 h-16 rounded-full object-cover border border-gray-200"
              />

              <div>
                <h2 className="text-2xl font-semibold">
                  MasterOne (M1)
                </h2>

                <p className="text-sm text-white">
                  m1tiles.pk
                </p>
              </div>
            </div>

            <p className="leading-8 text-white">
              MasterOne (M1) offers premium ceramic tiles,
              porcelain tiles, sanitary ware, kitchen solutions,
              and luxury interior finishes designed to elevate
              residential and commercial spaces with timeless
              quality and modern aesthetics.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Products
            </h3>

            <ul className="space-y-4 text-white">
              <li className="hover:text-[#e8ebec] cursor-pointer transition">
                Wall Tiles
              </li>

              <li className="hover:text-[#e8ebec] cursor-pointer transition">
                Floor Tiles
              </li>

              <li className="hover:text-[#e8ebec] cursor-pointer transition">
                Porcelain Tiles
              </li>

              <li className="hover:text-[#e8ebec] cursor-pointer transition">
                Kitchen Collection
              </li>

              <li className="hover:text-[#e8ebec] cursor-pointer transition">
                Sanitary Ware
              </li>

              <li className="hover:text-[#e8ebec] cursor-pointer transition">
                Bathroom Accessories
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-white">
              <li className="hover:text-[#e8ebec] cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-[#e8ebec] cursor-pointer transition">
                About Us
              </li>

              <li className="hover:text-[#e8ebec] cursor-pointer transition">
                Collections
              </li>

              <li className="hover:text-[#e8ebec] cursor-pointer transition">
                Projects
              </li>

              <li className="hover:text-[#e8ebec] cursor-pointer transition">
                Gallery
              </li>

              <li className="hover:text-[#e8ebec] cursor-pointer transition">
                Contact Us
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-white">

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />

                <p>
                  Main GT Road,
                  <br />
                  Gujranwala, Pakistan
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <p>+92 300 1234567</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <p>info@m1tiles.pk</p>
              </div>

              <div className="flex items-center gap-3">
                <Clock size={18} />
                <p>Mon - Sat : 9:00 AM - 8:00 PM</p>
              </div>

            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#B9975B] hover:text-white hover:border-[#B9975B] transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#B9975B] hover:text-white hover:border-[#B9975B] transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#B9975B] hover:text-white hover:border-[#B9975B] transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-200 mt-16"></div>

        {/* Footer Bottom */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-white text-center md:text-left">
            © 2026 <span className="font-semibold">MasterOne (M1)</span>. All
            Rights Reserved.
          </p>

          <p className="text-sm text-white text-center">
            Designed & Developed  for
            <span className="font-semibold text-[#fff]">
              {" "}
              m1tiles.pk
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}