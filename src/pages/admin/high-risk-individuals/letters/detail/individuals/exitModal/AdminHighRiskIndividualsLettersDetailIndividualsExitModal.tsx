import Modal, {type ModalProps} from "../../../../../../../components/others/Modal/Modal.tsx";
import type {AdminHighRiskIndividualsLettersDetailIndividualsDataItemType} from "../index.types.ts";
import Button from "../../../../../../../components/Form/Button/Button.tsx";
import ReactHookFormWrapper
  from "../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import useAdminHighRiskIndividualsLettersDetailIndividualsExitModal
  from "./hooks/useAdminHighRiskIndividualsLettersDetailIndividualsExitModal.ts";
import AdminHighRiskIndividualsLettersDetailIndividualsExitModalStep1
  from "./AdminHighRiskIndividualsLettersDetailIndividualsExitModalStep1.tsx";
import {lazy} from "react";
import SuspenseRenderLogicDefaultContainer
  from "../../../../../../../components/others/RenderLogic/SuspenseRenderLogicDefaultContainer.tsx";
import Loading from "../../../../../../../components/others/Loading/Loading.tsx";
const AdminHighRiskIndividualsLettersDetailIndividualsExitModalStep2 = lazy(() => import(
  "./AdminHighRiskIndividualsLettersDetailIndividualsExitModalStep2.tsx"
  ));
const AdminHighRiskIndividualsLettersDetailIndividualsExitModalStep3 = lazy(() => import(
  "./AdminHighRiskIndividualsLettersDetailIndividualsExitModalStep3.tsx"
  ));


export type AdminHighRiskIndividualsLettersDetailIndividualsExitModalProps = {
  modalState: AdminHighRiskIndividualsLettersDetailIndividualsDataItemType | boolean;
} & Pick<ModalProps, 'open' | 'onClose'>

function AdminHighRiskIndividualsLettersDetailIndividualsExitModal(
  {
    open, onClose, modalState
  }: AdminHighRiskIndividualsLettersDetailIndividualsExitModalProps
) {

  const {
    personTitle, formMethods, onSubmit, prevHandler, isFirstStep, isLastStep, currentStep,
    reasonIsUserMistake, description
  } = useAdminHighRiskIndividualsLettersDetailIndividualsExitModal({
    modalState, onClose
  })

  const stepsRender = {
    1: <AdminHighRiskIndividualsLettersDetailIndividualsExitModalStep1 />,
    2: <AdminHighRiskIndividualsLettersDetailIndividualsExitModalStep2
      reasonIsUserMistake={!!reasonIsUserMistake}
    />,
    3: <AdminHighRiskIndividualsLettersDetailIndividualsExitModalStep3 />,
  }

  return (
    <Modal
      open={open} onClose={onClose} title={`خروج ${personTitle}`}
      description={description}
    >
      <ReactHookFormWrapper
        formMethods={formMethods} onSubmit={onSubmit}
      >
        <SuspenseRenderLogicDefaultContainer fallback={<Loading />}>
          {stepsRender?.[(currentStep as keyof typeof stepsRender)] || null}
        </SuspenseRenderLogicDefaultContainer>

        <div className='mt-2 grid grid-cols-2 gap-x-4'>
          <Button
            onClick={prevHandler}
            variant='default'
            color='white'
            children={isFirstStep ? 'انصراف' : 'مرحله قبل'}
          />

          <Button
            type='submit'
            {...isLastStep && {
              color: 'red'
            }}
          >
            {isLastStep ? 'ثبت و خروج کاربر' : 'ثبت و ادامه'}
          </Button>
        </div>
      </ReactHookFormWrapper>
    </Modal>
  );
}

export default AdminHighRiskIndividualsLettersDetailIndividualsExitModal;
