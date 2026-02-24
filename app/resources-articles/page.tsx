import WordPressEmbedPage from "@/components/WordPressEmbedPage";

export default function Page() {
  return (
    <WordPressEmbedPage
      title="Articles"
      wordpressUrl="https://cspdin.wordpress.com/resources-articles/"
      headerCropPx={190}
    />
  );
}
