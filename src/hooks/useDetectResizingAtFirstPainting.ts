import {useEffect, useState} from "react";

export type Props = {
  elementRef: any;
  callback: () => void;
  deps?: any[];
}

function useDetectResizingAtFirstPainting({elementRef, callback, deps = []}: Props) {

  const [resized, setResized] = useState(false)

  useEffect(() => {
    if (!elementRef.current || resized) return

    const resize_ob = new ResizeObserver(function (entries) {
      if (resized) return
      callback();
      // setTimeout(() => setResized(true), 200)
      requestAnimationFrame(() => setResized(true))
    })

    const copyElement = elementRef.current.cloneNode(true)

    copyElement && resize_ob.observe(copyElement)

    return () => {
      copyElement && resize_ob.unobserve(copyElement)
    }
  }, [elementRef.current, resized, ...deps]);
}

export default useDetectResizingAtFirstPainting