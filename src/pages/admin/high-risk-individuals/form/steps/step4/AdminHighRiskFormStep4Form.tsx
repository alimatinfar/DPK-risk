import ReactHookFormWrapper, {
  type ReactHookFormWrapperProps
} from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper";
import ExpireDateField from "../../../FormFields/ExpireDateField/ExpireDateField";
import EntryReasonsField from "../../../FormFields/EntryReasonsField/EntryReasonsField";


type Props = Pick<ReactHookFormWrapperProps, 'formMethods' | 'onSubmit'>

function AdminHighRiskFormStep4Form(
  {formMethods, onSubmit}: Props
) {
  return (
    <div className='flex-1 p-4'>
      <ReactHookFormWrapper
        formMethods={formMethods} onSubmit={onSubmit}
        className='border-b border-gray-200 grid grid-cols-2 gap-4'
      >
        <ExpireDateField/>

        <EntryReasonsField/>
      </ReactHookFormWrapper>
    </div>
  );
}

export default AdminHighRiskFormStep4Form;