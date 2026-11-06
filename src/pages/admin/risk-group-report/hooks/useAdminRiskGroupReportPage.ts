import useModalOpenBoolean from "../../../../hooks/modal/useModalOpenBoolean.ts";
import useAdminRiskGroupReportPageData from "./useAdminRiskGroupReportPageData.ts";


function useAdminRiskGroupReportPage() {

  const {
    open, closeModalHandler, openModalHandler, shouldBeRemoved
  } = useModalOpenBoolean(false)

  const {
    excelUploadQueue, excelProcessing, latestReports
  } = useAdminRiskGroupReportPageData()

  return {
    open, closeModalHandler, openModalHandler, shouldBeRemoved,
    excelUploadQueue, excelProcessing, latestReports,
  }
}

export default useAdminRiskGroupReportPage;
