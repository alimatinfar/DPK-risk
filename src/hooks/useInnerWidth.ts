import {useEffect, useState} from "react";

export default function useInnerWidth() {
  const [width, setWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const listener = () => setWidth(window.innerWidth)
    window.addEventListener('resize', listener)

    return () => {
      window.removeEventListener('resize', listener)
    }
  }, []);

  return width;
}