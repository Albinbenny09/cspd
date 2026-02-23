import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Landmark, Users } from "lucide-react";

type Member = {
  name: string;
  designation: string;
  affiliation: string;
  image: string;
};

const coreTeam: Member[] = [
  {
    name: "Joshy K J",
    designation: "Professor and Head of the Department",
    affiliation: "Department of Economics",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/joshy-1-1.jpg",
  },
  {
    name: "Harilal Madhavan",
    designation: "Director - CSPD",
    affiliation: "Associate Professor, Department of Economics",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/hari-1.jpg",
  },
  {
    name: "Divya Pradeep",
    designation: "Associate Professor",
    affiliation: "Department of Economics",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/divya-4.jpg",
  },
  {
    name: "Norbert Meiners",
    designation: "Distinguished Professor | Affiliate Fellow",
    affiliation: "Deutsche Hochschule Potsdam | Oxford Institute of Population Ageing",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/meiners.webp",
  },
  {
    name: "Maya M",
    designation: "Associate Professor",
    affiliation: "Department of Sociology",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2026/01/e1254-edited.jpg",
  },
  {
    name: "Subramanian S",
    designation: "Assistant Professor",
    affiliation: "Department of Economics",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/subramanian-1.jpg",
  },
  {
    name: "Jayesh M P",
    designation: "Assistant Professor",
    affiliation: "Department of Economics, Christ University Yeshwantpur Campus",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/06/jayesh.jpg",
  },
  {
    name: "Aneesh K A",
    designation: "Assistant Professor",
    affiliation: "Department of Economics, Christ University Delhi NCR Campus",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2026/01/1000139990-edited.jpg",
  },
  {
    name: "Viji B",
    designation: "Assistant Professor",
    affiliation: "Department of Economics, Christ University BGR Campus",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2026/01/e1906-edited.jpg",
  },
];

const associatedFaculty: Member[] = [
  {
    name: "Aiswarya Thomas",
    designation: "Assistant Professor",
    affiliation: "Department of Economics",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/aiswarya-1-1.jpg",
  },
  {
    name: "Anjali P K",
    designation: "Assistant Professor",
    affiliation: "Department of Economics",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/anjali-1.jpg",
  },
  {
    name: "Aravindh Panikkaveettil",
    designation: "Assistant Professor",
    affiliation: "Department of Economics",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/06/aravind-1-2.jpeg",
  },
  {
    name: "Ashmy Tom",
    designation: "Assistant Professor",
    affiliation: "Department of Economics",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/06/ashmy.jpeg",
  },
  {
    name: "Bibin Bose",
    designation: "Assistant Professor",
    affiliation: "Department of Economics",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2026/01/whatsapp-image-2026-01-28-at-14.23.38-edited.jpeg",
  },
  {
    name: "Deepa Palathingal",
    designation: "Assistant Professor",
    affiliation: "Department of Economics, Delhi NCR",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2026/01/30384-edited.jpg",
  },
  {
    name: "Deepa V K",
    designation: "Assistant Professor",
    affiliation: "Department of Economics",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/deepa-2.jpg",
  },
  {
    name: "Deepak Johnson K",
    designation: "Assistant Professor",
    affiliation: "Department of Economics",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/deepak.jpg",
  },
  {
    name: "Gerard Rassendren",
    designation: "Associate Professor",
    affiliation: "Department of Economics",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/gerard.jpg",
  },
  {
    name: "Isha Sharma",
    designation: "Assistant Professor",
    affiliation: "Department of Economics, Delhi NCR",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2026/02/isha.jpg",
  },
  {
    name: "Mahesh E",
    designation: "Associate Professor",
    affiliation: "Department of Economics",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/mahesh.jpg",
  },
  {
    name: "Manoj Morais",
    designation: "Assistant Professor",
    affiliation: "Department of Economics",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/manoj-1.jpg",
  },
  {
    name: "Namrata Singha Roy",
    designation: "Assistant Professor",
    affiliation: "Department of Economics",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/namrata.jpg",
  },
  {
    name: "Neeraj Kumar",
    designation: "Assistant Professor",
    affiliation: "Department of Economics",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/06/neeraj.jpeg",
  },
  {
    name: "Philip M P",
    designation: "Professor",
    affiliation: "Department of Economics",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/philip-1.jpg",
  },
  {
    name: "Rajeshwari U R",
    designation: "Associate Professor",
    affiliation: "Department of Economics",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/raji.jpg",
  },
  {
    name: "Sankar Varma K C",
    designation: "Assistant Professor",
    affiliation: "Department of Economics",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/sankar-1.jpg",
  },
  {
    name: "Sarathlal P S",
    designation: "Assistant Professor",
    affiliation: "Department of Economics",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/sarath-1.jpg",
  },
  {
    name: "Satyaki Dasgupta",
    designation: "Assistant Professor",
    affiliation: "Department of Economics",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/06/satyaki.jpeg",
  },
  {
    name: "Tuhinsubhra Giri",
    designation: "Assistant Professor",
    affiliation: "Department of Economics",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/tuhin-1.jpg",
  },
];

function PeopleGrid({ members }: { members: Member[] }) {
  return (
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

          <h3 className="mt-5 text-center text-xl font-bold text-white">{member.name}</h3>
          <p className="mt-2 text-center text-sm font-semibold uppercase tracking-wider text-secondary">
            {member.designation}
          </p>
          <p className="mt-3 text-center text-sm text-white/70">{member.affiliation}</p>
        </article>
      ))}
    </div>
  );
}

export default function TeamMembersPage() {
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
            <h1 className="mt-6 text-4xl md:text-5xl font-bold font-serif leading-tight">People</h1>
            <p className="mt-6 text-white/75 text-lg leading-relaxed">
              Meet the academic team leading CSPD&apos;s work across economics,
              sociology, and interdisciplinary population and development research.
            </p>
          </div>
        </section>

        <section className="container-custom mt-14 space-y-10">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-xl bg-secondary/10 p-3 text-secondary">
                <Users className="h-6 w-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-serif">Core Team</h2>
            </div>
            <PeopleGrid members={coreTeam} />
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <h2 className="mb-8 text-2xl md:text-3xl font-bold font-serif">Associated Faculty Members</h2>
            <PeopleGrid members={associatedFaculty} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
