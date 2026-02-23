import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-secondary">Contact</h1>

              <div className="mt-8 space-y-5 text-white/80">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-secondary" />
                  <a href="mailto:cspd@christuniversity.in" className="hover:text-white">
                    cspd@christuniversity.in
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-secondary" />
                  <span>Available on request via email</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-secondary" />
                  <p>
                    Centre for Studies in Population and Development
                    <br />
                    Room 331, Block I, Christ University
                    <br />
                    Bangalore Central Campus
                    <br />
                    Bangalore - 560029
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <h2 className="text-2xl font-bold font-serif">Send a Message</h2>
              <form className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-white/15 bg-[#3D111F]/60 px-4 py-3 text-white placeholder:text-white/45 focus:border-secondary/50 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-xl border border-white/15 bg-[#3D111F]/60 px-4 py-3 text-white placeholder:text-white/45 focus:border-secondary/50 focus:outline-none"
                />
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full rounded-xl border border-white/15 bg-[#3D111F]/60 px-4 py-3 text-white placeholder:text-white/45 focus:border-secondary/50 focus:outline-none"
                />
                <button
                  type="button"
                  className="rounded-xl bg-secondary px-5 py-3 text-sm font-bold text-primary transition-opacity hover:opacity-90"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
