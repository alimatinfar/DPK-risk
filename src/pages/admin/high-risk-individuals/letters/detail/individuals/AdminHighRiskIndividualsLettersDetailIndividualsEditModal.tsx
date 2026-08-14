import Modal, {type ModalProps} from "../../../../../../components/others/Modal/Modal.tsx";
import type {AdminHighRiskIndividualsLettersDetailIndividualsDataItemType} from "./index.types.ts";
import {useMemo} from "react";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../../search/form/SearchPageForm.constances.ts";
import ReactHookFormWrapper
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import ExpireDateField from "../../../FormFields/ExpireDateField/ExpireDateField.tsx";
import useReactHookFormWrapper
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import {expireDateFieldName, type ExpireDateFieldType} from "../../../FormFields/ExpireDateField/index.constances.ts";
import Button from "../../../../../../components/Form/Button/Button.tsx";

type FormDataType = {
  [expireDateFieldName]: ExpireDateFieldType;
}

type Props = {
  modalState: AdminHighRiskIndividualsLettersDetailIndividualsDataItemType | boolean
} & Pick<ModalProps, 'open' | 'onClose'>

function AdminHighRiskIndividualsLettersDetailIndividualsEditModal(
  {open, onClose, modalState}: Props
) {

  function onSubmitHandler(formData: FormDataType) {
    console.log({formData})
  }

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper<FormDataType>({
    onSubmitHandler
  })

  const personTitle = useMemo(function () {
    if (typeof modalState === 'boolean') return ''

    return `${modalState?.name} ${modalState?.type === SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name ? '' : modalState?.lastName}`
  }, [modalState])

  return (
    <Modal
      open={open} onClose={onClose} title={`ویرایش ${personTitle}`}
    >
      <ReactHookFormWrapper
        formMethods={formMethods} onSubmit={onSubmit}
      >
        <ExpireDateField/>

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
