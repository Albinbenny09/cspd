import Image from "next/image";
import { Handshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ConnectNgoConnectPage() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="container-custom">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-secondary">
                  <Handshake className="h-4 w-4" />
                  Community Connect
                </div>
                <h1 className="mt-5 text-4xl md:text-5xl font-bold font-serif leading-tight">
                  NGO Connect
                </h1>
                <p className="mt-4 text-lg text-white/75">Coming soon!</p>
              </div>

              <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-[#3D111F]/60 p-2">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                  <Image
                    src="https://cspdin.wordpress.com/wp-content/uploads/2025/03/ngo-connect.webp"
                    alt="NGO Connect"
                    fill
                    className="object-cover object-center"
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
