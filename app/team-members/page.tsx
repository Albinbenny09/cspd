import WordPressEmbedPage from "@/components/WordPressEmbedPage";

export default function Page() {
  return (
    <WordPressEmbedPage
      title="People"
      wordpressUrl="https://cspdin.wordpress.com/team-members/"
      headerCropPx={0}
    />
  );
}


