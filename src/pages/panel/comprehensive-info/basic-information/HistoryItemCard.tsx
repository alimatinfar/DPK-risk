import Card from "../../../../components/others/Card/Card.tsx";
import Tag from "../../../../components/others/Tag/Tag.tsx";
import ArrowIcon from "../../../../components/svg/ArrowIcon.tsx";
import VectorIcon from "../../../../components/svg/VectorIcon.tsx";
import type {HistoryDataType} from "./index.constances.ts";

export type HistoryItemCardProps = {
  onItemClick: (item: HistoryDataType) => void;
  activeId: string;
  item: HistoryDataType;
}

function HistoryItemCard(
  {onItemClick, item, activeId}: HistoryItemCardProps
) {

  return (
    <div onClick={() => onItemClick(item)}>
      <div className={`
        border border-gray-200 rounded py-4 px-2
        flex items-center duration-200 cursor-pointer ${activeId === item.id ? "border-gray-300 bg-gray-100" : "bg-white hover:bg-gray-50"}
      `}>
        <div className="flex divide-x divide-gray-300 gap-3">
          <p className="pl-3 text-sm font-medium">
            {item.date}
          </p>
          <div className="text-gray-500 text-xs flex gap-1 items-center">
            <VectorIcon
              width={15}
              height={15}
            />
            <p>
              {item.location}
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          {
            item.isLasted &&
              <Tag text="بروزترین اطلاعات" color="green" variant="fade"/>
          }
          <ArrowIcon className="rotate-90"/>
        </div>
      </div>
    </div>

  );
}

export default HistoryItemCard;