import Link from "next/link";

const CTASection = () => {
  return (
    <section className="section-padding pt-0 bg-primary">
      <div className="container-custom">
        <div className="relative rounded-[3rem] overflow-hidden bg-primary px-8 py-20 md:py-32 text-center text-white shadow-2xl border border-white/10">
          {/* Ornamental backgrounds */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-burgundy-mid to-primary opacity-60 -z-10"></div>
          
          <div className="max-w-4xl mx-auto space-y-10 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight uppercase tracking-tight font-serif">
              Fostering Interdisciplinary <span className="text-secondary italic lowercase">Scholarship</span>
            </h2>
            <p className="text-white/80 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
              Join our mission to address demographic shifts and development challenges through evidence-based research.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="https://cspdin.wordpress.com/contact/" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-sand-light text-primary font-bold py-5 px-12 rounded-2xl transition-all duration-300 shadow-xl active:scale-95 text-xl w-full sm:w-auto uppercase tracking-widest">
                Collaborate With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
