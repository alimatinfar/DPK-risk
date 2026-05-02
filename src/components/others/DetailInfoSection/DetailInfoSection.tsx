import type {DetailInfoSectionProps} from "./DetailInfoSection.types.ts";
import {useMemo} from "react";

function DetailInfoSection(
  {title, infoList}: DetailInfoSectionProps
) {

  const rows = useMemo(function () {
    const list = [];
    let currentRow: DetailInfoSectionProps['infoList'] = [];
    let currentWidth = 0;

    infoList.forEach(item => {
      const size = item.column ?? 1;

      if (currentWidth + size > 5) {
        list.push(currentRow);
        currentRow = [];
        currentWidth = 0;
      }

      currentRow.push(item);
      currentWidth += size;
    });

    if (currentRow.length) list.push(currentRow);

    return list;
  }, [infoList])

  return (
    <div className='flex flex-col border border-gray-200 rounded-lg overflow-hidden'>
      <div className='flex items-center bg-gray-50 h-15 px-4'>
        <span className='font-medium'>
          {title}
        </span>
      </div>

      <div className='bg-white p-4'>
        {rows.map((row, rowsIndex) => (
          <div
            key={rowsIndex}
            className={`
              grid grid-cols-5
              ${rowsIndex === 0 ? '' : 'border-t border-gray-200  pt-3 mt-3'}
            `}
          >
            {row.map((item, rowItemIndex) => (
              <div
                key={rowItemIndex}
                className='flex flex-col gap-y-2 col-span-2'
                style={{ gridColumn: `span ${item.column} / span ${item.column}` }}
              >
                <span className="text-sm text-gray-500">
                  {item.label}
                </span>
                <span className="text-gray-900">
                  {item.value || '-'}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailInfoSection;