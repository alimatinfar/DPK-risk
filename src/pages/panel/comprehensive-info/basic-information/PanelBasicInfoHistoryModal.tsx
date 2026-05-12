import type {ModalProps} from "../../../../components/others/Modal/Modal.tsx";
import Modal from "../../../../components/others/Modal/Modal.tsx";
import type {SetStateType} from "../../../../types/SetStateType.ts";
import HistoryItemCard from "./HistoryItemCard.tsx";
import type {HistoryDataType} from "./index.constances.ts";

export type PanelBasicInfoHistoryModalProps = ModalProps & {
  infoHistoryList: HistoryDataType[]
  setHistoryItemClick: SetStateType<HistoryDataType>
  activeItemId: string
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
    </Modal>
  );
}

export default PanelBasicInfoHistoryModal;