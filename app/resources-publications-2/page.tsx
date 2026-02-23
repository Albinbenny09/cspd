import Image from "next/image";
import Link from "next/link";
import { LibraryBig } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const publicationSections = [
  { name: "Books", href: "/resources-books" },
  { name: "Articles", href: "/resources-articles" },
  { name: "Policy Briefs", href: "/resources-policy-briefs" },
  { name: "Working Papers", href: "/resources-working-papers" },
  { name: "Student Blogs", href: "/resources-student-blogs" },
];

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-secondary">
                <LibraryBig className="h-4 w-4" />
                Resources
              </div>
              <h1 className="mt-6 text-4xl md:text-5xl font-bold font-serif leading-tight">Publications</h1>
              <p className="mt-5 text-lg text-white/75">Coming soon!</p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#3D111F]/60 p-2">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                <Image
                  src="https://cspdin.wordpress.com/wp-content/uploads/2025/03/advisors-1.webp"
                  alt="Publications"
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
            <h2 className="text-2xl md:text-3xl font-bold font-serif">Browse Publications</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {publicationSections.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-xl border border-white/10 bg-[#3D111F]/60 px-5 py-4 text-base font-semibold transition-colors hover:border-secondary/50 hover:text-secondary"
                >
                  {item.name}
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
