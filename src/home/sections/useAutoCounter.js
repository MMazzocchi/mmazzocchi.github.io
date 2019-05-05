import { useState, useEffect } from 'react';

// Custom hook that cycles returned value between 0 and n. Increments after the
// specified duration (ms) has passed.
const useAutoCounter = ({ n, duration }) => {
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count + 1) % n);
    }, duration);
  });

  return count;
};

export default useAutoCounter;
