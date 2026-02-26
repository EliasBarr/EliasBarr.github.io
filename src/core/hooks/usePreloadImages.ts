import { useEffect } from 'react';

export function usePreloadImages(preloadFn: () => void): void {
  useEffect(() => {
    const handle = window.requestIdleCallback
      ? window.requestIdleCallback(preloadFn, { timeout: 2000 })
      : window.setTimeout(preloadFn, 300);

    return () => {
      if (typeof window.requestIdleCallback !== 'undefined') {
        window.cancelIdleCallback(handle as number);
      } else {
        window.clearTimeout(handle as number);
      }
    };
  }, [preloadFn]);
}
