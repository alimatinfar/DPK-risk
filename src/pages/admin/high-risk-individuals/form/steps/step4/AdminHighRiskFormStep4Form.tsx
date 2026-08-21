import ReactHookFormWrapper, {
  type ReactHookFormWrapperProps
} from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper";
import ExpireDateField from "../../../FormFields/ExpireDateField/ExpireDateField";
import EntryReasonsField from "../../../FormFields/EntryReasonsField/EntryReasonsField";
import AdminHighRiskFormStep2DocumentsList from "../step2/AdminHighRiskFormStep2DocumentsList";
import type {
  AdminHighRiskIndividualsDocumentsListFormProps
} from "../../../FormFields/AdminHighRiskIndividualsDocumentsListForm/AdminHighRiskIndividualsDocumentsListForm";


type Props = Pick<ReactHookFormWrapperProps, 'formMethods' | 'onSubmit'> &
  Pick<AdminHighRiskIndividualsDocumentsListFormProps, 'documentsList' | 'setDocumentsList'>

function AdminHighRiskFormStep4Form(
  {formMethods, onSubmit, documentsList, setDocumentsList}: Props
) {
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