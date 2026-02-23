import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FlaskConical, Users, BookOpen, FolderKanban } from "lucide-react";

type Researcher = {
  name: string;
  designation: string;
  affiliation: string;
  image: string;
};

const researchers: Researcher[] = [
  {
    name: "Norbert Meiners",
    designation: "Distinguished Professor",
    affiliation: "Deutsche Hochschule Potsdam",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/meiners.webp",
  },
  {
    name: "Joshy K J",
    designation: "Professor",
    affiliation: "Department of Economics",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/joshy-1-1.jpg",
  },
  {
    name: "S Subramanian",
    designation: "Assistant Professor",
    affiliation: "Department of Economics",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/subramanian-1.jpg",
  },
  {
    name: "Aneesh K A",
    designation: "Assistant Professor",
    affiliation: "Department of Economics (Delhi NCR)",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2026/01/1000139990-2.jpg",
  },
  {
    name: "Maya M",
    designation: "Associate Professor",
    affiliation: "Department of Sociology",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2026/01/e1254-edited.jpg",
  },
  {
    name: "Viji B",
    designation: "Assistant Professor",
    affiliation: "Department of Economics (BGR)",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2026/01/e1906-edited.jpg",
  },
];

export default function ResearchPopulationDynamicsPage() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-secondary">
                <FlaskConical className="h-4 w-4" />
                Research Lab
              </div>

              <h1 className="mt-6 text-4xl md:text-5xl font-bold font-serif leading-tight">
                Population Dynamics &amp; Ageing
              </h1>

              <p className="mt-6 text-white/75 text-lg leading-relaxed">
                Examination of population trends, fertility patterns, and family
                structures across diverse communities within the contexts of
                developing and advanced economies.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#3D111F]/60 p-2">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black/30">
                <Image
                  src="https://cspdin.wordpress.com/wp-content/uploads/2026/01/dsc3299-01-edited.jpeg"
                  alt="Population Dynamics and Ageing"
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
                <Users className="h-6 w-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-serif">Researchers</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {researchers.map((researcher) => (
                <article
                  key={researcher.name}
                  className="rounded-2xl border border-white/10 bg-[#3D111F]/60 p-5 transition-colors duration-300 hover:border-secondary/40"
                >
                  <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-2xl border border-white/10">
                    <Image
                      src={researcher.image}
                      alt={researcher.name}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 768px) 60vw, 176px"
                    />
                  </div>

                  <h3 className="mt-3 text-center text-base font-bold text-white">{researcher.name}</h3>
                  <p className="mt-1 text-center text-[11px] font-semibold uppercase tracking-wider text-secondary">
                    {researcher.designation}
                  </p>
                  <p className="mt-2 text-center text-xs text-white/70">{researcher.affiliation}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container-custom mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-3 flex items-center gap-2 text-secondary">
              <BookOpen className="h-5 w-5" />
              <h3 className="text-xl font-bold font-serif">Publications</h3>
            </div>
            <p className="text-white/70 text-sm">Publication updates for this lab will be listed here.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-3 flex items-center gap-2 text-secondary">
              <FolderKanban className="h-5 w-5" />
              <h3 className="text-xl font-bold font-serif">Projects</h3>
            </div>
            <p className="text-white/70 text-sm">Active and upcoming projects for this lab will be listed here.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

