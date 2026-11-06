import ListLabel from "./ListLabel.tsx";
import CardTitleValue, {type CardTitleValueProps} from "../../../components/others/Card/CardTitleValue.tsx";
import CardWithHeader from "../../../components/others/Card/CardWithHeader/CardWithHeader.tsx";
import DeleteIconClickable from "../../../components/others/Icon/DeleteIconClickable.tsx";


export type AdminRiskGroupReportQueueProps = {
  data: {
    id: number
    fileName: string
    createdAt: string
    estimatedStartTime: string
    recordCount: number
  }[];
  removeFileHandler: () => void;
}

function AdminRiskGroupReportQueue(
  {
    data, removeFileHandler
  }: AdminRiskGroupReportQueueProps
) {
  return (
    <>
      <ListLabel>
        در صف
      </ListLabel>

      {data?.map(item => {

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
          <CardWithHeader
            key={item?.id}
            title={item?.fileName}
            headerEndAdornment={(
              <DeleteIconClickable onClick={removeFileHandler}/>
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
        )
      })}
    </>
  );
}

export default AdminRiskGroupReportQueue;
