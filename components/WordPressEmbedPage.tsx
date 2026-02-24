import Navbar from "@/components/Navbar";

type WordPressEmbedPageProps = {
  title: string;
  wordpressUrl: string;
  headerCropPx?: number;
};

export default function WordPressEmbedPage({
  title,
  wordpressUrl,
  headerCropPx = 190,
}: WordPressEmbedPageProps) {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />

      <main className="pt-24">
        <div className="h-[calc(100vh-6rem)] w-full overflow-hidden">
          <iframe
            title={title}
            src={wordpressUrl}
            className="w-full border-0"
            style={{
              height: `calc(100% + ${headerCropPx}px)`,
              marginTop: `-${headerCropPx}px`,
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </main>
    </div>
  );
}
