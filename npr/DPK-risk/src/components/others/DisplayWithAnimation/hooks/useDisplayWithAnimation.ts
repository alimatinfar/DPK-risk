import {useEffect, useState} from "react";
import type {DisplayWithAnimationProps} from "../DisplayWithAnimation";


export type UseDisplayWithAnimationProps = {
  removedAfterThisTime?: number;
  showDelayTime?: number;
} & Pick<DisplayWithAnimationProps, 'show'>

function useDisplayWithAnimation(
  {show, removedAfterThisTime, showDelayTime}: UseDisplayWithAnimationProps
) {

  const [shouldBeRemoved, setShouldBeRemoved] = useState(!show)
  const [showWithAnimation, setShowWithAnimation] = useState(show)

  useEffect(() => {

    // @ts-ignore
    let timeout: NodeJS.Timeout;

    if (show) {
      setShouldBeRemoved(false)
      timeout = setTimeout(function () {
        setShowWithAnimation(true)
      }, (showDelayTime || 50))
    } else {
      setShowWithAnimation(false)
      timeout = setTimeout(function () {
        setShouldBeRemoved(true)
      }, removedAfterThisTime || 800)
    }

    return () => clearTimeout(timeout)
  }, [show]);

  return {shouldBeRemoved, showWithAnimation}
}

export default useDisplayWithAnimation