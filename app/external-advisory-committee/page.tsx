import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Landmark, Users } from "lucide-react";

type CommitteeMember = {
  name: string;
  designation: string;
  affiliation: string;
  image: string;
};

const members: CommitteeMember[] = [
  {
    name: "S Irudaya Rajan",
    designation: "Founder Chair",
    affiliation: "International Institute of Migration and Development, Thiruvananthapuram",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/irudaya-rajan.png",
  },
  {
    name: "Madhura Swaminathan",
    designation: "Professor",
    affiliation: "Indian Statistical Institute, Bangalore",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/madhura-swaminathan.jpg",
  },
  {
    name: "Unnikrishnan P",
    designation: "Professor",
    affiliation: "University of Trans-Disciplinary Health Sciences and Technology (TDU), Bangalore",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/unnikrishnan-payyappallimana.jpg",
  },
  {
    name: "Saradindu Bhaduri",
    designation: "Associate Professor",
    affiliation: "Jawaharlal Nehru University, New Delhi",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/foto-saradindu-edited-1.jpg",
  },
  {
    name: "Santosh Kumar Mehrotra",
    designation: "Professor",
    affiliation: "Jawaharlal Nehru University, New Delhi",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/santosh-mehrotra.jpg",
  },
  {
    name: "Jean Paul Guadilliere",
    designation: "Director of Studies",
    affiliation: "French National Centre for Scientific Research (CNRS), Paris",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/guadilliere.webp",
  },
  {
    name: "Sven Grimm",
    designation: "Political Scientist",
    affiliation: "German Institute of Development and Sustainability (IDOS), Bonn",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/sven-grimm.jpg",
  },
];

export default function ExternalAdvisoryCommitteePage() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-secondary">
              <Landmark className="h-4 w-4" />
              Team
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold font-serif leading-tight">
              External Advisory Committee
            </h1>
            <p className="mt-6 text-white/75 text-lg leading-relaxed">
              The External Advisory Committee brings national and international
              expertise to strengthen CSPD&apos;s interdisciplinary research
              direction and institutional outreach.
            </p>
          </div>
        </section>

        <section className="container-custom mt-14">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-xl bg-secondary/10 p-3 text-secondary">
                <Users className="h-6 w-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-serif">
                Committee Members
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {members.map((member) => (
                <article
                  key={member.name}
                  className="rounded-2xl border border-white/10 bg-[#3D111F]/60 p-5 transition-colors duration-300 hover:border-secondary/40"
                >
                  <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-2xl border border-white/10">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 70vw, 224px"
                    />
                  </div>

                  <h3 className="mt-5 text-center text-xl font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-center text-sm font-semibold uppercase tracking-wider text-secondary">
                    {member.designation}
                  </p>
                  <p className="mt-3 text-center text-sm text-white/70">
                    {member.affiliation}
                  </p>
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
