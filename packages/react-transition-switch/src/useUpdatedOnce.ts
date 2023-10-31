import { useEffect, useRef } from 'react';

const useUpdatedOnce = <T>(value: T) => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return typeof ref.current === 'undefined';
};

export default useUpdatedOnce;
