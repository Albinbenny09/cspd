const CTASection = () => {
  return (
    <section className="section-padding pt-0 bg-white">
      <div className="container-custom">
        <div className="relative rounded-[3rem] overflow-hidden bg-primary px-8 py-20 md:py-32 text-center text-white shadow-2xl">
          {/* Ornamental backgrounds */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary opacity-95 -z-10"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none -z-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="max-w-4xl mx-auto space-y-10 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight uppercase tracking-tight">
              Fostering Interdisciplinary <span className="text-secondary italic">Scholarship</span>
            </h2>
            <p className="text-white/80 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
              Join our mission to address demographic shifts and development challenges through evidence-based research.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="https://cspd.in/contact/" className="bg-secondary hover:bg-white hover:text-primary text-white font-bold py-5 px-12 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-secondary/50 active:scale-95 text-lg w-full sm:w-auto">
                Collaborate With Us
              </a>
              <a href="https://cspd.in/resources-data-repository/" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold py-5 px-12 rounded-2xl transition-all duration-300 border border-white/20 active:scale-95 text-lg w-full sm:w-auto">
                Explore Data Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
