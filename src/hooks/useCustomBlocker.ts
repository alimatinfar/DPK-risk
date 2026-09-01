import {useBlocker} from "react-router";

function useCustomBlocker(shouldBeBlocked: boolean) {

  const blocker = useBlocker(({ currentLocation, nextLocation }) => {
    if (currentLocation.pathname === nextLocation.pathname) {
      return false
    }

    return shouldBeBlocked;
  })

  return {
    pageIsBlocked: blocker.state === 'blocked',
    blocker,
  }
}

export default useCustomBlocker;
