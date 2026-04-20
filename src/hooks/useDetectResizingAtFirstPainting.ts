import {useEffect, useState} from "react";

export type Props = {
  element: HTMLElement | undefined | null;
  callback: () => void;
}

function useDetectResizingAtFirstPainting({element, callback}: Props) {

  const [resized, setResized] = useState(false)

  useEffect(() => {
    if (!element) return

    const resize_ob = new ResizeObserver(function () {
      if (resized) return
      callback();
      // setTimeout(() => setResized(true), 100)
      requestAnimationFrame(() => setResized(true))
    })

    resize_ob.observe(element)

    return () => resize_ob.unobserve(element)
  }, [element, resized]);
}

export default useDetectResizingAtFirstPainting