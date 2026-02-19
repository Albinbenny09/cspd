import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="connect" className="bg-neutral-dark text-white pt-24 pb-12 border-t border-white/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <img 
                  src="https://cspdin.wordpress.com/wp-content/uploads/2025/03/christ_university_logo.jpeg" 
                  alt="Christ University Logo" 
                  className="h-12 w-auto object-contain bg-white p-1 rounded-md shadow-sm"
                />
              </Link>
              <img 
                src="https://cspdin.wordpress.com/wp-content/uploads/2025/06/cspd-logo-20250209112148.jpg" 
                alt="CSPD Logo" 
                className="h-12 w-auto object-contain rounded-md shadow-sm"
              />
            </div>
            <p className="text-white/60 leading-relaxed">
              Leading interdisciplinary scholarship on population and development with an emphasis on economic, social and climate justice.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/in/centre-for-studies-in-population-and-development-christ-deemed-to-be-university-409763371/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all group">
                <Linkedin size={20} className="text-white/40 group-hover:text-primary" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-8 text-secondary font-serif italic">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "#about" },
                { name: "Research Labs", href: "#research" },
                { name: "Initiatives", href: "#initiatives" },
                { name: "Connect", href: "https://cspdin.wordpress.com/contact/" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-white/60 hover:text-secondary transition-colors flex items-center space-x-2"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <span className="w-1 h-1 rounded-full bg-secondary/40"></span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-8 text-secondary font-serif italic">Research Focus</h4>
            <ul className="space-y-4">
              {["Population Dynamics", "Health & Care Economy", "Labour Markets", "Science & Innovation", "Climate Change"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/60 hover:text-secondary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-bold text-xl mb-8 text-secondary font-serif italic">Visit the Centre</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-secondary w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed">Room No 331, Block I, CHRIST (Deemed to be University), Hosur Road, Bangalore – 560029</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-secondary w-5 h-5 flex-shrink-0" />
                <span className="text-white/60 text-sm">cspd@christuniversity.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Centre for Studies in Population and Development (CSPD). Hosted by CHRIST (Deemed to be University).
          </p>
          <div className="flex space-x-8 text-xs text-white/40">
            <Link href="https://cspd.in/" className="hover:text-secondary transition-colors uppercase tracking-widest leading-none border-b border-transparent hover:border-secondary pb-px">Bluesky</Link>
            <Link href="https://cspd.in/" className="hover:text-secondary transition-colors uppercase tracking-widest leading-none border-b border-transparent hover:border-secondary pb-px">RSS Feed</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
