import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface IframePageProps {
  src: string;
}

export default function IframePage({ src }: IframePageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-grow pt-20">
        <div className="w-full h-[calc(100vh-80px)]">
          <iframe
            src={src}
            className="w-full h-full border-0"
            title="External Content"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
