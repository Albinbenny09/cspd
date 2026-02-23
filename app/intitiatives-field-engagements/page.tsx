import Image from "next/image";
import { Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Engagement = {
  title: string;
  date: string;
};

const engagements: Engagement[] = [
  {
    title:
      "Visit to the University of Trans-Disciplinary Health Sciences and Technology (TDU), Bangalore",
    date: "March 12, 2025",
  },
  {
    title: "Visit to the Foundation for Agrarian Studies (FAS), Bangalore",
    date: "March 13, 2025",
  },
];

export default function FieldEngagementsPage() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-secondary">
                <Compass className="h-4 w-4" />
                Community Connect
              </div>

              <h1 className="mt-6 text-4xl md:text-5xl font-bold font-serif leading-tight">
                Field Engagements
              </h1>

              <p className="mt-6 text-white/75 leading-relaxed">
                Our field engagements connect students and faculty with institutions and
                communities to build grounded understanding through direct interaction and
                collaborative learning.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#3D111F]/60 p-2">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                <Image
                  src="https://cspdin.wordpress.com/wp-content/uploads/2025/03/field-1.jpg"
                  alt="Field Engagements"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container-custom mt-14">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold font-serif">Engagements: 2024-25</h2>

            <div className="mt-6 space-y-4">
              {engagements.map((event) => (
                <article
                  key={event.title}
                  className="rounded-2xl border border-white/10 bg-[#3D111F]/50 p-5 md:p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                    {event.date}
                  </p>
                  <h3 className="mt-2 text-lg md:text-xl font-semibold text-white">{event.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
