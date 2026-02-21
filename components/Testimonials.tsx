import { Calendar, ArrowRight, User } from "lucide-react";

const Testimonials = () => {
  const events = [
    {
      date: "August 22, 2025",
      title: "Studying Long-term Social and Economic Changes",
      speaker: "Prof. Takahiro Sato",
      category: "Centre Talk Series",
      content: "Seminar exploring perspectives from Rural Punjab as part of our regular Scholarly Series."
    },
    {
      date: "June 18, 2025",
      title: "The Great Nicobar Betrayal",
      speaker: "Dr Pankaj Sekhsaria",
      category: "Special Lecture",
      content: "A catalogue and a warning regarding the environmental and social impacts in Great Nicobar."
    },
    {
      date: "March 10, 2025",
      title: "The Political Economy of Agrarian Change",
      speaker: "Dr Deepak Mishra",
      category: "Circular Migration",
      content: "Lecture on the intersections of migration and agrarian shifts in modern India."
    }
  ];

  return (
    <section id="initiatives" className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(200,169,122,0.03),transparent)] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight font-serif">
            Recent Events
          </h2>
          <p className="text-white/70 text-lg">
            A chronicle of our recent academic engagements, lectures, and community outreach.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:shadow-2xl transition-all duration-500 relative flex flex-col h-full"
            >
              <div className="flex items-center gap-2 text-secondary font-bold text-sm mb-4">
                <Calendar size={16} />
                <span>{event.date}</span>
              </div>

              <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 w-fit border border-secondary/30">
                {event.category}
              </span>

              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-secondary transition-colors leading-tight">
                {event.title}
              </h4>

              <p className="text-white/60 italic mb-8 flex-grow">
                "{event.content}"
              </p>

              <div className="flex items-center space-x-4 pt-6 border-t border-white/10 mt-auto">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{event.speaker}</h4>
                
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <a href="https://cspdin.wordpress.com/connect-community/" className="inline-flex items-center gap-2 text-secondary font-bold hover:text-white transition-colors border-b border-secondary/20 pb-1">
                View All Events <ArrowRight size={18} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
