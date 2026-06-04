export default function StaticMarkup({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
