import WordPressEmbedPage from "@/components/WordPressEmbedPage";

export default function Page() {
  return (
    <WordPressEmbedPage
      title="Student Blogs"
      wordpressUrl="https://cspdin.wordpress.com/resources-student-blogs/"
      headerCropPx={190}
    />
  );
}
