import {useNavigate} from "react-router";
import Button from "../../../../components/Form/Button/Button.tsx";
import type {ButtonProps} from "../../../../components/Form/Button/ButtonTypes.ts";


export type AdminHighRiskIndividualsFormButtonsShareProps = {
  currentStep: number;
  setCurrentStep: (currentStep: number) => void;
  targetUrl: string;
  isLastStep?: boolean;
  onClick?: ButtonProps['onClick'];
  loading?: boolean;
}

function AdminHighRiskIndividualsFormButtonsShare(
  {
    currentStep, setCurrentStep, targetUrl, onClick, loading, isLastStep
  }: AdminHighRiskIndividualsFormButtonsShareProps
) {

  const navigate = useNavigate()

  const isFirstStep = currentStep === 1

  function prevHandler() {
    if (currentStep === 1) {
      return navigate(targetUrl)
    }

    setCurrentStep(currentStep === 1 ? 1 : currentStep - 1)
  }

  return (
    <div className='flex justify-end'>
      <div className='grid grid-cols-2 gap-x-4'>
        <Button
          onClick={prevHandler}
          variant='default' color='white'
        >
          {isFirstStep ? 'انصراف' : 'مرحله قبل'}
        </Button>
        <Button
          {...onClick ? {onClick} : {type: 'submit'}}
          loading={loading}
        >
          {isLastStep ? 'ثبت نهایی' : 'ثبت و ادامه'}
        </Button>
      </div>
    </div>
  );
}

export default AdminHighRiskIndividualsFormButtonsShare;
