import type {DetailInfoSectionProps} from "./DetailInfoSection.types.ts";
import {useMemo} from "react";

function DetailInfoSection(
  {title}: DetailInfoSectionProps
) {

  const rows = useMemo(function () {
    const list = [];
    let currentRow = [];
    let currentWidth = 0;

    items.forEach(item => {
      const size = item.column ?? 1;

      // اگر جا نشه → ردیف جدید
      if (currentWidth + size > 5) {
        list.push(currentRow);
        currentRow = [];
        currentWidth = 0;
      }

      currentRow.push(item);
      currentWidth += size;
    });

    // آخرین ردیف
    if (currentRow.length) list.push(currentRow);

    return list;
  }, [])

  return (
    <div className='flex flex-col border border-gray-200 rounded-lg'>
      <div className='bg-gray-50 h-60 px-4'>
        <span className='font-medium'>
          {title}
        </span>
      </div>

      <div className='bg-white p-4 grid grid-cols-5'>

      </div>
    </div>
  );
}

export default DetailInfoSection;