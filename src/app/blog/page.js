import StaticMarkup from '../components/StaticMarkup';
import { blogHtml } from '../content/pages';

export default function BlogPage() {
  return <StaticMarkup html={blogHtml} />;
}
