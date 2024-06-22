import { useEffect } from 'react';

// Custom hook
const useTouchStart = (handler: () => void) => {
  useEffect(() => {
    const handleTouchStart = (event: KeyboardEvent) => {
      if (event.repeat) {
        return;
      }
      if (event.type === 'touchstart') {
        handler();
      }
    };

    window.addEventListener('touchstart', handleTouchStart);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, [handler]);
};

export default useTouchStart;
