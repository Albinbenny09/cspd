import WordPressEmbedPage from "@/components/WordPressEmbedPage";

export default function Page() {
  return (
    <WordPressEmbedPage
      title="Policy Briefs"
      wordpressUrl="https://cspdin.wordpress.com/resources-policy-briefs/"
      headerCropPx={190}
    />
  );
}
