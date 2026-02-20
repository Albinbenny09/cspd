import { ArrowRight, BookOpen, Users, Presentation, Database, Mail } from "lucide-react";

const Courses = () => {
  const programmes = [
    {
      title: "International Conference",
      category: "Flagship",
      description: "Annual International Conference of CSPD focusing on global demographic shifts.",
      icon: <Globe className="w-12 h-12 text-primary" />,
      link: "https://cspd.in/intitiatives-conferences/"
    },
    {
      title: "Graduate Research Colloquium",
      category: "Academic",
      description: "Platform for doctoral students to showcase interdisciplinary research.",
      icon: <Users className="w-12 h-12 text-primary" />,
      link: "https://cspd.in/intitiatives-doctoral-colloquium/"
    },
    {
      title: "Centre Talk Series",
      category: "Lecture",
      description: "Regular scholarly lectures by leading experts in Economics and Social Sciences.",
      icon: <Presentation className="w-12 h-12 text-primary" />,
      link: "https://cspd.in/intitiatives-lecture-series/"
    },
    {
      title: "Centre Webinar Series",
      category: "Digital",
      description: "Engaging global audiences through evidence-based research discussions.",
      icon: <Globe className="w-12 h-12 text-primary" />,
      link: "https://cspd.in/"
    },
    {
      title: "Centre Data Repository",
      category: "Resources",
      description: "Comprehensive data collection on population and development metrics.",
      icon: <Database className="w-12 h-12 text-primary" />,
      link: "https://cspd.in/resources-data-repository/"
    },
    {
       title: "Publications",
       category: "Research",
       description: "Regular Books, Articles, Policy Briefs and Working Papers.",
       icon: <BookOpen className="w-12 h-12 text-primary" />,
       link: "https://cspd.in/resources-publications-2/"
    }
  ];

  return (
    <section id="programmes" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Flagship <span className="text-primary">Programmes</span></h2>
            <p className="text-gray-600 max-w-2xl text-lg">
              Engaging in interdisciplinary scholarship through high-impact conferences, colloquiums, and technical series.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {programmes.map((prog, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full hover:-translate-y-2"
            >
              <div className="mb-8 p-4 bg-primary/5 rounded-2xl w-fit group-hover:bg-primary transition-all duration-500">
                <div className="text-primary group-hover:text-white transform group-hover:scale-110 transition-transform duration-500">
                  {prog.icon}
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {prog.category}
                </span>
              </div>

              <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                {prog.title}
              </h4>
              
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {prog.description}
              </p>

              <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                <a href={prog.link} className="flex items-center space-x-2 text-primary font-bold group/btn">
                  <span>Explore Programme</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Internal Globe Icon for consistency
const Globe = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);

export default Courses;
