import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const themesLeft = [
  "Health Systems and New Challenges",
  "Ageing & Care",
  "Gender & Health",
  "Disability Studies",
  "Issues of Equity and Financial Protection",
  "Pharmaceuticals and Access to Drugs",
];

const themesRight = [
  "Sustainable Practices in Healthcare",
  "Digitization and AI in Healthcare",
  "Mainstreaming Indigenous Medicines",
  "Health and Migration — Patients and Workers",
  "Occupational Health and Safety",
];

export default function HopesConferencePage() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />

      <main
        className="pt-28 pb-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(74,15,28,0.9), rgba(43,7,16,0.86)), url('https://cspdin.wordpress.com/wp-content/uploads/2026/01/community_health_worker_gives_a_vaccination_in_odisha_state_india_8380317750.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <section className="container-custom">
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3 rounded-full border border-white/15 bg-[#2b0716]/85 px-4 py-3">
            <a href="#concept" className="text-sm text-white/90 hover:text-secondary">
              Concept Note
            </a>
            <a href="#venue" className="text-sm text-white/90 hover:text-secondary">
              Venue
            </a>
            <a href="#dates" className="text-sm text-white/90 hover:text-secondary">
              Important Dates
            </a>
            <a href="#themes" className="text-sm text-white/90 hover:text-secondary">
              Themes
            </a>
            <a href="#about" className="text-sm text-white/90 hover:text-secondary">
              Speakers
            </a>
            <a href="#submission" className="text-sm text-white/90 hover:text-secondary">
              Links
            </a>
          </div>
        </section>

        <section className="container-custom mt-10">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-black/35 px-6 py-12 text-center md:px-10">
            <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-6xl">
              Health: Organisation, Practice,
              <br />
              &amp; Emerging Strategies
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-white/90">
              International Conference &amp; Doctoral Colloquium
              <br />
              20-22 August 2026 | CHRIST (Deemed to be University), Bengaluru
            </p>
            <a
              href="#concept"
              className="mt-8 inline-block rounded-full bg-[#f6e9ec] px-7 py-3 text-base font-semibold text-[#4a0f1c] transition hover:opacity-90"
            >
              Know more ?
            </a>
          </div>
        </section>

        <section className="container-custom mt-10" id="concept">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#2b0716]/88 p-7 md:p-10">
            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">Concept Note</h2>
            <p className="mt-5 text-base leading-relaxed text-white/90">
              A three-day interdisciplinary academic conference bringing together scholars,
              policymakers, and practitioners to discuss global health systems, policy, ageing,
              equity, digitisation, pharmaceutical access, indigenous medicine, migration, and AI
              in healthcare delivery.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Through this three-day conference, we aim for a rigorous academic discourse on
              health-system challenges and the latest research in social sciences, bringing
              together field experts and early-career researchers.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              This is a platform for exchanging knowledge and communicating evidence-based ideas to
              address global health challenges. It aims to foster open discussions and
              interdisciplinary collaboration from economics, social sciences, public health, and
              contemporary policy.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Along with the conference, the doctoral colloquium will offer an opportunity for
              young researchers to present their work in detail, where they will get feedback from
              experts from the field. Interested scholars are invited to apply using the links
              below.
            </p>
          </div>
        </section>

        <section className="container-custom mt-8" id="venue">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#fff7f9] p-7 text-[#31131d] md:p-10">
            <h2 className="font-serif text-3xl font-bold text-[#4a0f1c] md:text-4xl">
              Conference Venue
            </h2>
            <p className="mt-4 text-base leading-relaxed">
              CHRIST (Deemed to be University), Bangalore Central Campus, Hosur Road, Bengaluru -
              560029, Karnataka, India.
            </p>
          </div>
        </section>

        <section className="container-custom mt-8" id="dates">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#2b0716]/88 p-7 md:p-10">
            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">Important Dates</h2>
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/15">
              <table className="w-full bg-white text-sm text-[#351825] md:text-base">
                <tbody>
                  <tr className="border-b border-[#f1d5df]">
                    <td className="px-4 py-3 font-medium">Conference Announcement</td>
                    <td className="px-4 py-3">February 20</td>
                  </tr>
                  <tr className="border-b border-[#f1d5df] bg-[#fdf1f4]">
                    <td className="px-4 py-3 font-medium">Extended Abstract Submission</td>
                    <td className="px-4 py-3">April 15</td>
                  </tr>
                  <tr className="border-b border-[#f1d5df]">
                    <td className="px-4 py-3 font-medium">Selection Intimation</td>
                    <td className="px-4 py-3">May 15</td>
                  </tr>
                  <tr className="border-b border-[#f1d5df] bg-[#fdf1f4]">
                    <td className="px-4 py-3 font-medium">Full Paper Submission</td>
                    <td className="px-4 py-3">June 30</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Conference</td>
                    <td className="px-4 py-3">August 20 - 22</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="container-custom mt-8" id="themes">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#fff7f9] p-7 text-[#31131d] md:p-10">
            <h2 className="font-serif text-3xl font-bold text-[#4a0f1c] md:text-4xl">
              Conference Themes
            </h2>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              <ul className="list-disc space-y-2 pl-5">
                {themesLeft.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul className="list-disc space-y-2 pl-5">
                {themesRight.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="container-custom mt-8" id="about">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#fff7f9] p-7 text-[#31131d] md:p-10">
            <h2 className="font-serif text-3xl font-bold text-[#4a0f1c] md:text-4xl">Speakers</h2>
            <p className="mt-4">To be updated soon.</p>
          </div>
        </section>

        <section className="container-custom mt-8" id="submission">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#fff7f9] p-7 text-[#31131d] md:p-10">
            <h2 className="font-serif text-3xl font-bold text-[#4a0f1c] md:text-4xl">
              Submission Links
            </h2>
            <p className="mt-4">Use the links below for submitting abstracts.</p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                className="font-semibold text-[#7a1f34] underline"
                href="https://forms.gle/TnB1pZHJm5fuhg1s8"
              >
                Individual Presenters
              </a>
              <a
                className="font-semibold text-[#7a1f34] underline"
                href="https://forms.gle/5JAu7o9MhR4JRR9R9"
              >
                Panel Session
              </a>
              <a
                className="font-semibold text-[#7a1f34] underline"
                href="https://forms.gle/oVSQXTYndWG34YvL9"
              >
                Doctoral Colloquium
              </a>
            </div>
          </div>
        </section>

        <section className="container-custom mt-8">
          <div className="mx-auto max-w-5xl rounded-2xl border border-white/15 bg-black/35 p-6 text-center">
            <a
              href="https://cspdin.wordpress.com/wp-content/uploads/2026/02/hopes-online-brochure-website.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="text-lg font-semibold text-secondary underline"
            >
              HOPES Online Brochure - Website
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
