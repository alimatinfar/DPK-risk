import type {ChildrenAndClassNamePropsType} from "../../../types/ChildrenPropsType.tsx";


type Props = {
  title: string;
} & Pick<ChildrenAndClassNamePropsType, 'children'>

function WheelDateTimePickerSection(
  {title, children}: Props
) {
  return (
    <div className='flex flex-col gap-2'>
      <p className='font-medium border-b border-gray-300 pb-2 text-gray-500 text-center'>
        {title}
      </p>
      <div dir='ltr' className='flex gap-2'>
        {children}
      </div>
    </div>
  );
}

export default WheelDateTimePickerSection;