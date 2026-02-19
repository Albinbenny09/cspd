import { Microscope, Globe, TreePine } from "lucide-react";

const About = () => {
  

  return (
    <section id="about" className="section-padding bg-primary overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(163,68,96,0.1),transparent)] pointer-events-none"></div>
      
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[600px] border-4 border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop" 
                alt="Research Team" 
                className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-secondary/10 rounded-3xl"></div>
          </div>

          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h3 className="text-secondary font-bold tracking-widest uppercase text-xs">About the Centre</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight font-serif">
                Foster Research <br />
                <span className="text-secondary italic"> Expertise in Population.</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                The Centre for Studies in Population and Development, hosted by the Department of Economics, CHRIST (Deemed to be University), strives to foster research expertise on themes related to population and development. The Centre envisions to be a leader in fostering interdisciplinary scholarship.
              </p>
            </div>

           
            <a href="https://cspd.in/about-us/" className="text-primary font-bold flex items-center gap-2 hover:underline">
               Take a Deep Dive 
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
