import { Share2, Network, GraduationCap, MapPin, Activity } from "lucide-react";

const WhyChooseUs = () => {
  const labs = [
    {
      icon: <Network className="w-10 h-10" />,
      title: "Population Dynamics & Ageing",
      description: "Analyzing rapid demographic shifts and their implications for policy making globally."
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Human Capital & Labour Markets",
      description: "Addressing youth employment, social security, and shrinking workforce challenges."
    },
    {
      icon: <Share2 className="w-10 h-10" />,
      title: "Science, Technology & Innovation",
      description: "Exploring the intersections of technological advancement and human development."
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "Food, Ecology & Climate Change",
      description: "Interdisciplinary research with concerns on equity and climate justice."
    },
    {
      icon: <Activity className="w-10 h-10" />,
      title: "Health, Medicine, and Care Economy",
      description: "Explorations into healthcare systems, care work, and the social and economic dimensions of health and well-well-being."
    }
  ];

  return (
    <section id="research" className="section-padding bg-primary text-white overflow-hidden relative">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
           <span className="text-secondary">Research Labs</span>
          </h2>
        </div>

       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {labs.map((lab, index) => (
    <div
      key={index}
      className="group px-6 py-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-primary transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-xl bg-white/10 group-hover:bg-primary/5 transition-colors shrink-0 text-secondary group-hover:text-primary">
          {lab.icon}
        </div>
        <h4 className="text-lg font-bold leading-tight">{lab.title}</h4>
      </div>

      <p className="text-white/70 group-hover:text-gray-600 leading-relaxed text-sm">
        {lab.description}
      </p>
    </div>
  ))}
</div>
        
        
      </div>
    </section>
  );
};

export default WhyChooseUs;
