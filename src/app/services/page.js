import StaticMarkup from '../components/StaticMarkup';
import { servicesHtml } from '../content/pages';

export default function ServicesPage() {
  return <StaticMarkup html={servicesHtml} />;
}
