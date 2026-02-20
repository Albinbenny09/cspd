import Image from "next/image";

const partners = [
  { name: "Partner Logo", url: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/2024-logo_pfad-rot-1536x241-1.webp" },
  { name: "CIMMYT", url: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/cimmyt.webp" },
  { name: "EHESS", url: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/ehess.png" },
  { name: "IIT Bombay", url: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/iit-bombay.jpg" },
  { name: "JMI", url: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/jmi.webp" },
  { name: "TDU", url: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/tdu.jpg" },
  { name: "NIAS", url: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/nias.png" },
  { name: "University College Dublin", url: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/university_college_dublin_logo.svg_.png" },
  { name: "V.V. Giri National Labour Institute", url: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/v.v_giri_national_labour_institute.jpg" },
  { name: "IEG", url: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/ieg.png" },
  { name: "FAS", url: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/fas.png" },
];

const Partners = () => {
  // Double the partners array to ensure seamless looping for infinite scroll
  const allPartners = [...partners, ...partners];

  return (
    <section className="py-24 bg-sand-pale border-y border-sand-light/30 overflow-hidden relative">
       {/* Background decorative element */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom mb-16 relative z-10 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-serif text-primary relative pb-6 w-fit">
          Knowledge Partners
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-secondary rounded-full"></div>
        </h2>
        <p className="mt-10 text-neutral-mid max-w-2xl text-lg leading-relaxed">
          Collaborating with prestigious global and national institutions to foster excellence in research and social development.
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Gradient overlays for smooth fading effect at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-sand-pale to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-sand-pale to-transparent z-10 pointer-events-none"></div>

        <div className="flex space-x-16 animate-scroll whitespace-nowrap hover:[animation-play-state:paused] py-8">
          {allPartners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-56 h-28 relative transition-all duration-700 opacity-90 hover:opacity-100 hover:scale-105 flex items-center justify-center group/item"
  >
              <div className="absolute inset-0 bg-white/40 rounded-2xl blur-xl scale-0 group-hover/item:scale-110 transition-transform duration-700 -z-10"></div>
              <div className="w-full h-full p-6 relative">
                 <Image
                  src={partner.url}
                  alt={partner.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover/item:scale-110"
                  sizes="(max-width: 768px) 150px, 250px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
