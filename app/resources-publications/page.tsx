import Image from "next/image";
import { Newspaper } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="container-custom">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-secondary">
                  <Newspaper className="h-4 w-4" />
                  Resources
                </div>

                <h1 className="mt-5 text-4xl md:text-5xl font-bold font-serif">Newsletter</h1>

                <div className="mt-8 rounded-2xl border border-white/10 bg-[#3D111F]/60 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">2025</p>
                  <h2 className="mt-2 text-2xl font-bold font-serif">Inaugural Newsletter</h2>
                  <p className="mt-1 text-white/70">Vol. 1</p>
                  <a
                    href="https://cspdin.wordpress.com/wp-content/uploads/2026/02/newsletter-cspd-1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex rounded-lg bg-secondary px-5 py-3 text-sm font-bold text-primary transition-opacity hover:opacity-90"
                  >
                    Download PDF
                  </a>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-[#3D111F]/60 p-2">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                  <Image
                    src="https://cspdin.wordpress.com/wp-content/uploads/2026/02/picture1.png"
                    alt="Newsletter cover"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 90vw, 420px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
