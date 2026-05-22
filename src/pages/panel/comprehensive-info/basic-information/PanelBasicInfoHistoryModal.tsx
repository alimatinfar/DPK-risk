import type {ModalProps} from "../../../../components/others/Modal/Modal.tsx";
import Modal from "../../../../components/others/Modal/Modal.tsx";
import RenderLogic from "../../../../components/others/RenderLogic/RenderLogic.tsx";
import type {SetStateType} from "../../../../types/SetStateType.ts";
import HistoryItemCard from "./HistoryItemCard.tsx";
import type {HistoryDataType} from "./index.types.ts";


export type PanelBasicInfoHistoryModalProps = ModalProps & {
  infoHistoryList: HistoryDataType[];
  setHistoryItemClick: SetStateType<HistoryDataType | undefined>;
  activeItemId: string | number | undefined;
}

function PanelBasicInfoHistoryModal(
  {open, onClose, infoHistoryList, setHistoryItemClick, activeItemId, ...props}: PanelBasicInfoHistoryModalProps
) {

  const onItemClick = (item: HistoryDataType) => {
    setHistoryItemClick(item)
    onClose();
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title='تاریخچه اطلاعات'
      width="w-dvw md:w-137.5"
      {...props}
    >
      <p className="text-base text-secondary-text">با انتخاب هر نسخه، اطلاعات در همان مقطع زمانی نمایش داده می‌شود.</p>
      <RenderLogic
        isEmpty={infoHistoryList.length === 0}
      >
        <div className="flex flex-col mt-6 gap-2">
          {
            infoHistoryList.map(history => (
              <HistoryItemCard
                key={history.id}
                activeId={activeItemId}
                onItemClick={onItemClick}
                item={{
                  id: history.id,
                  date: history.date,
                  isLasted: history.isLasted,
                  location: history.location
                }}
              />
            ))
          }
        </div>
      </RenderLogic>
    </Modal>
  );
}

export default PanelBasicInfoHistoryModal;
