import AdminHighRiskIndividualsFormButtons from "../../AdminHighRiskIndividualsFormButtons.tsx";
import {useFormStepContext} from "../../../../../../contexts/FormStepContext.tsx";
import ReactHookFormWrapper
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import AdminHighRiskIndividualsBaseFormFields from "../../../FormFields/AdminHighRiskIndividualsBaseFormFields.tsx";
import useReactHookFormWrapper
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import Card from "../../../../../../components/others/Card/Card.tsx";

function AdminHighRiskFormStep1() {

  const [, setCurrentStep] = useFormStepContext()

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper({
    onSubmitHandler: nextStepHandler
  })

  function nextStepHandler() {
    setCurrentStep(prev => prev + 1)
  }

  return (
    <>
      <Card>
        <ReactHookFormWrapper
          formMethods={formMethods} onSubmit={onSubmit} className='grid grid-cols-3 gap-4'
        >
          <AdminHighRiskIndividualsBaseFormFields/>
        </ReactHookFormWrapper>
      </Card>

      <AdminHighRiskIndividualsFormButtons onClick={nextStepHandler}/>
    </>
  );
}

export default AdminHighRiskFormStep1;
