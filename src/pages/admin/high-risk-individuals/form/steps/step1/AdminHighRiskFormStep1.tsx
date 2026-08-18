import AdminHighRiskIndividualsFormButtons from "../../AdminHighRiskIndividualsFormButtons.tsx";
import ReactHookFormWrapper
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import AdminHighRiskIndividualsBaseFormFields from "../../../FormFields/AdminHighRiskIndividualsBaseFormFields/AdminHighRiskIndividualsBaseFormFields.tsx";
import useReactHookFormWrapper
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import Card from "../../../../../../components/others/Card/Card.tsx";
import {useAdminHighRiskIndividualsFormStore} from "../../store/useAdminHighRiskIndividualsFormStore.ts";
import type {
  AdminHighRiskIndividualsBaseFormFieldsType
} from "../../../FormFields/AdminHighRiskIndividualsBaseFormFields/index.types.ts";


function AdminHighRiskFormStep1() {

  const defaultValues = useAdminHighRiskIndividualsFormStore(state => state.formData.step1)
  const setFormData = useAdminHighRiskIndividualsFormStore(state => state.setFormData)

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper<AdminHighRiskIndividualsBaseFormFieldsType>({
    onSubmitHandler: nextStepHandler, defaultValues
  })

  function nextStepHandler(formData: AdminHighRiskIndividualsBaseFormFieldsType) {
    setFormData({
      currentStep: 2,
      step1: formData
    })
  }

  return (
    <ReactHookFormWrapper
      formMethods={formMethods} onSubmit={onSubmit} className='flex flex-col gap-y-4'
    >
      <Card className='grid grid-cols-3 gap-4'>
        <AdminHighRiskIndividualsBaseFormFields
          descriptionClassName='col-span-3'
        />
      </Card>

      <AdminHighRiskIndividualsFormButtons/>
    </ReactHookFormWrapper>
  );
}

export default AdminHighRiskFormStep1;
