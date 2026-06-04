import StaticMarkup from './StaticMarkup';
import { preloaderHtml } from '../content/shared';

export default function Preloader() {
  return <StaticMarkup html={preloaderHtml} />;
}
