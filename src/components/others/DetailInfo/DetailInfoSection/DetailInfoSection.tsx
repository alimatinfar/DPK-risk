import type {DetailInfoSectionProps} from "./index.types.ts";
import {useMemo} from "react";
import CardWithHeader from "../../Card/CardWithHeader/CardWithHeader.tsx";
import DetailInfoSectionLabelValue from "./DetailInfoSectionLabelValue.tsx";

function DetailInfoSection(
  {title, infoList, customGridColsClass, customColumnsNumber}: DetailInfoSectionProps
) {

  const rows = useMemo(function () {
    const list = [];
    let currentRow: DetailInfoSectionProps['infoList'] = [];
    let currentWidth = 0;

    infoList.forEach(item => {
      const size = item.column ?? 1;

      if (currentWidth + size > (customColumnsNumber || 5)) {
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
  console.log({rows})
  return (
    <CardWithHeader
      title={title}
    >
      {rows.map((row, rowsIndex) => (
        <div
          key={rowsIndex}
          className={`
              grid ${customGridColsClass || 'grid-cols-5'} gap-4
              ${rowsIndex === 0 ? '' : 'border-t border-gray-200  pt-3 mt-3'}
            `}
        >
          {row.map((item, rowItemIndex) => (
            <DetailInfoSectionLabelValue
              key={rowItemIndex}
              style={{gridColumn: `span ${item.column} / span ${item.column}`}}
              className='col-span-2'
              label={item.label} value={item.value}
            />
          ))}
        </div>
      ))}
    </CardWithHeader>
  );
}

export default DetailInfoSection;
