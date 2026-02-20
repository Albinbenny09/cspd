"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "Team", 
      href: "#",
      dropdown: [
        { name: "Internal Advisory Committee", href: "https://cspd.in/internal-advisory-committee/" },
        { name: "External Advisory Committee", href: "https://cspd.in/expert-advisory-board/" },
        { name: "Affiliate Members", href: "https://cspd.in/team-associate-members/" },
        { name: "People", href: "https://cspd.in/team-members/" },
      ]
    },
    { 
      name: "Research Labs", 
      href: "#research",
      dropdown: [
        { name: "Population Dynamics & Ageing", href: "https://cspd.in/research-population-dynamics/" },
        { name: "Health, Medicine, and Care Economy", href: "https://cspd.in/research-health-and-care-economy/" },
        { name: "Human Capital, Labour Markets and Migration", href: "https://cspd.in/research-human-capital-and-labour-markets/" },
        { name: "Science, Technology and Innovation", href: "https://cspd.in/research-technology-and-innovation/" },
        { name: "Food, Ecology, and Climate Change", href: "https://cspd.in/research-food-and-ecology/" },
      ]
    },
    { 
      name: "Initiatives", 
      href: "#initiatives",
      dropdown: [
        { name: "Seminars & Centre Talk Series", href: "https://cspd.in/intitiatives-lecture-series/" },
        { name: "HOPES Conference 2026", href: "https://cspd.in/hopes-conference/" },
        { name: "Trainings & Workshops", href: "https://cspd.in/intitiatives-training/" },
        { name: "Summer School", href: "https://cspd.in/intitiatives-doctoral-colloquium/" },
        { name: "Faculty & Student Exchanges", href: "https://cspd.in/intitiatives-faculty-student-exchanges/" },
      ]
    },
    { 
      name: "Connect", 
      href: "#connect",
      dropdown: [
        { name: "Global", href: "https://cspd.in/connect-global/" },
        { name: "Community", href: "https://cspd.in/connect-community/" },
      ]
    },
    { 
      name: "Resources", 
      href: "#resources",
      dropdown: [
        { name: "Publication", href: "https://cspd.in/resources-publications-2/" },
        { name: "Newsletter", href: "https://cspd.in/resources-publications/" },
        { name: "Centre Data Repository (CDR)", href: "https://cspd.in/resources-data-repository/" },
      ]
    },
    { 
      name: "Careers", 
      href: "#careers",
      dropdown: [
        { name: "Internships", href: "https://cspd.in/intitiatives-internships/" },
      ]
    },
    { name: "Contact", href: "https://cspd.in/contact/" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#3D111F] shadow-lg py-3" : "bg-[#3D111F] backdrop-blur-md py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Left: CSPD Logo - Priority match screenshot */}
       <Link href="/" className="flex items-center space-x-3">
  <img 
    src="/cspdlogo.png" 
    alt="CSPD Logo" 
    className="h-14 lg:h-16 w-auto object-contain bg-white p-1 rounded-md shadow-sm"
  />
</Link>

        {/* Desktop Links (Center) */}
        <div className="hidden lg:flex items-center space-x-8 mx-12">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <button
                  className="flex items-center space-x-1 text-secondary font-bold uppercase tracking-widest text-xs hover:text-white transition-colors py-2 cursor-pointer"
                >
                  <span>{link.name}</span>
                  <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>
              ) : (
                <Link
                  href={link.href}
                  className="relative text-secondary font-bold uppercase tracking-widest text-xs hover:text-white transition-colors py-2 group/link"
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-secondary scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left ${link.name === "Home" ? "scale-x-100" : ""}`}></span>
                </Link>
              )}

              {/* Desktop Dropdown Menu */}
              {link.dropdown && (
                <div className="absolute top-full left-0 mt-2 w-56 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 py-2">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-burgundy-tint hover:text-primary transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
 <Link href="/" className="flex items-center space-x-3">
          <img 
            src="https://cspdin.wordpress.com/wp-content/uploads/2025/03/christ_university_logo.jpeg" 
            alt="Christ University Logo" 
            className="h-14 lg:h-16 w-auto object-contain bg-white p-1 rounded-md shadow-sm"
          />
         
        </Link>
        {/* Mobile Menu Button - Moved to end of flex row */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#C8A97A]"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary absolute top-full left-0 w-full h-[calc(100vh-80px)] overflow-y-auto shadow-2xl border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      className="flex justify-between items-center text-secondary text-lg font-bold uppercase tracking-widest py-2"
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === link.name ? "rotate-180" : ""}`} />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="flex flex-col pl-4 space-y-2 mt-2 border-l border-white/10">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="text-white/70 hover:text-white text-base font-medium py-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="text-secondary hover:text-white text-lg font-bold uppercase tracking-widest py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-6 border-t border-white/10">
              <Link 
                href="/contact" 
                className="bg-secondary text-primary font-bold py-4 px-6 rounded-lg w-full text-center block"
                onClick={() => setIsOpen(false)}
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
