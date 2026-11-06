import type {PropsWithChildren} from "react";

type Props = {
  title: string;
} & PropsWithChildren

function AdminRiskGroupReportLabelWithList(
  {title, children}: Props
) {
  return (
    <div className='flex flex-col gap-y-2'>
      <p className='text-secondary-text font-medium text-sm'>
        {title}
      </p>

      {children}
    </div>
  );
}

export default AdminRiskGroupReportLabelWithList;
