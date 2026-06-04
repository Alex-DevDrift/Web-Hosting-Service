import StaticMarkup from './StaticMarkup';
import { navbarHtml } from '../content/shared';

export default function Navbar() {
  return <StaticMarkup html={navbarHtml} />;
}
