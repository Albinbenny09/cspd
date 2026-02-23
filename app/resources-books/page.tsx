import Image from "next/image";
import { BookOpenText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ResourcesBooksPage() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="container-custom">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-secondary/10 p-2 text-secondary">
                <BookOpenText className="h-5 w-5" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-serif">Books</h1>
            </div>

            <article className="mt-8 rounded-2xl border border-white/10 bg-[#3D111F]/60 p-6">
              <div className="grid gap-5 md:grid-cols-[110px,1fr] md:items-center">
                <div className="relative h-[150px] w-[100px] overflow-hidden rounded-md border border-white/10">
                  <Image
                    src="https://cspdin.wordpress.com/wp-content/uploads/2025/12/screenshot-2025-12-03-162338.png?w=100"
                    alt="CSR and Purchase Intent"
                    fill
                    className="object-cover object-top"
                    sizes="100px"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-bold font-serif">CSR and Purchase Intent</h2>
                  <p className="mt-1 text-white/70">Gerard Rassendren</p>
                  <a
                    href="https://astitvaprakashan.com/product/csr-and-purchase-intent/?srsltid=AfmBOooCmXVxAHCZBRUbjSzQxU38mMl-Sk2hoNJ3KSlRUnV3UUkkeUZF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex rounded-lg bg-secondary px-4 py-2 text-sm font-bold text-primary transition-opacity hover:opacity-90"
                  >
                    Details
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
