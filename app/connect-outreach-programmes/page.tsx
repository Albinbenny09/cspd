import Image from "next/image";
import { Megaphone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type OutreachEvent = {
  title: string;
  date: string;
  description: string;
  image: string;
};

const outreachEvents: OutreachEvent[] = [
  {
    title: "Visit to Nilgiris District, Tamil Nadu",
    date: "September 14–16, 2025",
    description:
      "A small group of students and faculty visited the Kotagiri and Gudalur taluks in the Nilgiris District, Tamil Nadu. The visit was organised as part of the collaboration between CHRIST (Deemed to be University) and TDU on a Department of Science and Technology project, Government of India. The students visited tribal enterprises, conducted focus group discussions with the Irula community and engaged in household visits to understand livelihoods concerns of the community.",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/09/nilgiris_visit.jpg?w=1024",
  },
  {
    title: "Visit to Foundation for Agrarian Studies, Bangalore",
    date: "March 13, 2025",
    description:
      "A group of faculty members from the Department of Economics, CHRIST (Deemed to be University) visited the Foundation for Agrarian Studies (FAS) for an interactive session. The team included Dr. Deepa V. K., Dr. Divya Pradeep, Dr. Harilal Madhavan, Dr. Sankar Varma K.C., and Dr. Deepak Johnson. The FAS team provided an overview of the various research projects undertaken by the Foundation. This was followed by a meaningful exchange of ideas and discussions on key research themes.",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/09/visit_fas_2.jpg?w=1024",
  },
  {
    title: "Visit to Trans-Disciplinary University, Bangalore",
    date: "March 12, 2025",
    description:
      "A group of students from the Masters in Applied Economics programme and faculty members from the Department of Economics, CHRIST (Deemed to be University) visited the University of Trans-Disciplinary Health Sciences and Technology (TDU). The interaction focused on medicinal plants, community health systems, and integrative healthcare. The visit also explored possibilities for future research collaboration and an MoU.",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/09/visit_tdu.jpg?w=1024",
  },
];

export default function ConnectOutreachProgrammesPage() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-secondary">
                <Megaphone className="h-4 w-4" />
                Community Connect
              </div>

              <h1 className="mt-6 text-4xl md:text-5xl font-bold font-serif leading-tight">
                Outreach Programmes
              </h1>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#3D111F]/60 p-2">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                <Image
                  src="https://cspdin.wordpress.com/wp-content/uploads/2025/03/outreach-1-1.webp"
                  alt="Outreach Programmes"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container-custom mt-14 space-y-8">
          {outreachEvents.map((event) => (
            <article
              key={event.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[1.25fr,1fr] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                    {event.date}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold font-serif">{event.title}</h2>
                  <p className="mt-4 text-white/75 leading-relaxed">{event.description}</p>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-white/10">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 420px"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
