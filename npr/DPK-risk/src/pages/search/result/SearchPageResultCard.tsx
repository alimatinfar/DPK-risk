import type {SearchPageResultCardDataType} from "./SearchPageResult.types.ts";
import IconClickable from "../../../components/others/Icon/IconClickable.tsx";
import LinkIcon from "../../../components/svg/LinkIcon.tsx";
import {useMemo} from "react";
import {searchPageResultCardSeparatedFieldsNameLabel} from "./SearchPageResultCard.constances.ts";


type Props = {
  data: SearchPageResultCardDataType
}

function SearchPageResultCard(
  {data}: Props
) {

  const fields = useMemo(function () {
    return Object.values(searchPageResultCardSeparatedFieldsNameLabel[data.type]).map(item => ({
      label: item.label, value: (data as any)[item.name]
    }))
  }, [data])

  console.log({fields})

  return (
    <div className={`
      flex flex-col rounded-lg gap-y-2 bg-white shadow-base cursor-pointer
      hover:shadow-[0px_24px_48px_-12px_rgba(16,24,40,0.18)] duration-200
    `}>
      <div className='bg-[#ECEFF7] p-2 flex items-center justify-between'>
        <span className='font-medium'>
          {data.name}
        </span>

        <IconClickable>
          <LinkIcon/>
        </IconClickable>
      </div>

      <div className='flex flex-col gap-y-2 p-2'>
        {fields.map((field, index) => {
          return (
            <div
              key={index}
              className='flex items-center justify-between text-sm text-secondary-text'
            >
              <span>{field.label}</span>
              <span>{field.value}</span>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default SearchPageResultCard;