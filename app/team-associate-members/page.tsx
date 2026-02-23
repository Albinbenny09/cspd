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

const members: Member[] = [
  {
    name: "Md Juel Rana",
    designation: "Associate Professor",
    affiliation: "GB Pant Social Science Institute, Prayagraj",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/juel-rana.jpg",
  },
  {
    name: "Md Zakaria Siddiqui",
    designation: "Associate Professor",
    affiliation: "Jamia Millia Islamia, New Delhi",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/zakaria-siddiqui.png",
  },
  {
    name: "Ashish Singh",
    designation: "Associate Professor",
    affiliation: "Indian Institute of Technology, Bombay",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/ashish-singh.jpg",
  },
  {
    name: "Sheikh Fayaz Ahmad",
    designation: "Associate Professor",
    affiliation: "Zhejiang University, Zhejiang",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/fayaz-ahmad.png",
  },
  {
    name: "Johanna Vogel",
    designation: "Senior Researcher",
    affiliation: "German Institute of Development and Sustainability (IDOS), Bonn",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/johanna-vogel.jpg",
  },
  {
    name: "Vijesh V Krishna",
    designation: "Lead Economist",
    affiliation: "International Maize and Wheat Improvement Centre (CYMMIT), Hyderabad",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/vijesh-krishna.jpg",
  },
  {
    name: "Reji K Joseph",
    designation: "Associate Professor",
    affiliation: "Institute for Studies in Industrial Development (ISID), New Delhi",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/reji-joseph-1.jpg",
  },
  {
    name: "Wulf Reiners",
    designation: "Political Scientist",
    affiliation: "German Institute of Development and Sustainability (IDOS), Bonn",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/wulf-reiners.jpg",
  },
  {
    name: "Kiran Kumar Kakarlapudi",
    designation: "Assistant Professor",
    affiliation: "Gulati Institute of Finance and Taxation (GIFT), Thiruvananthapuram",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/kiran.jpg",
  },
  {
    name: "Naonori Kodate",
    designation: "Associate Professor",
    affiliation: "University College, Dublin",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/kodate-1.jpg",
  },
  {
    name: "Anant Kamath",
    designation: "Assistant Professor",
    affiliation: "National Institute of Advanced Studies (NIAS), Bangalore",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/anant.jpg",
  },
  {
    name: "Dhanya M B",
    designation: "Fellow",
    affiliation: "V V Giri National Labour Institute, New Delhi",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/06/dhanya.jpg",
  },
];

export default function TeamAssociateMembersPage() {
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
              Affiliate Members
            </h1>
            <p className="mt-6 text-white/75 text-lg leading-relaxed">
              Affiliate members contribute interdisciplinary and international
              expertise to strengthen CSPD&apos;s research collaborations and
              knowledge exchange.
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
                Members
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
