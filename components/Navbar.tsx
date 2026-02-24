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
        { name: "Internal Advisory Committee", href: "/internal-advisory-committee" },
        { name: "External Advisory Committee", href: "/expert-advisory-board" },
        { name: "Affiliate Members", href: "/team-associate-members" },
        { name: "People", href: "/team-members" },
      ],
    },
    {
      name: "Research Labs",
      href: "#research",
      dropdown: [
        { name: "Population Dynamics & Ageing", href: "/research-population-dynamics" },
        { name: "Health, Medicine, and Care Economy", href: "/research-health-and-care-economy" },
        { name: "Human Capital, Labour Markets and Migration", href: "/research-human-capital-and-labour-markets" },
        { name: "Science, Technology and Innovation", href: "/research-technology-and-innovation" },
        { name: "Food, Ecology, and Climate Change", href: "/research-food-and-ecology" },
      ],
    },
    {
      name: "Initiatives",
      href: "#initiatives",
      dropdown: [
        { name: "Seminars & Centre Talk Series", href: "/intitiatives-lecture-series" },
        { name: "HOPES Conference 2026", href: "/hopes-conference" },
        { name: "Summer School", href: "/intitiatives-doctoral-colloquium" },
        { name: "Trainings & Workshops", href: "/intitiatives-training" },
        { name: "Faculty & Student Exchanges", href: "/intitiatives-faculty-student-exchanges" },
      ],
    },
    {
      name: "Connect",
      href: "#connect",
      dropdown: [
        { name: "Global", href: "/connect-global" },
        {
          name: "Community",
          href: "/connect-community",
          children: [
            { name: "Outreach Programmes", href: "/connect-outreach-programmes" },
            { name: "NGO Connect", href: "/connect-ngo-connect" },
            { name: "Field Engagement", href: "/intitiatives-field-engagements" },
          ],
        },
      ],
    },
    {
      name: "Resources",
      href: "#resources",
      dropdown: [
        {
          name: "Publications",
          href: "/resources-publications-2",
          children: [
            { name: "Books", href: "/resources-books" },
            { name: "Articles", href: "/resources-articles" },
            { name: "Policy Briefs", href: "/resources-policy-briefs" },
            { name: "Working Papers", href: "/resources-working-papers" },
            { name: "Student Blogs", href: "/resources-student-blogs" },
          ],
        },
        { name: "Newsletter", href: "/resources-publications" },
        { name: "Centre Data Repository (CDR)", href: "/resources-data-repository" },
      ],
    },
    {
      name: "Careers",
      href: "#careers",
      dropdown: [{ name: "Internships", href: "/intitiatives-internships" }],
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#3D111F] shadow-lg py-3" : "bg-[#3D111F] backdrop-blur-md py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <img
            src="/cspdlogo.png"
            alt="CSPD Logo"
            className="h-14 lg:h-16 w-auto object-contain bg-white p-1 rounded-md shadow-sm"
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-8 mx-12">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <button className="flex items-center space-x-1 text-secondary font-bold uppercase tracking-widest text-xs hover:text-white transition-colors py-2 cursor-pointer">
                  <span>{link.name}</span>
                  <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>
              ) : (
                <a
                  href={link.href}
                  className="relative text-secondary font-bold uppercase tracking-widest text-xs hover:text-white transition-colors py-2 group/link"
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-secondary scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left ${
                      link.name === "Home" ? "scale-x-100" : ""
                    }`}
                  ></span>
                </a>
              )}

              {link.dropdown && (
                <div className="absolute top-full left-0 mt-2 w-80 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 py-2">
                    {link.dropdown.map((sub) => (
                      <div key={sub.name} className="border-b border-gray-100/70 last:border-0">
                        <a
                          href={sub.href}
                          className="flex items-center justify-between px-6 py-3 text-sm font-medium text-gray-700 hover:bg-burgundy-tint hover:text-primary transition-colors"
                        >
                          <span>{sub.name}</span>
                          {sub.children ? <ChevronDown className="h-3.5 w-3.5 -rotate-90 text-gray-500" /> : null}
                        </a>
                        {sub.children ? (
                          <div className="pb-2">
                            {sub.children.map((child) => (
                              <a
                                key={child.name}
                                href={child.href}
                                className="block px-10 py-2 text-xs font-medium text-gray-600 hover:bg-burgundy-tint hover:text-primary transition-colors"
                              >
                                {child.name}
                              </a>
                            ))}
                          </div>
                        ) : null}
                      </div>
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

        <div className="flex items-center lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#C8A97A]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

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
                          <div key={sub.name} className="flex flex-col">
                            <a
                              href={sub.href}
                              className="text-white/70 hover:text-white text-base font-medium py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {sub.name}
                            </a>
                            {sub.children ? (
                              <div className="mt-1 space-y-1 border-l border-white/10 pl-3">
                                {sub.children.map((child) => (
                                  <a
                                    key={child.name}
                                    href={child.href}
                                    className="block text-white/60 hover:text-white text-sm py-1"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {child.name}
                                  </a>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="text-secondary hover:text-white text-lg font-bold uppercase tracking-widest py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
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
