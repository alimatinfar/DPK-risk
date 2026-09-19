import AdminHighRiskIndividualsLettersDetailIndividualsCategories
  from "../../high-risk-individuals/letters/detail/individuals/AdminHighRiskIndividualsLettersDetailIndividualsCategories.tsx";
import useAdminInquiryHistoryDetailIndividuals from "./hooks/useAdminInquiryHistoryDetailIndividuals.tsx";
import type {AdminInquiryHistoryLetterDetailProps} from "./index.types.ts";
import DisplayModal from "../../../../components/others/Modal/DisplayModal.tsx";
import {lazy} from "react";

const AdminInquiryHistoryDetailIndividualsDeleteModal = lazy(() => import(
  "./AdminInquiryHistoryDetailIndividualsDeleteModal.tsx"
  ));


function AdminInquiryHistoryDetailIndividuals(
  {responseData, refetch}: AdminInquiryHistoryLetterDetailProps
) {

  const {
    individualsList, deletePersonModalOpen, deletePersonModalShouldBeRemoved, deletePersonModalState,
    setDeletePersonModalState, closeDeletePersonModal
  } = useAdminInquiryHistoryDetailIndividuals({
    responseData
  })

  return (
    <>
      <AdminHighRiskIndividualsLettersDetailIndividualsCategories
        data={individualsList} setDeletePersonModalState={setDeletePersonModalState}
      />

      <DisplayModal
        shouldBeRemoved={deletePersonModalShouldBeRemoved}
      >
        <AdminInquiryHistoryDetailIndividualsDeleteModal
          refetch={refetch} modalState={deletePersonModalState} onClose={closeDeletePersonModal}
          open={deletePersonModalOpen}
        />
      </DisplayModal>
    </>
  );
}

export default AdminInquiryHistoryDetailIndividuals;
