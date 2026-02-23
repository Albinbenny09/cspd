import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarDays, BookOpenText, Wrench } from "lucide-react";

type EventItem = {
  title: string;
  date: string;
  details?: string;
};

const events202425: EventItem[] = [
  {
    title: "Workshop on Data Collection Techniques using Kobo Toolbox",
    date: "TBA",
    details: "Details coming soon",
  },
];

const events202526: EventItem[] = [
  {
    title: "Workshop on Data Analysis using R",
    date: "26 - 31 May 2025",
    details: "Details coming soon",
  },
];

function EventCard({ item }: { item: EventItem }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-[#3D111F]/65 p-5 transition-colors duration-300 hover:border-secondary/40">
      <h3 className="text-lg font-bold leading-snug text-white">{item.title}</h3>
      <p className="mt-3 inline-flex items-center gap-2 text-sm text-white/75">
        <CalendarDays className="h-4 w-4 text-secondary" />
        {item.date}
      </p>
      <p className="mt-4 text-sm text-white/65">{item.details}</p>
    </article>
  );
}

export default function InitiativesTrainingPage() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-secondary">
                <Wrench className="h-4 w-4" />
                Initiatives
              </div>
              <h1 className="mt-6 text-4xl md:text-5xl font-bold font-serif leading-tight">
                Trainings &amp; Workshops
              </h1>
              <p className="mt-6 text-white/75 text-lg leading-relaxed">
                The Centre organizes training and workshop sessions focusing on strengthening
                methodologies.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#3D111F]/60 p-2">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black/30">
                <Image
                  src="https://cspdin.wordpress.com/wp-content/uploads/2025/03/training.webp"
                  alt="Trainings and Workshops"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container-custom mt-14">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-xl bg-secondary/10 p-3 text-secondary">
                <BookOpenText className="h-6 w-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-serif">Events: 2024-25</h2>
            </div>
            <div className="grid gap-5">
              {events202425.map((event) => (
                <EventCard key={event.title} item={event} />
              ))}
            </div>
          </div>
        </section>

        <section className="container-custom mt-8">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold font-serif">Events: 2025-26</h2>
            <div className="mt-6 grid gap-5">
              {events202526.map((event) => (
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
