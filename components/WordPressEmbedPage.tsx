type WordPressEmbedPageProps = {
  title: string;
  wordpressUrl: string;
  headerCropPx?: number;
};

export default function WordPressEmbedPage({
  title,
  wordpressUrl,
  headerCropPx = 0,
}: WordPressEmbedPageProps) {
  return (
    <div className="h-screen w-full bg-white overflow-hidden">
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
  );
}
