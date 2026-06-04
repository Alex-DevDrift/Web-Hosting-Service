import StaticMarkup from './components/StaticMarkup';
import { homeHtml } from './content/pages';

export default function HomePage() {
  return <StaticMarkup html={homeHtml} />;
}
