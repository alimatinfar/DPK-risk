import {lazy} from "react";
import AdminPageTitle from "../layout/AdminPageTitle.tsx";
import AddButton from "../../../components/Form/Button/inheritedButtons/AddButton.tsx";
import DisplayModal from "../../../components/others/Modal/DisplayModal.tsx";
import useAdminRiskGroupReportPage from "./hooks/useAdminRiskGroupReportPage.ts";
import AdminRiskGroupReportQueue from "./AdminRiskGroupReportQueue.tsx";
import AdminRiskGroupReportInProgress, {type AdminRiskGroupReportInProgressProps} from "./AdminRiskGroupReportInProgress.tsx";
import AdminRiskGroupReportLast from "./AdminRiskGroupReportLast.tsx";


const AdminRiskGroupReportNewReportModal = lazy(() => import(
  "./create/AdminRiskGroupReportNewReportModal.tsx"
  ));

function AdminRiskGroupReportPage() {

  const {
    open, closeModalHandler, openModalHandler, shouldBeRemoved,
    excelUploadQueue, excelProcessing, latestReports,
  } = useAdminRiskGroupReportPage()

  return (
    <>
      <AdminPageTitle>
        <AddButton onClick={openModalHandler}>
          گزارش جدید
        </AddButton>
      </AdminPageTitle>

      <div className='border-t border-gray-200 dark:border-dark-2 mt-4 pt-4 grid grid-cols-2 divide-x divide-gray-200 dark:divide-dark-2'>
        <div className='flex flex-col gap-y-4 pl-4'>
          <AdminRiskGroupReportInProgress data={excelProcessing} />

          <AdminRiskGroupReportLast data={latestReports} />
        </div>

        <div className='flex flex-col gap-y-2 pr-4'>
          <AdminRiskGroupReportQueue
            data={excelUploadQueue}
          />
        </div>
      </div>

      <DisplayModal shouldBeRemoved={shouldBeRemoved}>
        <AdminRiskGroupReportNewReportModal open={open} onClose={closeModalHandler}/>
      </DisplayModal>
    </>
  );
}

export default AdminRiskGroupReportPage;
