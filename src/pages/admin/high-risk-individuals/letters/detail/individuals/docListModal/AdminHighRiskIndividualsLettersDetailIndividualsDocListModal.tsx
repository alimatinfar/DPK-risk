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

const AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalContent = lazy(() => import(
  "../../documents/deleteModal/AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalContent.tsx"
  ));
const AdminHighRiskIndividualsLettersDetailDocumentsFormModalContent = lazy(() => import(
  "../../documents/formModal/AdminHighRiskIndividualsLettersDetailDocumentsFormModalContent.tsx"
  ));


type Props = {
  modalState: ModalStateTypeId | boolean;
} & Pick<ModalProps, 'open' | 'onClose'>

function AdminHighRiskIndividualsLettersDetailIndividualsDocListModal(
  {
    modalState, onClose, open
  }: Props
) {

  const {
    documentsList, renderState, setRenderState, goToListState, pageTitle
  } = useAdminHighRiskIndividualsLettersDetailIndividualsDocListModal()

  return (
    <Modal
      open={open} onClose={onClose} title={pageTitle}
      {...renderState && {backAction: goToListState}}
    >
      <SuspenseRenderLogicDefaultContainer fallback={<Loading/>}>
        {renderState?.state === ADMIN_HIGH_RISK_INDIVIDUALS_DOC_LIST_RENDER_STATE_KEYS.DELETE ? (
          <AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalContent
            cancelAction={goToListState} modalState={renderState?.data} onClose={goToListState}
          />
        ) : renderState?.state === ADMIN_HIGH_RISK_INDIVIDUALS_DOC_LIST_RENDER_STATE_KEYS.EDIT ? (
          <AdminHighRiskIndividualsLettersDetailDocumentsFormModalContent
            modalState={renderState?.data} isEditMode onClose={goToListState}
          />
        ) : (
          <AdminHighRiskIndividualsLettersDetailIndividualsDocListModalContent
            documentsList={documentsList} setRenderState={setRenderState}
          />
        )}
      </SuspenseRenderLogicDefaultContainer>
    </Modal>
  );
}

export default AdminHighRiskIndividualsLettersDetailIndividualsDocListModal;
