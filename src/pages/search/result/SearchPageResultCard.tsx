import type {ResultPersonCardDataType} from "./ResultCard.types.ts";
import IconClickable from "../../../components/others/Icon/IconClickable.tsx";
import LinkIcon from "../../../components/svg/LinkIcon.tsx";
import useSearchPageResultCard from "./hooks/useSearchPageResultCard.ts";


export type SearchPageResultCardProps = {
  data: ResultPersonCardDataType
}

function SearchPageResultCard(
  {data}: SearchPageResultCardProps
) {

  const {
    fields, onCardClickHandler
  } = useSearchPageResultCard({
    data
  })

  return (
    <div
      className={`
        flex flex-col rounded-lg gap-y-2 bg-white shadow-base cursor-pointer overflow-hidden dark:bg-dark-1
        hover:shadow-[0px_24px_48px_-12px_rgba(16,24,40,0.18)] dark:hover:shadow-[0px_6px_12px_-3px_rgba(0,0,0,0.55)]
        duration-200 dark:border dark:border-dark-2
      `}
      onClick={onCardClickHandler}
    >
      <div className='bg-[#EEF3FD] dark:bg-dark-2 p-2 flex items-center justify-between'>
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
