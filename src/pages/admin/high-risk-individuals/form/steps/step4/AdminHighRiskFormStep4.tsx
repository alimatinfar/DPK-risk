import AdminHighRiskIndividualsFormButtons from "../../AdminHighRiskIndividualsFormButtons.tsx";
import Card from "../../../../../../components/others/Card/Card";
import AdminHighRiskFormStep4Individuals from "./AdminHighRiskFormStep4Individuals";
import AdminHighRiskFormStep4Form from "./AdminHighRiskFormStep4Form";
import useReactHookFormWrapper from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";

function AdminHighRiskFormStep4() {

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper({
    onSubmitHandler
  })

  function onSubmitHandler() {

  }

  return (
    <div className='flex flex-col gap-y-4'>
      <Card
        paddingClass=' '
        className='flex'
      >
        <AdminHighRiskFormStep4Individuals />

        <AdminHighRiskFormStep4Form
          formMethods={formMethods} onSubmit={onSubmit}
        />
      </Card>

      <AdminHighRiskIndividualsFormButtons/>
    </div>
  );
}

export default AdminHighRiskFormStep4;
