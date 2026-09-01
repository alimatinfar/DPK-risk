import AdminHighRiskIndividualsFormButtons from "../../AdminHighRiskIndividualsFormButtons.tsx";
import ReactHookFormWrapper
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import AdminHighRiskIndividualsBaseFormFields from "../../../FormFields/AdminHighRiskIndividualsBaseFormFields/AdminHighRiskIndividualsBaseFormFields.tsx";
import Card from "../../../../../../components/others/Card/Card.tsx";
import useAdminHighRiskFormStep1 from "./hooks/useAdminHighRiskFormStep1.ts";


function AdminHighRiskFormStep1() {

  const {
    formMethods, onSubmit, checkExistLetterLoading
  } = useAdminHighRiskFormStep1()

  return (
    <ReactHookFormWrapper
      formMethods={formMethods} onSubmit={onSubmit} className='flex flex-col gap-y-4'
    >
      <Card className='grid grid-cols-3 gap-4'>
        <AdminHighRiskIndividualsBaseFormFields
          descriptionClassName='col-span-3'
        />
      </Card>

      <AdminHighRiskIndividualsFormButtons
        loading={checkExistLetterLoading}
      />
    </ReactHookFormWrapper>
  );
}

export default AdminHighRiskFormStep1;
