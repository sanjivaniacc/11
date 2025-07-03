import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { path: "/company", label: "Company" },
    { path: "/team", label: "Our Team" },
    { path: "/events", label: "Event Details" },
    { path: "/corporate", label: "Corporate Booking" },
    { path: "/career", label: "Career" },
    { path: "/policy", label: "Our Policy" },
    { path: "/clubs", label: "Clubs" },
    { path: "/dining", label: "Dinings" },
    { path: "/about", label: "About" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-red-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center">
              <i className="fas fa-fire text-white text-sm"></i>
            </div>
            <span className="text-white font-bold text-xl">arcu</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`transition-colors duration-300 ${
                  isActive(item.path)
                    ? "text-red-500 font-semibold"
                    : "text-gray-300 hover:text-red-500"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-red-500 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-red-500/20">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block transition-colors duration-300 ${
                  isActive(item.path)
                    ? "text-red-500 font-semibold"
                    : "text-gray-300 hover:text-red-500"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-full text-center hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
