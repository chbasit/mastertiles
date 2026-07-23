import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.jpg";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Tiles", href: "#tiles" },
  // { name: "Sanitary", href: "#sanitary" },
  { name: "Bathroom Fittings", href: "#Bathroomfittings" },
  { name: "Vanities", href: "#Vanities" },

  { name: "Sanitary Ware", href: "#Sanitaryware" },


  { name: "About", href: "#about" },
   { name: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar after hero section
      setScrolled(window.scrollY > window.innerHeight * 0.9);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FCFBFA]  shadow-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1500px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Company Logo"
              className={`w-14 h-14 rounded-full object-cover border-2 transition-all duration-300 ${
                scrolled ? "border-gray-300" : "border-white"
              }`}
            />

            <div className="hidden sm:block">
              <h2
                className={`font-bold text-xl tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-[#36454F]" : "text-white"
                }`}
              >
                MasterOne (M1)
              </h2>

              <p
                className={`text-xs tracking-[3px] uppercase transition-colors duration-300 ${
                  scrolled ? "text-gray-800" : "text-gray-200"
                }`}
              >
                m1tiles
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`font-regular transition duration-300 ${
                    scrolled
                      ? "text-[#36454F] hover:text-yellow-600"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
         {/* Social Icons */}
<div className="hidden lg:flex items-center gap-3">
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    className={`w-10 h-10   flex items-center justify-center transition duration-300 ${
      scrolled
        ? "  text-[#36454F] hover:bg-[#36454F] hover:text-white"
        : "  text-white hover:bg-white hover:text-[#36454F]"
    }`}
  >
    <FaFacebookF size={16} />
  </a>

  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    className={`w-10 h-10  flex items-center justify-center transition duration-300 ${
      scrolled
        ? "  text-[#36454F] hover:bg-[#36454F] hover:text-white"
        : "  text-white hover:bg-white hover:text-[#36454F]"
    }`}
  >
    <FaInstagram size={17} />
  </a>
</div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden transition-colors duration-300 ${
              scrolled ? "text-[#36454F]" : "text-white"
            }`}
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div
            className={`mt-4 rounded-2xl p-6 transition-all duration-300 ${
              scrolled
                ? "bg-white shadow-lg border border-gray-200"
                : "bg-white/10 backdrop-blur-md border border-white/20"
            }`}
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-lg transition ${
                      scrolled
                        ? "text-[#36454F] hover:text-yellow-600"
                        : "text-white hover:text-yellow-400"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

           <div className="flex items-center justify-center gap-4 mt-8">
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    className={`w-11 h-11 rounded-full border flex items-center justify-center transition ${
      scrolled
        ? "border-gray-300 text-[#36454F] hover:bg-[#36454F] hover:text-white"
        : "border-white text-white hover:bg-white hover:text-[#36454F]"
    }`}
  >
    <FaFacebookF size={18} />
  </a>

  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    className={`w-11 h-11 rounded-full border flex items-center justify-center transition ${
      scrolled
        ? " text-[#36454F] hover:bg-[#36454F] hover:text-white"
        : "  text-white hover:bg-white hover:text-[#36454F]"
    }`}
  >
    <FaInstagram size={18} />
  </a>
</div>
          </div>
        </div>
      </nav>
    </header>
  );
}