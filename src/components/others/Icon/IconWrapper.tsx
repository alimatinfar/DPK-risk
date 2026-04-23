import type {ChildrenPropsType} from "../../../types/ChildrenPropsType.tsx";


type Props = {
  widthClass: string;
  children: ChildrenPropsType['children'];
}

function IconWrapper({widthClass, children}: Props) {
  return (
    <div className={`${widthClass} aspect-square overflow-hidden`}>
      {children}
    </div>
  )
}

export default IconWrapper