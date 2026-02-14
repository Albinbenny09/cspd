import { Microscope, Globe, TreePine } from "lucide-react";

const About = () => {
  const objectives = [
    {
      icon: <Microscope className="w-8 h-8 text-primary" />,
      title: "Interdisciplinary Research",
      description: "Engaging in deeper scholarship on themes related to population and development with focus on equity."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global South & North",
      description: "Addressing rapid demographic shifts, youth employment in the South, and healthcare costs in the North."
    },
    {
      icon: <TreePine className="w-8 h-8 text-primary" />,
      title: "Climate Justice",
      description: "Leading research that emphasizes social and climate justice in the face of environmental changes."
    }
  ];

  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl aspect-square lg:aspect-auto lg:h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop" 
                alt="Research Team" 
                className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-primary/5 rounded-3xl"></div>
          </div>

          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h3 className="text-primary font-semibold tracking-widest uppercase text-sm">About the Centre</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Foster Research <br />
                <span className="text-primary"> Expertise in Population.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The Centre for Studies in Population and Development, hosted by the Department of Economics, CHRIST (Deemed to be University), strives to foster research expertise on themes related to population and development. The Centre envisions to be a leader in fostering interdisciplinary scholarship.
              </p>
            </div>

            <div className="grid gap-6 pt-6">
              {objectives.map((obj, index) => (
                <div key={index} className="flex items-start space-x-6 p-6 rounded-2xl bg-slate-50 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    {obj.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-xl text-gray-900">{obj.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{obj.description}</p>
                  </div>
                </div>
              ))}
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
