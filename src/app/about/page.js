import StaticMarkup from '../components/StaticMarkup';
import { aboutHtml } from '../content/pages';

export default function AboutPage() {
  return <StaticMarkup html={aboutHtml} />;
}
