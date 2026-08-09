import NoDataTag from "../../Tag/inheritedTags/noDataTag.tsx";
import type {ReactNode} from "react";


type Props = {
  style?: object;
  className?: string;
  label: string | ReactNode;
  value: string | ReactNode;
}

function DetailInfoSectionLabelValue(
  {style, className, label, value}: Props
) {
  return (
    <div
      className={`flex flex-col gap-y-2 ${className || ''}`}
      {...style && {style}}
    >
      <span className="text-sm text-gray-500">
        {label}
      </span>
      <span className="text-gray-900">
        {value || <NoDataTag/>}
      </span>
    </div>
  );
}

export default DetailInfoSectionLabelValue;
