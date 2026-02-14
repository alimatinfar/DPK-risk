import { useCallback, useEffect, useRef } from "react";

const useDebounce = (delay: number) => {
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const debounce = useCallback(
    <T extends (...args: unknown[]) => void>(callback: T) => {
      return ((...args: Parameters<T>) => {
        if (timeoutId.current) {
          clearTimeout(timeoutId.current);
        }

        timeoutId.current = setTimeout(() => {
          callback(...args);
        }, delay);
      }) as (...args: Parameters<T>) => void;
    },
    [delay]
  );

  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  return debounce;
};

export default useDebounce;