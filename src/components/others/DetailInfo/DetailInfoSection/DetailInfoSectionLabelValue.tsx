import NoDataTag from "../../Tag/inheritedTags/noDataTag.tsx";
import type {ReactNode} from "react";


export type DetailInfoSectionLabelValueProps = {
  style?: object;
  className?: string;
  label: string | ReactNode;
  value: any;
}

function DetailInfoSectionLabelValue(
  {style, className, label, value}: DetailInfoSectionLabelValueProps
) {
  return (
    <div
      className={`flex flex-col gap-y-2 ${className || ''}`}
      {...style && {style}}
    >
      <span className="text-sm text-slate-500 dark:text-custom-gray-3">
        {label}
      </span>
      <span className="text-slate-900 dark:text-custom-gray-2">
        {/*{value || <NoDataTag/>}*/}
        {value || '-'}
      </span>
    </div>
  );
}

export default DetailInfoSectionLabelValue;
