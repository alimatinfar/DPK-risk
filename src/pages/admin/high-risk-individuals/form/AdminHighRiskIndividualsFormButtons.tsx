import Button from "../../../../components/Form/Button/Button.tsx";
import type {ButtonProps} from "../../../../components/Form/Button/ButtonTypes.ts";
import useAdminHighRiskIndividualsFormCurrentStep from "./store/useAdminHighRiskIndividualsFormCurrentStep.ts";
import {useNavigate} from "react-router";
import ROUTER_LINKS from "../../../../constances/routerLinks.ts";


type Props = {
  isLastStep?: boolean;
  onClick?: ButtonProps['onClick'];
}

function AdminHighRiskIndividualsFormButtons(
  {isLastStep, onClick}: Props
) {

  const navigate = useNavigate()
  const {currentStep, setCurrentStep} = useAdminHighRiskIndividualsFormCurrentStep()
  const isFirstStep = currentStep === 1

  function prevHandler() {
    if (currentStep === 1) {
      return navigate(ROUTER_LINKS.ADMIN_HIGH_RISK_INDIVIDUAL)
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
        >
          {isLastStep ? 'ثبت نهایی' : 'ثبت و ادامه'}
        </Button>
      </div>
    </div>
  );
}

export default AdminHighRiskIndividualsFormButtons;
