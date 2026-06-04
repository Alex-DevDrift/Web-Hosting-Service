import './globals.css';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import PreloaderController from './components/PreloaderController';
import TemplateScripts from './components/TemplateScripts';

export const metadata = {
  title: 'Web Hosting',
  description: 'Web hosting service website upgraded to React.',
};

const stylesheets = [
  '/assets/css/bootstrap.min.css',
  '/assets/css/owl.carousel.min.css',
  '/assets/css/slicknav.css',
  '/assets/css/flaticon.css',
  '/assets/css/animate.min.css',
  '/assets/css/magnific-popup.css',
  '/assets/css/fontawesome-all.min.css',
  '/assets/css/themify-icons.css',
  '/assets/css/slick.css',
  '/assets/css/nice-select.css',
  '/assets/css/style.css',
];

export default function RootLayout({ children }) {
  return (
    <html lang="zxx">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.ico" />
        {stylesheets.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body suppressHydrationWarning>
        <Preloader />
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
        <PreloaderController />
        <TemplateScripts />
      </body>
    </html>
  );
}
