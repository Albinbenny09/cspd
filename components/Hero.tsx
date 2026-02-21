"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const bannerImages = [
    "https://cspdin.wordpress.com/wp-content/uploads/2025/03/whatsapp-image-2025-06-19-at-10.50.34.jpeg",
    "https://cspdin.wordpress.com/wp-content/uploads/2025/09/screenshot-2025-09-17-at-23-16-20-5-activity-centre-for-studies-in-population-and-development-christ-deemed-to-be-university-linkedin.png",
    "https://cspdin.wordpress.com/wp-content/uploads/2025/03/dsc03079.jpg",
    "https://cspdin.wordpress.com/wp-content/uploads/2025/03/dsc03066.jpg",
    "https://cspdin.wordpress.com/wp-content/uploads/2025/03/dsc03095.jpg",
    "/HeroImg1.jpeg",
    "/HeroImg2.jpeg",
    "/HeroImg3.jpeg",
    "/HeroImg4.jpeg",
    "/HeroImg5.jpeg",
    "/HeroImg6.jpeg",
    "/HeroImg7.jpeg",
    "/HeroImg8.jpeg",
    "/HeroImg9.jpeg",
    "/HeroImg10.jpeg",
  ];

  const SLOT_COUNT = 5;
  const INTERVAL_MS = 4000;
  const FADE_MS = 800;

  const [slotIndices, setSlotIndices] = useState([0, 1, 2, 3, 4]);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      // Fade all out together
      setFading(true);

      // Swap all images, then fade back in
      setTimeout(() => {
        setSlotIndices((prev) =>
          prev.map((idx, slot) => (idx + SLOT_COUNT) % bannerImages.length)
        );
        setFading(false);
      }, FADE_MS);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  const gridSlots = [
    // col 1 top
    { slot: 0, className: "relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 h-48" },
    // col 1 bottom
    { slot: 2, className: "relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 h-64" },
    // col 2 top
    { slot: 1, className: "relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 h-64" },
    // col 2 bottom
    { slot: 3, className: "relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 h-48" },
    // floating fifth
    { slot: 4, className: "absolute -bottom-10 -left-10 w-44 h-44 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 z-30 transform -rotate-6 hover:rotate-0 transition-transform duration-500" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#5C1A2E]">
      {/* Clean Circle Bubbles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-white/10 bg-white/5"></div>
        <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full border border-white/10 bg-white/5"></div>
        <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] rounded-full border border-white/8 bg-white/[0.03]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full border border-white/8 bg-white/[0.04]"></div>
        <div className="absolute top-[40%] right-[30%] w-[200px] h-[200px] rounded-full border border-white/10 bg-white/[0.03]"></div>
        <div className="absolute top-[15%] right-[38%] w-[80px] h-[80px] rounded-full border border-[#C8A97A]/20 bg-[#C8A97A]/5"></div>
        <div className="absolute top-[60%] left-[8%] w-[60px] h-[60px] rounded-full border border-white/15 bg-white/5"></div>
        <div className="absolute bottom-[30%] left-[35%] w-[100px] h-[100px] rounded-full border border-white/10 bg-white/[0.03]"></div>
        <div className="absolute top-[25%] right-[5%] w-[50px] h-[50px] rounded-full border border-[#C8A97A]/25 bg-[#C8A97A]/8"></div>
        <div className="absolute bottom-[15%] right-[42%] w-[40px] h-[40px] rounded-full border border-white/20 bg-white/5"></div>
        <div className="absolute top-[5%] left-[45%] w-[30px] h-[30px] rounded-full bg-white/10"></div>
        <div className="absolute top-[50%] left-[50%] w-[500px] h-[500px] rounded-full bg-[#3D111F]/30 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <style jsx>{`
        .img-slot {
          transition: opacity 0.8s ease;
        }
        .img-slot.fading {
          opacity: 0;
        }
        .img-slot.visible {
          opacity: 1;
        }
      `}</style>

      <div className="container-custom relative z-10 pt-32 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-4xl space-y-8">
            <h1 className="text-3xl lg:text-4xl font-serif  font-bold leading-[1.1] text-white animate-in fade-in slide-in-from-bottom duration-700 delay-100">
              Centre for Studies in <br />
              Population and Development
            </h1>

            <p className="text-lg text-white/80 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              The Centre for Studies in Population and Development, hosted by the Department of Economics, CHRIST (Deemed to be University), strives to foster research expertise on themes related to population and development. The Centre envisions to be a leader in fostering interdisciplinary scholarship, with emphasis on economic, social and climate justice.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
              <Link
                href="https://cspdin.wordpress.com/about-us"
                className="bg-[#C8A97A] hover:bg-[#E8D5B4] text-[#5C1A2E] font-bold py-4 px-10 rounded-sm shadow-xl transition-all duration-300 text-sm uppercase tracking-widest text-center"
              >
                Take A Deep Dive
              </Link>
              <Link
                href="#research"
                className="border border-[#C8A97A]/40 hover:border-[#C8A97A] text-white font-bold py-4 px-10 rounded-sm transition-all duration-300 text-sm uppercase tracking-widest text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Dynamic Image Grid Banner */}
          <div className="relative animate-in fade-in slide-in-from-right duration-1000 hidden lg:block">
            <div className="grid grid-cols-2 gap-4 transform rotate-2 hover:rotate-0 transition-transform duration-700">
              {/* Column 1 */}
              <div className="space-y-4">
                {/* Slot 0 */}
                <div className={gridSlots[0].className}>
                  <div className={`img-slot w-full h-full ${fading ? "fading" : "visible"}`}>
                    <Image
                      src={bannerImages[slotIndices[0]]}
                      alt="Banner image"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* Slot 2 */}
                <div className={gridSlots[1].className}>
                  <div className={`img-slot w-full h-full ${fading ? "fading" : "visible"}`}>
                    <Image
                      src={bannerImages[slotIndices[2]]}
                      alt="Banner image"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-4 pt-8">
                {/* Slot 1 */}
                <div className={gridSlots[2].className}>
                  <div className={`img-slot w-full h-full ${fading ? "fading" : "visible"}`}>
                    <Image
                      src={bannerImages[slotIndices[1]]}
                      alt="Banner image"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* Slot 3 */}
                <div className={gridSlots[3].className}>
                  <div className={`img-slot w-full h-full ${fading ? "fading" : "visible"}`}>
                    <Image
                      src={bannerImages[slotIndices[3]]}
                      alt="Banner image"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating fifth image */}
            <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 z-30 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className={`img-slot w-full h-full ${fading ? "fading" : "visible"}`}>
                <Image
                  src={bannerImages[slotIndices[4]]}
                  alt="Banner image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="absolute bottom-0 left-0 w-full bg-[#3D111F]/50 backdrop-blur-sm border-t border-white/5 py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-[#C8A97A] text-3xl font-serif font-bold">5</div>
              <div className="text-white/50 text-[10px] uppercase tracking-widest mt-1">Research Labs</div>
            </div>
            <div className="text-center border-l border-white/10">
              <div className="text-[#C8A97A] text-3xl font-serif font-bold">11+</div>
              <div className="text-white/50 text-[10px] uppercase tracking-widest mt-1">Initiatives</div>
            </div>
            <div className="text-center border-l border-white/10">
              <div className="text-[#C8A97A] text-3xl font-serif font-bold">6</div>
              <div className="text-white/50 text-[10px] uppercase tracking-widests mt-1">Team Members</div>
            </div>
            <div className="text-center border-l border-white/10">
              <div className="text-[#C8A97A] text-3xl font-serif font-bold">2025</div>
              <div className="text-white/50 text-[10px] uppercase tracking-widest mt-1">Established</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;