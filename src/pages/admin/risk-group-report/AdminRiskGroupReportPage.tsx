import {lazy} from "react";
import AdminPageTitle from "../layout/AdminPageTitle.tsx";
import AddButton from "../../../components/Form/Button/inheritedButtons/AddButton.tsx";
import DisplayModal from "../../../components/others/Modal/DisplayModal.tsx";
import useModalOpenBoolean from "../../../hooks/modal/useModalOpenBoolean.ts";

const AdminRiskGroupReportNewReportModal = lazy(() => import(
  "./AdminRiskGroupReportNewReportModal.tsx"
  ));

function AdminRiskGroupReportPage() {

  const {
    open, closeModalHandler, openModalHandler, shouldBeRemoved
  } = useModalOpenBoolean(false)

  return (
    <>
      <AdminPageTitle>
        <AddButton onClick={openModalHandler}>
          گزارش جدید
        </AddButton>
      </AdminPageTitle>

      <DisplayModal shouldBeRemoved={shouldBeRemoved}>
        <AdminRiskGroupReportNewReportModal open={open} onClose={closeModalHandler}/>
      </DisplayModal>
    </>
  );
}

export default AdminRiskGroupReportPage;
