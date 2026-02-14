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
    <section id="initiatives" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h3 className="text-primary font-bold tracking-widest uppercase text-sm">Recent Events</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Scholarly <span className="text-primary">Discourse</span> & Events
          </h2>
          <p className="text-gray-600 text-lg">
            A chronicle of our recent academic engagements, lectures, and community outreach.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl bg-slate-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 relative flex flex-col h-full"
            >
              <div className="flex items-center gap-2 text-primary font-bold text-sm mb-4">
                <Calendar size={16} />
                <span>{event.date}</span>
              </div>

              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 w-fit">
                {event.category}
              </span>

              <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                {event.title}
              </h4>

              <p className="text-gray-600 italic mb-8 flex-grow">
                "{event.content}"
              </p>

              <div className="flex items-center space-x-4 pt-6 border-t border-gray-100 mt-auto">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{event.speaker}</h4>
                  <p className="text-gray-500 text-xs lowercase">Delivered at CSPD</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <a href="https://cspd.in/" className="btn-secondary inline-flex items-center gap-2">
                View All Events <ArrowRight size={18} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
