import Tag from "../../../components/others/Tag/Tag.tsx";
import Button from "../../../components/Form/Button/Button.tsx";
import DownloadIcon from "../../../components/svg/DownloadIcon.tsx";
import CardTitleValue, {type CardTitleValueProps} from "../../../components/others/Card/CardTitleValue.tsx";
import useTheme from "../../../components/others/ThemeManager/hooks/useTheme.ts";
import {useMemo} from "react";

export type AdminRiskGroupReportLastItemProps = {
  item: {
    id: number;
    name: string;
    completedAt: string;
    recordCount: number;
  }
}

function AdminRiskGroupReportLastItem(
  {item}: AdminRiskGroupReportLastItemProps
) {

  function downloadReportHandler() {
    //TODO should be completed
  }

  const {isDarkMode} = useTheme()

  const labelValues: CardTitleValueProps[] = useMemo(function () {
    return [
      {
        label: 'تاریخ تکميل گزارش',
        value: item?.completedAt
      },
      {
        label: 'تعداد رکوردها',
        value: item?.recordCount
      },
    ]
  }, [item])

  return (
    <div
      className='flex flex-col p-4 border border-gray-200 rounded-lg bg-white dark:bg-dark-6 dark:border-dark-2'
    >
      <div className='border-b border-gray-200 pb-3 mb-3 flex items-center justify-between gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <p>
            {item?.name}
          </p>
          <Tag
            text='جدید' color='blue'
            variant={isDarkMode ? 'filled' : 'fade'}
          />
        </div>

        <Button
          color='white' variant='default' size='sm'
          rightIcon={<DownloadIcon textColor='text-gray-900 dark:text-white' />}
          onClick={downloadReportHandler}
        >
          دریافت گزارش
        </Button>
      </div>

      <div className='flex flex-col gap-y-2'>
        {labelValues?.map((field, fieldIndex) => (
          <CardTitleValue
            key={fieldIndex}
            valueClass='ltr'
            {...field}
          />
        ))}
      </div>
    </div>
  )
}

export default AdminRiskGroupReportLastItem;
