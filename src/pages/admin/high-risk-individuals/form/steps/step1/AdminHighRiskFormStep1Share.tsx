import Card from "../../../../../../components/others/Card/Card.tsx";
import AdminHighRiskIndividualsBaseFormFields
  from "../../../FormFields/AdminHighRiskIndividualsBaseFormFields/AdminHighRiskIndividualsBaseFormFields.tsx";
import ReactHookFormWrapper
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import useAdminHighRiskFormStep1Share from "./hooks/useAdminHighRiskFormStep1Share.ts";
import type {ReactNode} from "react";
import type {AdminHighRiskIndividualsFormButtonsShareProps} from "../../AdminHighRiskIndividualsFormButtonsShare.tsx";
import type {AdminHighRiskFormStep1ExistLetterProps} from "./hooks/useAdminHighRiskFormStep1ExistLetter.ts";


export type AdminHighRiskFormStep1ShareProps = {
  defaultValues: any;
  setFormData: any;
  formIsDirty: boolean;
  ButtonsSection: (props: Pick<AdminHighRiskIndividualsFormButtonsShareProps,
    'loading' | 'isLastStep' | 'onClick'
  >) => ReactNode;
  isInquiryHistory?: boolean
} & Pick<AdminHighRiskFormStep1ExistLetterProps, 'existsLetterApiUrl'>

function AdminHighRiskFormStep1Share(
  {
    setFormData, formIsDirty, defaultValues, ButtonsSection,
    existsLetterApiUrl, isInquiryHistory
  }: AdminHighRiskFormStep1ShareProps
) {

  const {
    formMethods, onSubmit, checkExistLetterLoading
  } = useAdminHighRiskFormStep1Share({
    defaultValues, formIsDirty, setFormData, existsLetterApiUrl
  })

  return (
    <ReactHookFormWrapper
      formMethods={formMethods} onSubmit={onSubmit} className='flex flex-col gap-y-4'
    >
      <Card className='grid grid-cols-3 gap-4'>
        <AdminHighRiskIndividualsBaseFormFields
          descriptionClassName='col-span-3' initialEntry
          isInquiryHistory={isInquiryHistory}
        />
      </Card>

      <ButtonsSection loading={checkExistLetterLoading} />
    </ReactHookFormWrapper>
  );
}

export default AdminHighRiskFormStep1Share;
