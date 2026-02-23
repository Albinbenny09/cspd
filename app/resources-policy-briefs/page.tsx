import { ScrollText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Brief = {
  title: string;
  author: string;
  href: string;
};

const briefs: Brief[] = [
  {
    title: "Online Fraud and Scams in India",
    author: "Tuhinsubhra Giri",
    href: "https://saferinternetlab.org/wp-content/uploads/2025/06/Research-Report-A4_Fraud-India.pdf",
  },
  {
    title:
      "Vulnerability, Social Resilience, and Adaptation Strategies against Climate Change: The Case of Traditional Fisherfolk in Kerala",
    author: "Aravindh Panikkaveettil",
    href: "https://iqac.cusat.ac.in/uploads/web/files/NKPDF_FTR_Draft_compressed.pdf",
  },
];

export default function ResourcesPolicyBriefsPage() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="container-custom">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-secondary/10 p-2 text-secondary">
                <ScrollText className="h-5 w-5" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-serif">Policy Briefs</h1>
            </div>

            <div className="mt-8 space-y-4">
              {briefs.map((brief) => (
                <article
                  key={brief.title}
                  className="rounded-2xl border border-white/10 bg-[#3D111F]/60 p-5"
                >
                  <h2 className="text-xl font-semibold">{brief.title}</h2>
                  <p className="mt-2 text-sm text-white/70">{brief.author}</p>
                  <a
                    href={brief.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex rounded-lg bg-secondary px-4 py-2 text-sm font-bold text-primary transition-opacity hover:opacity-90"
                  >
                    Details
                  </a>
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
