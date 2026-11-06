import CardTitleValue, {type CardTitleValueProps} from "../../../components/others/Card/CardTitleValue.tsx";
import CardWithHeader from "../../../components/others/Card/CardWithHeader/CardWithHeader.tsx";
import DeleteIconClickable from "../../../components/others/Icon/DeleteIconClickable.tsx";
import useModalOpenBoolean from "../../../hooks/modal/useModalOpenBoolean.ts";
import DisplayModal from "../../../components/others/Modal/DisplayModal.tsx";
import {lazy} from "react";

const AdminRiskGroupReportQueueItemDeleteModal = lazy(() => import(
  "./AdminRiskGroupReportQueueItemDeleteModal.tsx"
  ));

export type AdminRiskGroupReportQueueItemProps = {
  item: {
    id: number
    fileName: string
    createdAt: string
    estimatedStartTime: string
    recordCount: number
  }
}

function AdminRiskGroupReportQueueItem(
  {item}: AdminRiskGroupReportQueueItemProps
) {

  const {
    open: deleteModalOpen, openModalHandler: openDeleteModalHandler, closeModalHandler: closeDeleteModalHandler,
    shouldBeRemoved: deleteModalShouldBeRemoved
  } = useModalOpenBoolean(false)

  const labelValues: CardTitleValueProps[] = [
    {
      label: 'تاریخ ایجاد',
      value: item?.createdAt
    },
    {
      label: 'تخمین زمان شروع',
      value: item?.estimatedStartTime
    },
    {
      label: 'تعداد رکوردها',
      value: item?.recordCount
    },
  ]

  return (
    <>
      <CardWithHeader
        title={item?.fileName}
        headerEndAdornment={(
          <DeleteIconClickable onClick={openDeleteModalHandler}/>
        )}
        headerPadding='p-2' headerHeight='h-auto'
      >
        <div className='flex flex-col gap-y-2'>
          {labelValues?.map((field, fieldIndex) => (
            <CardTitleValue
              key={fieldIndex}
              valueClass='ltr'
              {...field}
            />
          ))}
        </div>
      </CardWithHeader>

      <DisplayModal
        shouldBeRemoved={deleteModalShouldBeRemoved}
      >
        <AdminRiskGroupReportQueueItemDeleteModal
          reportId={item?.id} open={deleteModalOpen} onClose={closeDeleteModalHandler}
        />
      </DisplayModal>
    </>
  )
}

export default AdminRiskGroupReportQueueItem;
