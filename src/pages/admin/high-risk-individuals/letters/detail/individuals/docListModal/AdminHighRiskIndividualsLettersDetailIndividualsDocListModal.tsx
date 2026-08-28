import Modal, {type ModalProps} from "../../../../../../../components/others/Modal/Modal.tsx";
import type {ModalStateTypeId} from "../index.types.ts";
import AdminHighRiskIndividualsLettersDetailIndividualsDocListModalContent
  from "./AdminHighRiskIndividualsLettersDetailIndividualsDocListModalContent.tsx";
import useAdminHighRiskIndividualsLettersDetailIndividualsDocListModal
  from "./hooks/useAdminHighRiskIndividualsLettersDetailIndividualsDocListModal.ts";
import {ADMIN_HIGH_RISK_INDIVIDUALS_DOC_LIST_RENDER_STATE_KEYS} from "./index.constances.ts";
import SuspenseRenderLogicDefaultContainer
  from "../../../../../../../components/others/RenderLogic/SuspenseRenderLogicDefaultContainer.tsx";
import Loading from "../../../../../../../components/others/Loading/Loading.tsx";
import {lazy} from "react";
import RenderLogic from "../../../../../../../components/others/RenderLogic/RenderLogic.tsx";


const AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalContent = lazy(() => import(
  "../../documents/deleteModal/AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalContent.tsx"
  ));
const AdminHighRiskIndividualsLettersDetailDocumentsFormModalContent = lazy(() => import(
  "../../documents/formModal/AdminHighRiskIndividualsLettersDetailDocumentsFormModalContent.tsx"
  ));


export type AdminHighRiskIndividualsLettersDetailIndividualsDocListModalProps = {
  modalState: ModalStateTypeId | boolean;
  deleteDocumentApiAddress: string;
  editDocumentApiAddress: string;
  isCustomer?: boolean;
} & Pick<ModalProps, 'open' | 'onClose'>

function AdminHighRiskIndividualsLettersDetailIndividualsDocListModal(
  {
    modalState, onClose, open, deleteDocumentApiAddress, editDocumentApiAddress, isCustomer
  }: AdminHighRiskIndividualsLettersDetailIndividualsDocListModalProps
) {

  const {
    documentsList, loading, error, renderState, setRenderState, goToListState, pageTitle
  } = useAdminHighRiskIndividualsLettersDetailIndividualsDocListModal({
    isCustomer, modalState
  })

  return (
    <Modal
      open={open} onClose={onClose} title={pageTitle}
      {...renderState && {backAction: goToListState}}
    >
      <SuspenseRenderLogicDefaultContainer fallback={<Loading/>}>
        <RenderLogic
          isLoading={loading} error={error}
        >
          {renderState?.state === ADMIN_HIGH_RISK_INDIVIDUALS_DOC_LIST_RENDER_STATE_KEYS.DELETE ? (
            <AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalContent
              cancelAction={goToListState} modalState={renderState?.data} onClose={goToListState}
              apiAddress={deleteDocumentApiAddress}
            />
          ) : renderState?.state === ADMIN_HIGH_RISK_INDIVIDUALS_DOC_LIST_RENDER_STATE_KEYS.EDIT ? (
            <AdminHighRiskIndividualsLettersDetailDocumentsFormModalContent
              modalState={renderState?.data} isEditMode onClose={goToListState}
              apiAddress={editDocumentApiAddress}
            />
          ) : (
            <AdminHighRiskIndividualsLettersDetailIndividualsDocListModalContent
              documentsList={documentsList} setRenderState={setRenderState}
            />
          )}
        </RenderLogic>
      </SuspenseRenderLogicDefaultContainer>
    </Modal>
  );
}

export default AdminHighRiskIndividualsLettersDetailIndividualsDocListModal;
