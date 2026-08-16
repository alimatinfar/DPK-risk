import {useFormStepContext} from "../../../../contexts/FormStepContext.tsx";
import Button from "../../../../components/Form/Button/Button.tsx";
import useModalOpenBoolean from "../../../../hooks/modal/useModalOpenBoolean.ts";
import DisplayModal from "../../../../components/others/Modal/DisplayModal.tsx";
import {lazy} from "react";

const AdminHighRiskIndividualsExitFormModal = lazy(() => import(
  "./AdminHighRiskIndividualsExitFormModal.tsx"
  ));

type Props = {
  isLastStep?: boolean
}

function AdminHighRiskIndividualsFormButtons(
  {isLastStep}: Props
) {

  const [currentStep, setCurrentStep] = useFormStepContext()
  const isFirstStep = currentStep === 1

  const {
    openModalHandler: openExitFormModalHandler, closeModalHandler: closeExitFormModalHandler,
    open: exitFormOpen, shouldBeRemoved: exitFormShouldBeRemoved
  } = useModalOpenBoolean(false)

  function prevHandler() {
    if (currentStep === 1) {
      return openExitFormModalHandler()
    }

    setCurrentStep(prev => {
      return prev === 1 ? 1 : prev - 1
    })
  }

  return (
    <>
      <div className='flex justify-end'>
        <div className='grid grid-cols-2 gap-x-4'>
          <Button
            onClick={prevHandler}
            variant='default' color='white'
          >
            {isFirstStep ? 'انصراف' : 'مرحله قبل'}
          </Button>
          <Button type='submit'>
            {isLastStep ? 'ثبت نهایی' : 'ثبت و ادامه'}
          </Button>
        </div>
      </div>

      <DisplayModal shouldBeRemoved={exitFormShouldBeRemoved}>
        <AdminHighRiskIndividualsExitFormModal
          open={exitFormOpen} onClose={closeExitFormModalHandler}
        />
      </DisplayModal>
    </>
  );
}

export default AdminHighRiskIndividualsFormButtons;
