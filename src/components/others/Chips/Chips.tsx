import joinObjectValues from "../../../utils/joinObjectValues";
import useChipsStyles, {type ChipsColorsType, type ChipsSizesType} from "./hooks/useChipsStyles";
import CrossIcon from "../../svg/CrossIcon";
import type { ReactNode } from "react";
import type { IconPropsType } from "../../svg/IconPropsType";

export type ChipsProps = {
  text: string;
  onClose?: (e: any) => void;
  color?: ChipsColorsType;
  size?: ChipsSizesType;
  className?: string;
  icon?: (iconProps: IconPropsType) => ReactNode;
};

export default function Chips(
  props: ChipsProps
) {

  const {
    text, onClose, color, className, size
  } = props

  const { badgeStyles } = useChipsStyles({ color, size, onClose });

  function onClickHandler(e:any) {
    e.stopPropagation()
    onClose && onClose(e)
  }

  return (
    <div
      className={`flex gap-2 justify-center items-center w-auto ${joinObjectValues(badgeStyles)} 
      ${className}`}
    >
      {props.icon && <props.icon textColor='text-gray-500' />}

      <span className='select-none'>
        {text}
      </span>

      {onClose && (
        <div
          className='p-1 cursor-pointer hover:bg-red-100 duration-200' onClick={onClickHandler}
        >
          <CrossIcon />
        </div>
      )}
    </div>
  );
}
