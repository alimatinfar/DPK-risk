import Button from "../../../../components/Form/Button/Button";
import Tag from "../../../../components/others/Tag/Tag";
import CalendarIcon from "../../../../components/svg/CalendarIcon";
import ClockBackwardIcon from "../../../../components/svg/ClockBackwardIcon";
import VectorIcon from "../../../../components/svg/VectorIcon";
import type {HistoryDataType} from "./index.constances";

export type PanelBasicInformationPageHistoryProps = {
  openHistoryModalHandler: () => void;
  activeHistory?: HistoryDataType;
};

function PanelBasicInformationPageHistory(
  {openHistoryModalHandler, activeHistory}: PanelBasicInformationPageHistoryProps
) {
  return (
    <>
      {
        activeHistory &&
        <div className="flex-1 flex items-center gap-2">
          <Tag
            text={activeHistory.date}
            variant="fade"
            color="cyan"
            rightIcon={<CalendarIcon/>}
          />
          <Tag
            text={activeHistory.location}
            variant="fade"
            color="blue"
            rightIcon={<VectorIcon/>}
          />
        </div>
      }
      <div className="flex divide-x divide-gray-300 items-center">
        {
          !activeHistory.isLasted &&
          <div className="pl-2">
            <Tag
              text={"اطلاعات قديمي"}
              color="amber"
            />
          </div>
        }
        <Button
          variant="link"
          color="secondary"
          size="sm"
          rightIcon={<ClockBackwardIcon width={15} height={15}/>}
          onClick={openHistoryModalHandler}
        >
          مشاهده تاریخچه
        </Button>
      </div>
    </>
  );
}

export default PanelBasicInformationPageHistory;