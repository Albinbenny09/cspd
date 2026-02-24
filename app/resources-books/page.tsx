import WordPressEmbedPage from "@/components/WordPressEmbedPage";

export default function Page() {
  return (
    <WordPressEmbedPage
      title="Books"
      wordpressUrl="https://cspdin.wordpress.com/resources-books/"
      headerCropPx={190}
    />
  );
}
