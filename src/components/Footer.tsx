import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import LogoLight from "../img/logo-light.webp";

const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: "#100422" }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={LogoLight} width={200} alt="Logo | LawEdge" />
            <p className="text-gray-300 leading-relaxed">
              Providing exceptional legal counsel with integrity, dedication,
              and results-driven advocacy for over 25 years.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-law-gold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "#" },
                { name: "Services", path: "#" },
                { name: "Attorneys", path: "#" },
                { name: "Testimonials", path: "#" },
                { name: "Blog", path: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-law-gold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-law-gold">
              Practice Areas
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Family Law", id: "family-law" },
                { name: "Criminal Defense", id: "criminal-defense" },
                { name: "Business Law", id: "business-law" },
                { name: "Personal Injury", id: "personal-injury" },
                { name: "Estate Planning", id: "estate-planning" },
                { name: "Immigration Law", id: "immigration-law" },
              ].map((area) => (
                <li key={area.id}>
                  <Link
                    to="#"
                    className="text-gray-300 hover:text-law-gold transition-colors duration-200"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-law-gold">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    123 Justice Boulevard
                    <br />
                    Suite 456
                    <br />
                    Metro City, MC 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-law-gold" />
                <p className="text-gray-300">(555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-law-gold" />
                <p className="text-gray-300">info@lawedge.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-law-gold mt-1" />
                <div className="text-gray-300">
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                  <p>Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} LawEdge. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
