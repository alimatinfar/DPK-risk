import Card from "../../../../components/others/Card/Card.tsx";
import Tag from "../../../../components/others/Tag/Tag.tsx";
import ArrowIcon from "../../../../components/svg/ArrowIcon.tsx";
import VectorIcon from "../../../../components/svg/VectorIcon.tsx";
import type { HistoryDataType } from "./index.constances.ts";

export type HistoryItemCardProps = {
    onItemClick: (item: HistoryDataType) => void;
    activeId: string;
    item: HistoryDataType;
}
function HistoryItemCard(
    { onItemClick, item, activeId }: HistoryItemCardProps
) {

    return (
        <div onClick={() => onItemClick(item)}>
            <Card className={`flex items-center hover:bg-gray-200 ${activeId === item.id ? "border-gray-500" : ""}`}>
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
                <div className="flex flex-1 justify-end">
                    {
                        item.isLasted &&
                        <Tag text="بروزترین اطلاعات" color="green" variant="fade" />
                    }
                    <ArrowIcon className="rotate-90" />
                </div>
            </Card>
        </div>

    );
}

export default HistoryItemCard;