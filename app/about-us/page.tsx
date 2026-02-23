import WordPressEmbedPage from "@/components/WordPressEmbedPage";

export default function Page() {
  return (
    <WordPressEmbedPage
      title="About Us"
      wordpressUrl="https://cspdin.wordpress.com/about-us/"
      headerCropPx={0}
    />
  );
}


