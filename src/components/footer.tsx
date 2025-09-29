"use client";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"
import { MapPin, Phone, Mail } from "lucide-react";


export default function Footer() {
  return (
    <footer >
      {/* CTA Section */}
      <section className="bg-[#FAF9F6] py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-700 mb-4">
          Ready to Join Our School Family?
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Take the first step towards your child’s bright future. 
          Our admissions team is here to guide you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/get-information">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            Schedule a Visit
          </button>
          </Link>
          
          <Link href="/get-information">
          <button className="bg-blue-100 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-200 transition">
            Get Information
          </button>
          </Link>
          
        </div>
      </section>

      <div className="bg-[#0B2A6F] text-white py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
        {/* About / Logo */}
        <div>
          <div className="flex items-center gap-3 mb-4">
           <img className="w-8 h-8" src="/asset/logs/podar_icon.png" alt="Podar School Logo" />
          <div className="flex flex-col">
            <h3 className="text-xl font-bold ">Podar School Sakoli</h3>
            <p className="text-sm text-gray-200">Excellence in Education</p> </div>
          </div>
          <p className="text-sm text-gray-200">
            Shaping future leaders through quality education, values,
            and holistic development. Part of the prestigious Podar
            Education Network.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="/about" className="hover:underline">About Podar</a></li>
            <li><a href="/why" className="hover:underline">Why Choose Us</a></li>
            <li><a href="/gallery" className="hover:underline">Photo Gallery</a></li>
            <li><a href="/career" className="hover:underline">Careers</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Information</h4>
          <div className="space-y-2 text-sm text-gray-200 gap-2 flex flex-col">
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              <p>Sakoli, Bhandara, Maharashtra 400001</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-6 h-6" />
              <p>+91 22 1234 5678</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-6 h-6" />
              <p>info@podarschool.edu.in</p>
            </div>
          </div>
          
        </div>

        {/* Social Media / Buttons */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Connect With Us</h4>
          <div className="flex mb-8 gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                className="text-blue-600 text-3xl hover:text-blue-800 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="text-pink-500 text-3xl hover:text-pink-700 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="text-sky-500 text-3xl hover:text-sky-700 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="text-blue-700 text-3xl hover:text-blue-900 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          <div className="flex flex-col gap-3">
            
            <Link href="/contact">
                <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
              Admission Inquiry
              </button>         
            </Link>
            <Link href="/contact">
                <button className="bg-gray-300 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-400 transition">
              School Brochure
              </button>         
            </Link>
          </div>
        </div>
      </div>
      <hr className="my-8 border-gray-400" />
      <div className="items-center justify-between text-sm text-gray-300 flex flex-col md:flex-row gap-4">
        <p>© 2025 Podar School Sakoli. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
        </div>
        
      </div>
      </div>
      
    </footer>
  );
}
