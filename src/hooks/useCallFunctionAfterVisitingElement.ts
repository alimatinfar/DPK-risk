import {useEffect, useRef} from "react";
import type {IntersectionObserverOptionsType} from "../types/IntersectionObserverOptionsType.ts";


function useCallFunctionAfterVisitingElement(callback:() => void, dependencies:any[], options: IntersectionObserverOptionsType = {}) {
  const elementRef = useRef<any>(null)

  useEffect(function () {
    if (!elementRef?.current) return

    const observer = new IntersectionObserver(entries => {
      const wasSeen = entries.every(item => item.isIntersecting)

      if (wasSeen) callback()
    }, {threshold: 0.5, ...options})

    observer.observe(elementRef.current)

    return () => {
      if (!elementRef.current) return
      observer.unobserve(elementRef.current)
    }
  }, dependencies)

  return elementRef
}

export default useCallFunctionAfterVisitingElement;