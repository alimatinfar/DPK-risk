import AdminPageTitle from "../../layout/AdminPageTitle.tsx";
import FormWithSteps from "../../../../components/Form/FormSteps/FormWithSteps.tsx";
import {useFormStepContext} from "../../../../contexts/FormStepContext.tsx";
import Button from "../../../../components/Form/Button/Button.tsx";
import {ADMIN_HIGH_RISK_FORM_STEPS} from "./index.constances.tsx";


function AdminHighRiskIndividualsFormPageContent() {

  const [currentStep, setCurrentStep] = useFormStepContext()

  return (
    <div className='flex flex-col gap-y-4'>
      <AdminPageTitle title='افزودن شخص پرریسک' hasBack/>

      <FormWithSteps steps={ADMIN_HIGH_RISK_FORM_STEPS}  />

      <div className='grid grid-cols-2 gap-x-4'>
        <Button
          onClick={() => setCurrentStep(prev => prev - 1)}
        >
          استپ قبل
        </Button>
        <Button
          onClick={() => setCurrentStep(prev => prev + 1)}
        >
          استپ بعدی
        </Button>
      </div>
    </div>
  );
}

export default AdminHighRiskIndividualsFormPageContent;
