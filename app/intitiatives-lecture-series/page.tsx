"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight, MapPin, Mic } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type EventItem = {
  title: string;
  date: string;
  location: string;
  href: string;
};

const slides = [
  "https://cspdin.wordpress.com/wp-content/uploads/2025/09/screenshot-2025-09-17-at-08-51-58-21-activity-centre-for-studies-in-population-and-development-christ-deemed-to-be-university-linkedin-1.png",
  "https://cspdin.wordpress.com/wp-content/uploads/2025/09/screenshot-2025-09-17-at-08-51-36-21-activity-centre-for-studies-in-population-and-development-christ-deemed-to-be-university-linkedin-1.png",
  "https://cspdin.wordpress.com/wp-content/uploads/2025/09/screenshot-2025-09-17-at-08-50-37-21-activity-centre-for-studies-in-population-and-development-christ-deemed-to-be-university-linkedin.png",
  "https://cspdin.wordpress.com/wp-content/uploads/2025/09/screenshot-2025-09-17-at-08-49-19-21-activity-centre-for-studies-in-population-and-development-christ-deemed-to-be-university-linkedin.png",
];

const events202526: EventItem[] = [
  {
    title: "Ethical Integration of Robots and Welfare Technologies in Global Care Systems by Prof. Dr. Naonori Kodate",
    date: "August 11, 2025",
    location: "Christ University, Bangalore",
    href: "https://cspd.in/?page_id=1024",
  },
  {
    title: "On Machine Ages: Causes, Forms, and Effects of Technological Change by Prof. Heinz Kurz",
    date: "July 16, 2025",
    location: "Christ University, Bangalore",
    href: "https://cspd.in/?page_id=1041",
  },
  {
    title: "Talk on \"Food, Nutrition, and Rural Livelihoods.\" by Prof. Madhura Swaminathan",
    date: "July 10, 2025",
    location: "Christ University, Bangalore",
    href: "https://cspd.in/lecture-3",
  },
  {
    title: "Talk on \"A Catalogue and a Warning: The Great Nicobar Betrayal\" by Dr Pankaj Sekhsaria",
    date: "June 18, 2025",
    location: "Christ University, Bangalore",
    href: "https://cspd.in/lecture-2-pankaj-sekhsaria/",
  },
];

const events202425: EventItem[] = [
  {
    title: "Talk on \"The Political Economy of Agrarian Change and Circular Migration in India\" by Dr Deepak Mishra",
    date: "March 10, 2025",
    location: "Christ University, Bangalore",
    href: "https://cspd.in/lecture-1-deepak-mishra/",
  },
];

function EventCard({ item }: { item: EventItem }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-[#3D111F]/65 p-5 transition-colors duration-300 hover:border-secondary/40">
      <h3 className="text-lg font-bold leading-snug text-white">{item.title}</h3>
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/75">
        <div className="inline-flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-secondary" />
          {item.date}
        </div>
        <div className="inline-flex items-center gap-2">
          <MapPin className="h-4 w-4 text-secondary" />
          {item.location}
        </div>
      </div>
      <a
        href={item.href}
        className="mt-5 inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
      >
        View Details
      </a>
    </article>
  );
}

export default function InitiativesLectureSeriesPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-secondary">
                <Mic className="h-4 w-4" />
                Initiatives
              </div>
              <h1 className="mt-6 text-4xl md:text-5xl font-bold font-serif leading-tight">
                Seminars &amp; Centre Talk Series
              </h1>
              <p className="mt-6 text-white/75 text-lg leading-relaxed">
                The Centre routinely conducts the Centre Talk Series (CTS) programme as an
                in-person lecture series for students in the University.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#3D111F]/60 p-4">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                <div className="relative aspect-[482/682] w-full">
                  <Image
                    src={slides[current]}
                    alt={`Centre Talk Series event image ${current + 1}`}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 1024px) 100vw, 520px"
                    priority
                  />
                </div>

                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-black/40 p-2 text-white transition hover:bg-black/60"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-black/40 p-2 text-white transition hover:bg-black/60"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-4 flex justify-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      idx === current ? "w-7 bg-secondary" : "w-2.5 bg-white/35 hover:bg-white/55"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container-custom mt-14">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-white">Events: 2025-26</h2>
            <div className="mt-6 grid gap-5">
              {events202526.map((event) => (
                <EventCard key={event.title} item={event} />
              ))}
            </div>
          </div>
        </section>

        <section className="container-custom mt-8">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-white">Events: 2024-25</h2>
            <div className="mt-6 grid gap-5">
              {events202425.map((event) => (
                <EventCard key={event.title} item={event} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
