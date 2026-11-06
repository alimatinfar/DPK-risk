import CardWithHeader from "../../../components/others/Card/CardWithHeader/CardWithHeader.tsx";
import CardTitleValue, {type CardTitleValueProps} from "../../../components/others/Card/CardTitleValue.tsx";
import {useMemo} from "react";


export type AdminRiskGroupReportInProgressProps = {
  data: {
    id: number
    fileName: string
    processedRecordCount: number
    totalRecordCount: number
    elapsedTime: string
    estimatedCompletionTime: string
  };
}

function AdminRiskGroupReportInProgress(
  {data}: AdminRiskGroupReportInProgressProps
) {

  const {
    progressBarClass, progressPercent, labelValues
  } = useMemo(function () {
    return {
      progressBarClass: 'h-1.5 rounded-full',
      progressPercent: Number((data?.processedRecordCount / data?.totalRecordCount).toFixed(2)) * 100,
      labelValues: [
        {
          label: 'زمان سپری شده',
          value: data?.elapsedTime
        },
        {
          label: 'پیش بینی زمان اتمام',
          value: data?.estimatedCompletionTime
        },
      ]
    }
  }, [])

  return (
    <div className='bg-primary rounded-2xl pt-2 pb-1 px-1 flex flex-col gap-y-2'>
      <p className='text-white text-xs'>
        درحال انجام
      </p>

      <CardWithHeader
        headerPadding='p-2'
        customHeaderRender={(
          <div className='flex flex-col gap-y-4'>
            <p>
              {data?.fileName}
            </p>

            <div className='flex flex-col gap-y-1'>
              <div className={`relative w-full bg-[#EAE8F1] ${progressBarClass}`}>
                <div
                  style={{width: `${progressPercent}%`}}
                  className={`absolute right-0 top-0 bg-primary ${progressBarClass}`}
                >
                </div>
              </div>

              <div className='flex items-center justify-between text-xs text-gray-500 dark:text-custom-gray-1'>
              <span>
                {data?.processedRecordCount} از {data?.totalRecordCount}
              </span>

                <span>
                {progressPercent}%
              </span>
              </div>
            </div>
          </div>
        )}
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
    </div>
  );
}

export default AdminRiskGroupReportInProgress;
