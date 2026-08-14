import Modal, {type ModalProps} from "../../../../../../../components/others/Modal/Modal.tsx";
import type {AdminHighRiskIndividualsLettersDetailIndividualsDataItemType} from "../index.types.ts";
import ReactHookFormWrapper
  from "../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import ExpireDateField from "../../../../FormFields/ExpireDateField/ExpireDateField.tsx";
import Button from "../../../../../../../components/Form/Button/Button.tsx";
import useAdminHighRiskIndividualsLettersDetailIndividualsEditModal
  from "./hooks/useAdminHighRiskIndividualsLettersDetailIndividualsEditModal.ts";
import EntryReasonsField from "../../../../FormFields/EntryReasonsField/EntryReasonsField.tsx";


export type AdminHighRiskIndividualsLettersDetailIndividualsEditModalProps = {
  modalState: AdminHighRiskIndividualsLettersDetailIndividualsDataItemType | boolean
} & Pick<ModalProps, 'open' | 'onClose'>

function AdminHighRiskIndividualsLettersDetailIndividualsEditModal(
  {open, onClose, modalState}: AdminHighRiskIndividualsLettersDetailIndividualsEditModalProps
) {

  const {
    personTitle, formMethods, onSubmit
  } = useAdminHighRiskIndividualsLettersDetailIndividualsEditModal({
    modalState
  })

  return (
    <Modal
      open={open} onClose={onClose} title={`ویرایش ${personTitle}`}
    >
      <ReactHookFormWrapper
        formMethods={formMethods} onSubmit={onSubmit}
      >
        <ExpireDateField/>

        <EntryReasonsField />

        <div className='mt-2'>
          <Button
            fullWidth type='submit'
          >
            ثبت
          </Button>
        </div>
      </ReactHookFormWrapper>
    </Modal>
  );
}

export default AdminHighRiskIndividualsLettersDetailIndividualsEditModal;
