import AdminHighRiskIndividualsFormButtons from "../../AdminHighRiskIndividualsFormButtons.tsx";
import {useFormStepContext} from "../../../../../../contexts/FormStepContext.tsx";

function AdminHighRiskFormStep1() {

  const [, setCurrentStep] = useFormStepContext()

  function nextStepHandler() {
    setCurrentStep(prev => prev + 1)
  }

  return (
    <div>
      step1
      <AdminHighRiskIndividualsFormButtons onClick={nextStepHandler} />
    </div>
  );
}

export default AdminHighRiskFormStep1;
