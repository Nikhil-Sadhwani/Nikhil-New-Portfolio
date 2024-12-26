'use client';

import { useEffect } from 'react';

export default function FocusManager() {
  useEffect(() => {
    // Remove any existing focus-visible classes
    document.documentElement.classList.remove('js-focus-visible');
    document.documentElement.removeAttribute('data-js-focus-visible');
  }, []);

  return null;
}
