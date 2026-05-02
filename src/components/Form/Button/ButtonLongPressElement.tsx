import type {LongPressIsPressing} from "./hooks/useButtonLongPress.ts";
import useButtonLongPressStyle from "./hooks/useButtonLongPressStyle.ts";
import type {ButtonProps} from "./ButtonTypes.ts";


type Props  = {
  isPressing: LongPressIsPressing;
} & Pick<ButtonProps, 'variant' | 'color' | 'longPressTime'>

function ButtonLongPressElement(
  {isPressing, variant, color, longPressTime}: Props
) {

  const {
    longPressElementBackgroundColor
  } = useButtonLongPressStyle({variant, color})

  return (
    <div
      className={`absolute inset-0 z-0 ${longPressElementBackgroundColor} ${isPressing ? 'w-full' : 'w-0'}`}
      style={{
        transitionDuration: `${longPressTime}ms`
      }}
    ></div>
  )
}

export default ButtonLongPressElement