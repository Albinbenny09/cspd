import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const bannerImages = [
    "https://cspdin.wordpress.com/wp-content/uploads/2025/03/whatsapp-image-2025-06-19-at-10.50.34.jpeg",
    "https://cspdin.wordpress.com/wp-content/uploads/2025/09/screenshot-2025-09-17-at-23-16-20-5-activity-centre-for-studies-in-population-and-development-christ-deemed-to-be-university-linkedin.png",
    "https://cspdin.wordpress.com/wp-content/uploads/2025/03/dsc03079.jpg",
    "https://cspdin.wordpress.com/wp-content/uploads/2025/03/dsc03066.jpg",
    "https://cspdin.wordpress.com/wp-content/uploads/2025/03/dsc03095.jpg"
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Decorative Background Elements from Screenshot */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[80%] bg-burgundy-mid/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[5%] left-[-5%] w-[40%] h-[50%] bg-burgundy-soft/10 rounded-full blur-3xl"></div>
        {/* Subtle circular shape like in screenshot */}
        <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] border-[60px] border-white/5 rounded-full"></div>
      </div>

      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center relative z-10 py-24">
        <div className="flex flex-col space-y-8 animate-in slide-in-from-left duration-1000">
          
         

          <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-white drop-shadow-sm font-serif">
            Centre for Studies in <span >Population</span> and Development
          </h1>
         
           
          <div className="space-y-4">
            <p className="text-lg text-white/80 max-w-xl leading-relaxed">
             The Centre for Studies in Population and Development, hosted by the Department of Economics, CHRIST (Deemed to be University), strives to foster research expertise on themes related to population and development. The Centre envisions to be a leader in fostering interdisciplinary scholarship, with emphasis on economic, social and climate justice.
             </p>
            <p className="text-lg text-white/80 max-w-xl leading-relaxed">
              The Centre’s mission is to deal with the questions of rapid demographic shifts and development challenges through evidence-based research. Population growth and ageing coexist in parts of the world, with varying implications for policy making. While Global South predominantly faces issues related to rapid urbanization, youth employment, and social security. The Global North, on the other hand, is burdened with increased healthcare costs and shrinking workforce. Our objective is to engage in deeper interdisciplinary scholarship, with concerns on equity, social and climate justice. 
            </p>
            
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/about-us" className="bg-secondary hover:bg-sand-light text-primary font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group">
              <span>Take A Deep Dive</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </Link>
          </div>

         
        </div>

        {/* Dynamic Image Grid Banner */}
        <div className="relative animate-in slide-in-from-right duration-1000 hidden lg:block">
          <div className="grid grid-cols-2 gap-4 transform rotate-3 hover:rotate-0 transition-transform duration-700">
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white/10 h-48">
                <Image src={bannerImages[0]} alt="Banner 1" fill className="object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white/10 h-64">
                <Image src={bannerImages[2]} alt="Banner 3" fill className="object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white/10 h-64">
                <Image src={bannerImages[1]} alt="Banner 2" fill className="object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white/10 h-48">
                <Image src={bannerImages[3]} alt="Banner 4" fill className="object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>
          
          {/* Floating fifth image */}
          <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 z-30 transform -rotate-6 hover:rotate-0 transition-transform duration-500 translate-x-1/2">
             <Image src={bannerImages[4]} alt="Banner 5" fill className="object-cover" />
          </div>

          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
