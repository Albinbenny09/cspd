import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeftRight } from "lucide-react";

export default function InitiativesFacultyStudentExchangesPage() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-secondary">
                <ArrowLeftRight className="h-4 w-4" />
                Initiatives
              </div>
              <h1 className="mt-6 text-4xl md:text-5xl font-bold font-serif leading-tight">
                Faculty &amp; Student Exchanges
              </h1>
              <p className="mt-6 text-white/75 text-lg leading-relaxed">Coming soon!</p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#3D111F]/60 p-2">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black/30">
                <Image
                  src="https://cspdin.wordpress.com/wp-content/uploads/2025/03/exchange.webp"
                  alt="Faculty and Student Exchanges"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
