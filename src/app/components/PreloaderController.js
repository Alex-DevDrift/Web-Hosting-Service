'use client';

import { useEffect } from 'react';

export default function PreloaderController() {
  useEffect(() => {
    const body = document.body;
    const preloader = document.getElementById('preloader-active');

    body.style.overflow = 'visible';

    if (!preloader) {
      return;
    }

    const timer = window.setTimeout(() => {
      preloader.style.transition = 'opacity 250ms ease';
      preloader.style.opacity = '0';

      window.setTimeout(() => {
        preloader.style.display = 'none';
      }, 250);
    }, 250);

    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
