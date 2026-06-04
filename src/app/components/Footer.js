import StaticMarkup from './StaticMarkup';
import { footerHtml } from '../content/shared';

export default function Footer() {
  return <StaticMarkup html={footerHtml} />;
}
