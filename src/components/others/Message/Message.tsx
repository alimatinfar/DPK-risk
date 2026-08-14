import React from "react";
import IconWrapper from "../Icon/IconWrapper";
import useMessageStyles from "./hooks/useMessageStyles";
import {type MessageProps} from "./MessageExports";


function Message(
  {color, title, titleIcon, description}: MessageProps
) {

  const {currentStyle} = useMessageStyles({color})

  return (
    <div className={`border rounded p-2 space-y-1.5 w-full ${currentStyle.wrapper}`}>
      {title && (
        <div className='flex items-center space-x-reverse space-x-2'>
          {titleIcon && (
            <IconWrapper widthClass='w-4'>
              {titleIcon}
            </IconWrapper>
          )}

          <p className={`font-medium text-sm ${currentStyle.title}`}>
            {title}
          </p>
        </div>
      )}

      {description && (
        <p className={`text-sm ${currentStyle.description}`}>
          {description || ''}
        </p>
      )}
    </div>
  )
}

export default Message
