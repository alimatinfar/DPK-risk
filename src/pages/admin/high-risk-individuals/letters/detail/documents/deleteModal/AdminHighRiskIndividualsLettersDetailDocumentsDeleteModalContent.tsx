import useAdminHighRiskIndividualsLettersDetailDocumentsDeleteModal
  from "./hooks/useAdminHighRiskIndividualsLettersDetailDocumentsDeleteModal.ts";
import type {
  AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalProps
} from "./AdminHighRiskIndividualsLettersDetailDocumentsDeleteModal.tsx";
import type {ModalProps} from "../../../../../../../components/others/Modal/Modal.tsx";
import AdminHighRiskIndividualsDeleteForm from "../../../../form/AdminHighRiskIndividualsDeleteForm.tsx";


export type AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalContentProps = {
  cancelAction: () => void;
  apiAddress: string;
  letterId: number | string;
} &
  Pick<AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalProps, 'modalState' | 'refetch'> &
  Pick<ModalProps, 'onClose'>

function AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalContent(
  {
    cancelAction, modalState, onClose, apiAddress, letterId, refetch
  }: AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalContentProps
) {

  const {
    formMethods, onSubmit, loading
  } = useAdminHighRiskIndividualsLettersDetailDocumentsDeleteModal({
    modalState, onClose, apiAddress, letterId, refetch
  })

  return (
    <AdminHighRiskIndividualsDeleteForm
      loading={loading} formMethods={formMethods} onSubmit={onSubmit} descriptionMaxLength={250}
      cancelAction={cancelAction}
    />
  );
}

export default AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalContent;
