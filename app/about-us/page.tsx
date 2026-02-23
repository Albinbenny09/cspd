import Image from "next/image";
import { Landmark, Target, Eye, Handshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Focus on development challenges of changing population structures through evidence-based research at micro, meso, and macro levels.",
  "Facilitate collaborations, networks, and international mobility with external population research centers and leading donor agencies.",
  "Promote interdisciplinary research, extension and training services, and policy dialogue on population and development issues.",
  "Generate new data through field-based research and maintain repositories for future use.",
  "Empower individuals and communities to become agents of empowerment and social justice through action-oriented research.",
];

const partners = [
  { name: "Harvard", logo: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/harvard.jpg" },
  { name: "Oxford", logo: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/oxford.jpg" },
  { name: "CIMMYT", logo: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/cimmyt.webp" },
  { name: "EHESS", logo: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/ehess.png" },
  { name: "IIT Bombay", logo: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/iit-bombay.jpg" },
  { name: "Jamia Millia Islamia", logo: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/jmi.webp" },
  { name: "TDU", logo: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/tdu.jpg" },
  { name: "NIAS", logo: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/nias.png" },
  { name: "ISEC", logo: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/isec.png" },
  { name: "VV Giri National Labour Institute", logo: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/v.v_giri_national_labour_institute.jpg" },
  { name: "IEG", logo: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/ieg.png" },
  { name: "FAS", logo: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/fas.png" },
  { name: "CDS", logo: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/cds.png" },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-secondary">
                <Landmark className="h-4 w-4" />
                About Us
              </div>

              <h1 className="mt-6 text-4xl md:text-5xl font-bold font-serif leading-tight">About the Centre</h1>

              <p className="mt-5 text-lg text-white/75">
                The Centre for Studies in Population and Development (CSPD) is set up under the aegis of the Department of Economics, CHRIST (Deemed to be University) as a potential center of excellence in policy related to demography and socio-economic development.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#3D111F]/60 p-2">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <Image
                  src="https://cspdin.wordpress.com/wp-content/uploads/2025/03/about-us.png"
                  alt="About CSPD"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 680px"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container-custom mt-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="inline-flex items-center gap-2 text-secondary">
                <Target className="h-5 w-5" />
                <h2 className="text-2xl font-bold font-serif text-white">Our Mission</h2>
              </div>
              <p className="mt-4 text-white/75">
                Our mission is to deal with the questions of rapid demographic shifts and development challenges through evidence-based research.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="inline-flex items-center gap-2 text-secondary">
                <Eye className="h-5 w-5" />
                <h2 className="text-2xl font-bold font-serif text-white">Our Vision</h2>
              </div>
              <p className="mt-4 text-white/75">
                Our vision is to become a leader in fostering interdisciplinary scholarship, with emphasis on economic, social and climate justice.
              </p>
            </div>
          </div>
        </section>

        <section className="container-custom mt-12">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold font-serif">What We Aim To Do</h2>
            <p className="mt-3 text-white/80 font-semibold">At the centre, we operate with the following broad objectives:</p>

            <ul className="mt-6 grid gap-3">
              {objectives.map((objective) => (
                <li
                  key={objective}
                  className="rounded-xl border border-white/10 bg-[#3D111F]/60 px-5 py-4 text-white/85"
                >
                  {objective}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container-custom mt-12">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="inline-flex items-center gap-2 text-secondary">
              <Handshake className="h-5 w-5" />
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">Our Partners</h2>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="rounded-xl border border-white/10 bg-[#3D111F]/60 p-4"
                >
                  <div className="relative h-20 w-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                      sizes="160px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
