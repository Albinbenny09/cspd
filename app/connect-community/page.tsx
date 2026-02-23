import Image from "next/image";
import Link from "next/link";
import { Users2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type CommunityItem = {
  title: string;
  href: string;
  image: string;
};

const communityItems: CommunityItem[] = [
  {
    title: "NGO Connect",
    href: "/connect-ngo-connect",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/ngo-connect.webp",
  },
  {
    title: "Outreach Programmes",
    href: "/connect-outreach-programmes",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/outreach-1-1.webp",
  },
  {
    title: "Field Engagements",
    href: "/intitiatives-field-engagements",
    image: "https://cspdin.wordpress.com/wp-content/uploads/2025/03/field-1.jpg",
  },
];

export default function ConnectCommunityPage() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-secondary">
                <Users2 className="h-4 w-4" />
                Connect
              </div>

              <h1 className="mt-6 text-4xl md:text-5xl font-bold font-serif leading-tight">
                Community Connect
              </h1>

              <p className="mt-5 text-white/75 text-lg">Coming soon!</p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#3D111F]/60 p-2">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                <Image
                  src="https://cspdin.wordpress.com/wp-content/uploads/2025/03/outreach-1.webp"
                  alt="Community Connect"
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
            <h2 className="text-center text-2xl md:text-3xl font-bold font-serif">
              Going into the Community
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {communityItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-[#3D111F]/60 transition-colors duration-300 hover:border-secondary/50"
                >
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 360px"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-center text-xl font-semibold">{item.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
