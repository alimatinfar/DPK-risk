import type {DetailInfoSection2Props} from "./index.types.ts";


function DetailInfoSection2(
  {infoList}: DetailInfoSection2Props
) {
  return (
    <div className='flex w-full bg-[#E2E8ED] px-5 py-4 rounded-lg'>
      {infoList.map((item, index) => (
        <div
          key={index}
          className={`
            flex flex-col justify-between gap-y-2 text-sm grow px-4
            ${index === 0 ? '' : 'border-r border-gray-300'}
          `}
        >
          <span className='text-gray-500'>
            {item?.label}
          </span>
          <span className='text-gray-900'>
            {item?.value}
          </span>
        </div>
      ))}
    </div>
  );
}

export default DetailInfoSection2;
