import WordPressEmbedPage from "@/components/WordPressEmbedPage";

export default function Page() {
  return (
    <WordPressEmbedPage
      title="Working Papers"
      wordpressUrl="https://cspdin.wordpress.com/resources-working-papers/"
      headerCropPx={190}
    />
  );
}
