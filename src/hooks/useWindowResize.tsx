import {useState, useEffect} from 'react';

const getIsClient = () => typeof window === 'object';

function getSize() {
  const isClient = getIsClient();

  return {
    height: isClient ? window.innerHeight : undefined,
    width: isClient ? window.innerWidth : undefined,
  };
}

export const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};
