import {useEffect, useRef} from "react";

type Options = {
  enabled?: boolean,
}

/**
 * Runs `callback` again (throttled with requestAnimationFrame) whenever the page scrolls, any inner
 * scroll container moves, the window or the visual viewport is resized.
 *
 * `position: fixed` elements use viewport coordinates, so a panel that is anchored to a trigger with
 * fixed coordinates has to be re-measured on scroll, otherwise it stays where it was opened and
 * drifts away from its trigger.
 */
function useRecalculateOnViewportChange(callback: () => void, {enabled = true}: Options = {}) {

  const callbackRef = useRef<() => void>(callback)

  useEffect(() => {
    callbackRef.current = callback
  });

  useEffect(() => {
    if (!enabled) return

    let animationFrame = 0

    function scheduleRecalculate() {
      if (animationFrame) return

      animationFrame = requestAnimationFrame(() => {
        animationFrame = 0
        callbackRef.current()
      })
    }

    // `scroll` does not bubble, listening in the capture phase also catches every scroll container.
    window.addEventListener('scroll', scheduleRecalculate, {capture: true, passive: true})
    window.addEventListener('resize', scheduleRecalculate, {passive: true})

    const visualViewport = window.visualViewport
    visualViewport?.addEventListener('scroll', scheduleRecalculate, {passive: true})
    visualViewport?.addEventListener('resize', scheduleRecalculate, {passive: true})

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('scroll', scheduleRecalculate, {capture: true})
      window.removeEventListener('resize', scheduleRecalculate)
      visualViewport?.removeEventListener('scroll', scheduleRecalculate)
      visualViewport?.removeEventListener('resize', scheduleRecalculate)
    }
  }, [enabled])
}

export default useRecalculateOnViewportChange
