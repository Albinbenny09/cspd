import WordPressEmbedPage from "@/components/WordPressEmbedPage";

export default function Page() {
  return (
    <WordPressEmbedPage
      title="Newsletter"
      wordpressUrl="https://cspdin.wordpress.com/resources-publications/"
      headerCropPx={190}
    />
  );
}



