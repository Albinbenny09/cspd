import { Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InternshipsPage() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="container-custom">
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-secondary">
              <Briefcase className="h-4 w-4" />
              Careers
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold font-serif">Internships</h1>
            <p className="mt-5 text-lg text-white/75">Coming soon!</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
