import type {ReactNode} from "react";
import OverContainerLoading from "./OverContainerLoading";
import {Suspense, useEffect, useState} from "react";
import useDisplayWithAnimation from "../DisplayWithAnimation/hooks/useDisplayWithAnimation";


function LoadingWithDelay() {

  const [show, setShow] = useState(false)

  const {showWithAnimation} = useDisplayWithAnimation({show})

  useEffect(() => {
    setShow(true)

    return () => setShow(false)
  }, []);

  return (
    <OverContainerLoading loading={showWithAnimation} overlayPage hasContainer/>
  )
}

type Props = {
  children: ReactNode
}

function SuspenseOverContainerLoading({children}: Props) {
  return (
    <Suspense fallback={<LoadingWithDelay />}>
      {children}
    </Suspense>
  );
}

export default SuspenseOverContainerLoading;