import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="connect" className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container-custom">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <Link href="/" className="flex items-center">
              <img 
                src="https://cspdin.wordpress.com/wp-content/uploads/2025/03/logo.jpg" 
                alt="CSPD Logo" 
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Leading interdisciplinary scholarship on population and development with an emphasis on economic, social and climate justice.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/in/centre-for-studies-in-population-and-development-christ-deemed-to-be-university-409763371/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all group">
                <Linkedin size={20} className="text-gray-400 group-hover:text-white" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all group">
                <Facebook size={20} className="text-gray-400 group-hover:text-white" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all group">
                <Instagram size={20} className="text-gray-400 group-hover:text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-8">Navigation</h4>
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
                    className="text-gray-400 hover:text-primary transition-colors flex items-center space-x-2"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-8">Research Focus</h4>
            <ul className="space-y-4">
              {["Population Dynamics", "Health & Care Economy", "Labour Markets", "Science & Innovation", "Climate Change"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-bold text-xl mb-8">Visit the Centre</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Room No 331, Block I, CHRIST (Deemed to be University), Hosur Road, Bangalore – 560029</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-primary w-6 h-6 flex-shrink-0" />
                <span className="text-gray-400">+91 (Economics Dept)</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-primary w-6 h-6 flex-shrink-0" />
                <span className="text-gray-400">cspd@christuniversity.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Centre for Studies in Population and Development (CSPD). Hosted by CHRIST (Deemed to be University).
          </p>
          <div className="flex space-x-8 text-sm text-gray-500">
            <Link href="https://cspd.in/" className="hover:text-white transition-colors">Bluesky</Link>
            <Link href="https://cspd.in/" className="hover:text-white transition-colors">RSS Feed</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
