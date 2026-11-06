import type {DetailInfoSection2Props} from "./index.types.ts";
import NoDataTag from "../../Tag/inheritedTags/noDataTag.tsx";


function DetailInfoSection2(
  {infoList}: DetailInfoSection2Props
) {
  return (
    <div className='flex w-full bg-[#E2E8ED] dark:bg-dark-6 px-5 py-4 rounded-lg'>
      {infoList.map((item, index) => (
        <div
          key={index}
          className={`
            flex flex-col justify-between gap-y-2 text-sm grow px-4
            ${index === 0 ? '' : 'border-r border-slate-300 dark:border-dark-4'}
          `}
        >
          <span className='text-slate-500 dark:text-custom-gray-3'>
            {item?.label}
          </span>
          <span className='text-slate-900 dark:text-custom-gray-2'>
            {/*{item?.value || <span className='text-sm text-orange-500'>فاقد اطلاعات</span>}*/}
            {item?.value || '-'}
          </span>
        </div>
      ))}
    </div>
  );
}

export default DetailInfoSection2;
