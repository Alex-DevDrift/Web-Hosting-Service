import Script from 'next/script';

const scripts = [
  '/assets/js/vendor/jquery-1.12.4.min.js',
  '/assets/js/popper.min.js',
  '/assets/js/bootstrap.min.js',
  '/assets/js/jquery.slicknav.min.js',
  '/assets/js/owl.carousel.min.js',
  '/assets/js/slick.min.js',
  '/assets/js/wow.min.js',
  '/assets/js/animated.headline.js',
  '/assets/js/jquery.magnific-popup.js',
  '/assets/js/jquery.nice-select.min.js',
  '/assets/js/jquery.sticky.js',
  '/assets/js/contact.js',
  '/assets/js/jquery.form.js',
  '/assets/js/jquery.validate.min.js',
  '/assets/js/mail-script.js',
  '/assets/js/jquery.ajaxchimp.min.js',
  '/assets/js/plugins.js',
  '/assets/js/main.js',
];

export default function TemplateScripts() {
  return (
    <>
      {scripts.map((src) => (
        <Script key={src} src={src} strategy="afterInteractive" />
      ))}
    </>
  );
}
