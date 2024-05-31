import { useEffect } from 'react';

// Custom hook
const useKeyPress = (targetKey: string, handler: () => void) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === targetKey) {
        handler();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [targetKey, handler]);
};

export default useKeyPress;
