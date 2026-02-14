import { useCallback, useRef } from "react";

const useThrottle = (duration: number) => {
  const lastCall = useRef<number>(0);

  const throttle = useCallback(
    <T extends (...args: unknown[]) => void>(callback: T) => {
      return ((...args: Parameters<T>) => {
        const now = Date.now();
        if (lastCall.current + duration < now) {
          lastCall.current = now;
          callback(...args);
        }
      }) as (...args: Parameters<T>) => void;
    },
    [duration]
  );

  return throttle;
};

export default useThrottle;