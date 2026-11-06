import {useMemo} from "react";
import type {AdminRiskGroupReportQueueProps} from "../AdminRiskGroupReportQueue.tsx";

function useAdminRiskGroupReportPageData() {

  const excelUploadQueue: AdminRiskGroupReportQueueProps['data'] = useMemo(function () {
    return [
      {
        id: 1,
        fileName: 'لیست اطلاعات مشتریان',
        createdAt: '1405/08/15 | 10:30',
        estimatedStartTime: '14:30',
        recordCount: 12500,
      },
      {
        id: 2,
        fileName: 'اطلاعات نمایندگان',
        createdAt: '1405/08/15 | 10:45',
        estimatedStartTime: '14:30',
        recordCount: 8300,
      },
      {
        id: 3,
        fileName: 'گزارش تراکنش‌ها',
        createdAt: '1405/08/15 | 11:00',
        estimatedStartTime: '14:30',
        recordCount: 24600,
      },
    ]
  }, [])

  const excelProcessing = useMemo(function () {
    return {
      id: 4,
      fileName: 'اطلاعات شعب',
      progress: 65,
      elapsedTime: '00:20',
      estimatedCompletionTime: '1405/08/14 | 16:45',
    }
  }, [])

  const latestReports = useMemo(function () {
    return [
      {
        id: 5,
        name: 'گزارش نهایی اطلاعات مشتریان',
        completedAt: '1405/08/14 | 16:45',
        recordCount: 12500,
      },
      {
        id: 6,
        name: 'گزارش نهایی تراکنش‌های مالی',
        completedAt: '1405/08/14 | 14:20',
        recordCount: 24600,
      },
    ]
  }, [])

  return {
    excelUploadQueue, excelProcessing, latestReports
  }
}

export default useAdminRiskGroupReportPageData;
