import { FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Article = {
  title: string;
  authors: string;
  href: string;
};

const articles: Article[] = [
  {
    title: "Legal Personality in the Metaverse: A Jurisprudential Examination",
    authors: "Karun Sanjaya, Rushil Chandra, Anushree S Panikkassery, Kavya Sanjaya, Soumya Srivastava",
    href: "https://www.igi-global.com/chapter/legal-personality-in-the-metaverse/375589",
  },
  {
    title: "Marital Arrangements and Women’s Autonomy: The Narratives of Tibetan Women in Exile",
    authors: "Ipsita Sarkar and Divya Pradeep",
    href: "https://doi.org/10.1177/09715215251323846",
  },
  {
    title: "Assessing the role and effectiveness of NGOs in enhancing elementary education in government primary schools in Karnataka: A SWOT analysis",
    authors: "Research Article",
    href: "https://journals.sagepub.com/doi/abs/10.1177/20427530251348595",
  },
  {
    title: "Diversification towards horticulture crops from Indian state of Karnataka - A panel regression approach",
    authors: "Research Article",
    href: "https://horizonepublishing.com/journals/index.php/PST/article/view/8856",
  },
];

export default function ResourcesArticlesPage() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="container-custom">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-secondary/10 p-2 text-secondary">
                <FileText className="h-5 w-5" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-serif">Articles</h1>
            </div>

            <div className="mt-8 space-y-4">
              {articles.map((article) => (
                <article
                  key={article.title}
                  className="rounded-2xl border border-white/10 bg-[#3D111F]/60 p-5"
                >
                  <h2 className="text-xl font-semibold">{article.title}</h2>
                  <p className="mt-2 text-sm text-white/70">{article.authors}</p>
                  <a
                    href={article.href}
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
