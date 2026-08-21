import ReactHookFormWrapper, {
  type ReactHookFormWrapperProps
} from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper";
import ExpireDateField from "../../../FormFields/ExpireDateField/ExpireDateField";
import EntryReasonsField from "../../../FormFields/EntryReasonsField/EntryReasonsField";
import AdminHighRiskFormStep2DocumentsList from "../step2/AdminHighRiskFormStep2DocumentsList";
import { useState } from "react";
import type {
  AdminHighRiskIndividualsDocumentFormDataType
} from "../../../FormFields/AdminHighRiskIndividualsDocumentFormFields/index.types";


type Props = Pick<ReactHookFormWrapperProps, 'formMethods' | 'onSubmit'>

function AdminHighRiskFormStep4Form(
  {formMethods, onSubmit}: Props
) {

  const [documentsList, setDocumentsList] = useState<AdminHighRiskIndividualsDocumentFormDataType[]>([])

  return (
    <div className='flex-1 p-4'>
      <ReactHookFormWrapper
        formMethods={formMethods} onSubmit={onSubmit} hiddenButton
        className='border-b border-gray-200 grid grid-cols-2 gap-4 mb-4'
      >
        <ExpireDateField/>

        <EntryReasonsField/>
      </ReactHookFormWrapper>

      <AdminHighRiskFormStep2DocumentsList documentsList={documentsList} setDocumentsList={setDocumentsList}/>
    </div>
  );
}

export default AdminHighRiskFormStep4Form;