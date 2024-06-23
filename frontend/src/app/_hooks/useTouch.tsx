import { useEffect } from 'react';

// Custom hook
const useTouch = (target: string, handler: () => void) => {
  useEffect(() => {
    const handleTouch = (event: KeyboardEvent) => {
      if (event.repeat) {
        return;
      }
      if (event.type === target) {
        handler();
      }
    };

    window.addEventListener(target, handleTouch);

    return () => {
      window.removeEventListener(target, handleTouch);
    };
  }, [handler, target]);
};

export default useTouch;
