import useInnerWidth from "./useInnerWidth";
import {useMemo} from "react";

function useWidthLargerThan() {
  const width = useInnerWidth()

  return useMemo(function () {
    return {
      '2XS': width >= 425,
      'XS': width >= 550,
      'SM': width >= 640,
      'MD': width >= 768,
      'LG': width >= 1024,
      'XL': width >= 1280,
      '2XL': width >= 1536,
    }
  }, [width])
}

export default useWidthLargerThan;