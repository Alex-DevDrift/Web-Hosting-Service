import StaticMarkup from '../components/StaticMarkup';
import { blogDetailsHtml } from '../content/pages';

export default function BlogDetailsPage() {
  return <StaticMarkup html={blogDetailsHtml} />;
}
