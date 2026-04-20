import {type ReactNode, useEffect, useRef, useState} from "react";
import useDisplayWithAnimation from "./hooks/useDisplayWithAnimation";
import type {RefObject} from "react";


export type DisplayWithAnimationProps = {
  show: boolean;
  children: ReactNode;
  animationClass?: string;
  className?: string;
  wrapperRef?: RefObject<HTMLDivElement>;
  originClass?: string;
  durationClass?: string;
  classWhenShow?: string;
  expandMode?: boolean;
}

function DisplayWithAnimation(
  {
    show, children, animationClass, className, wrapperRef, originClass, durationClass, classWhenShow, expandMode
  }: DisplayWithAnimationProps
) {
  const {showWithAnimation, shouldBeRemoved} = useDisplayWithAnimation({show})
  const expandRef = useRef<HTMLDivElement>(null);
  const [expandWrapperHeight, setExpandWrapperHeight] = useState(0);
  const [finalShouldBeRemoved, setFinalShouldBeRemoved] = useState(show ? false : !expandMode);
  const [firstDetectionIsDone, setFirstDetectionIsDone] = useState(false);

  useEffect(() => {
    let timeout:any;
    if (expandMode && !show && !firstDetectionIsDone) {
      timeout = setTimeout(function () {
        setFirstDetectionIsDone(true)
        setFinalShouldBeRemoved(shouldBeRemoved)
      }, 500)
    } else {
      setFirstDetectionIsDone(true);
    }

    return () => timeout && clearTimeout(timeout)
  }, [show]);

  useEffect(() => {
    setFinalShouldBeRemoved(shouldBeRemoved)
  }, [shouldBeRemoved]);

  useEffect(() => {
    const contentHeight = expandRef.current?.clientHeight
    if (!contentHeight) return
    setExpandWrapperHeight(contentHeight)
  }, [show]);

  return !finalShouldBeRemoved ? expandMode ? (
    <div
      {...wrapperRef && {ref: wrapperRef}}
      className='overflow-hidden'>
      <div
        ref={expandRef}
        style={{marginTop: showWithAnimation ? 0 : -(expandWrapperHeight ? expandWrapperHeight : 10000)}}
        className={`duration-200`}>
        {children}
      </div>
    </div>
  ) : (
    <div
      {...wrapperRef && {ref: wrapperRef}}
      className={`${showWithAnimation ? (classWhenShow || '') : `pointer-events-none ${animationClass || 'scale-95 opacity-0'}`}
       ${durationClass || 'duration-100'} ${originClass} ${className || ''}`}>
      {children}
    </div>
  ) : null
}

export default DisplayWithAnimation