import {type MessageColor, type MessageProps} from "../MessageExports";
import {useMemo} from "react";

function useMessageStyles({color}: Pick<MessageProps, 'color'>) {

  const styles: Record<MessageColor, any> = {
    warning: {
      wrapper: 'border-yellow-400 bg-yellow-50',
      title: 'text-yellow-700',
      description: 'text-yellow-600',
    },
    error: {
      wrapper: 'border-red-400 bg-red-50',
      title: 'text-red-700',
      description: 'text-red-600',
    },
    success: {
      wrapper: 'border-green-400 bg-green-50',
      title: 'text-green-700',
      description: 'text-green-600',
    },
  }

  const currentStyle = useMemo(function () {
    return styles[color]
  }, [color])

  return {currentStyle}
}

export default useMessageStyles
