import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* TOP ROW LEFT — Text block (Inauguration) */}
        <div className="relative bg-white p-12 lg:p-16 flex flex-col justify-center min-h-[420px] overflow-hidden">
          <div className="absolute right-[-60px] top-[50%] -translate-y-1/2 w-[280px] h-[280px] rounded-full border-[40px] border-[#5C1A2E]/5 pointer-events-none"></div>
          <div className="absolute right-[60px] top-[20%] w-[120px] h-[120px] rounded-full border-[20px] border-[#5C1A2E]/5 pointer-events-none"></div>

          <div className="relative z-10 max-w-lg">
            <span className="inline-block text-[#C8A97A] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Major Event
            </span>
            <h2 className="text-[#5C1A2E] text-3xl lg:text-4xl font-bold font-serif leading-tight mb-6">
              HOPES Conference 2026
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed mb-8">
              The Department of Economics, CHRIST (Deemed to be University), Bengaluru, inaugurated the Centre for Studies in Population and Development (CSPD) to foster interdisciplinary research on population and development issues. The ceremony was graced by Prof. Norbert Meiners, Prof. S. Irudaya Rajan, and Prof. Gita Sen.
            </p>
            <Link
              href="//hopes-conference"
              className="inline-flex items-center gap-2 bg-[#5C1A2E] hover:bg-[#3D111F] text-white font-bold text-xs uppercase tracking-widest py-3 px-7 transition-all duration-300"
            >
              Learn more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* TOP ROW RIGHT — Image */}
        <div className="relative min-h-[420px] overflow-hidden">
          <img
            src="https://cspdin.wordpress.com/wp-content/uploads/2025/03/lecture-series.webp"
            alt="CSPD Inauguration"
            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#5C1A2E]/30 to-transparent pointer-events-none"></div>
        </div>

        {/* BOTTOM ROW LEFT — Image */}
        <div className="relative min-h-[420px] overflow-hidden">
          <img
            src="https://cspdin.wordpress.com/wp-content/uploads/2025/03/nilgiris_visit.jpg"
            alt="Visit to Nilgiris District"
            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3D111F]/40 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-6 left-6 bg-[#C8A97A] text-[#5C1A2E] text-xs font-bold uppercase tracking-widest px-4 py-2">
            Sep 14–16, 2025
          </div>
        </div>

        {/* BOTTOM ROW RIGHT — Text block (Nilgiris Visit) */}
        <div className="relative bg-gray-50 p-12 lg:p-16 flex flex-col justify-center min-h-[420px] overflow-hidden border-l border-gray-100">
          <div className="absolute left-[-80px] bottom-[-40px] w-[300px] h-[300px] rounded-full border-[40px] border-[#5C1A2E]/5 pointer-events-none"></div>
          <div className="absolute left-[120px] top-[15%] w-[80px] h-[80px] rounded-full border-[15px] border-[#5C1A2E]/5 pointer-events-none"></div>

          <div className="relative z-10 max-w-lg">
            <span className="inline-block text-[#C8A97A] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              OutReach
            </span>
            <h2 className="text-[#5C1A2E] text-3xl lg:text-4xl font-bold font-serif leading-tight mb-6">
              Visit to Nilgiris <br />District, Tamil Nadu
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed mb-8">
              A small group of students and faculty visited the Kotagiri and Gudalur taluks in the Nilgiris District, Tamil Nadu. The visit was organised as part of the collaboration between CHRIST (Deemed to be University) and TDU on a Department of Science and Technology Project, Government of India. The students visited tribal enterprises, conducted focus group discussions with the Irula community and engaged in household visits to understand livelihoods concerns of the community.
            </p>
            <Link
              href="/activities"
              className="inline-flex items-center gap-2 border border-[#5C1A2E] hover:bg-[#5C1A2E] hover:text-white text-[#5C1A2E] font-bold text-xs uppercase tracking-widest py-3 px-7 transition-all duration-300"
            >
              Learn more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;