import {useBlocker} from "react-router";

function useCustomBlocker(shouldBeBlocked: boolean) {

  const blocker = useBlocker(shouldBeBlocked)

  return {
    pageIsBlocked: blocker.state === 'blocked',
    blocker,
  }
}

export default useCustomBlocker;
