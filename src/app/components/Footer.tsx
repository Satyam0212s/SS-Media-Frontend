import { Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="mb-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 font-['Playfair_Display'] text-2xl text-white">
              S&S Media Agency
            </h3>
            <p className="text-gray-400">
              Professional media coverage tailored to your vision. Elevating brands through creative excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-blue-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-blue-500">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#booking" className="text-gray-400 transition-colors hover:text-blue-500">
                  Book a Session
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-blue-500">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4 text-lg text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-gray-400 transition-all hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-gray-400 transition-all hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-gray-400 transition-all hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="mb-4 text-lg text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                <a href="mailto:info@ssmedia.com" className="text-gray-400 transition-colors hover:text-blue-500">
                  info@ssmedia.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                <a href="tel:+1234567890" className="text-gray-400 transition-colors hover:text-blue-500">
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                <span className="text-gray-400">
                  123 Media Street, Studio City, CA 90210
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-gray-400 sm:flex-row">
            <p>© {currentYear} S&S Media Agency. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="transition-colors hover:text-blue-500">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-blue-500">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
