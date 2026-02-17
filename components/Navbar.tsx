"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Team", href: "#team" },
    { name: "Research Labs", href: "#research" },
    { name: "Initiatives", href: "#initiatives" },
    { name: "Connect", href: "https://cspdin.wordpress.com/contact/" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img 
            src="https://cspdin.wordpress.com/wp-content/uploads/2025/03/logo.jpg" 
            alt="CSPD Logo" 
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${scrolled ? "text-gray-700 hover:text-primary" : "text-white/80 hover:text-white"} font-medium transition-colors`}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="https://cspdin.wordpress.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary hover:bg-white hover:text-primary text-white font-bold py-2.5 px-6 rounded-lg transition-all duration-300 shadow-md"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${scrolled ? "text-primary" : "text-white"}`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary text-lg font-medium"
                onClick={() => setIsOpen(false)}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="https://cspdin.wordpress.com/contact/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white font-bold py-3 px-6 rounded-lg w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
