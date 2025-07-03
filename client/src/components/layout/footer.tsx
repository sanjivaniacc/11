import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center">
                <i className="fas fa-fire text-white text-sm"></i>
              </div>
              <span className="text-white font-bold text-xl">arcu</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading the future of business innovation with exceptional team expertise and cutting-edge solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/company" className="text-gray-400 hover:text-red-500 transition-colors">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-red-500 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-red-500 transition-colors">
                  Event Details
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="text-gray-400 hover:text-red-500 transition-colors">
                  Corporate Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/career" className="text-gray-400 hover:text-red-500 transition-colors">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/clubs" className="text-gray-400 hover:text-red-500 transition-colors">
                  Clubs
                </Link>
              </li>
              <li>
                <Link href="/dining" className="text-gray-400 hover:text-red-500 transition-colors">
                  Dinings
                </Link>
              </li>
              <li>
                <Link href="/policy" className="text-gray-400 hover:text-red-500 transition-colors">
                  Our Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-red-500"></i>
                <span>123 Business Ave, NY 10001</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone text-red-500"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-envelope text-red-500"></i>
                <span>contact@moderncorp.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 arcu. All rights reserved. Designed with passion and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}
