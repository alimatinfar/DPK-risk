import DescriptionField from "../FormFields/DescriptionField/DescriptionField.tsx";
import Button from "../../../../components/Form/Button/Button.tsx";
import ReactHookFormWrapper, {
  type ReactHookFormWrapperProps
} from "../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import type {InputProps} from "../../../../components/Form/Input/types/InputProps.ts";


type Props = {
  cancelAction: () => void;
  loading: boolean;
  descriptionMaxLength: InputProps['maxLength'];
} & Pick<ReactHookFormWrapperProps, 'formMethods' | 'onSubmit'>

function AdminHighRiskIndividualsDeleteForm(
  {
    formMethods, onSubmit, cancelAction, loading, descriptionMaxLength
  }: Props
) {
  return (
    <ReactHookFormWrapper
      formMethods={formMethods} onSubmit={onSubmit}
    >
      <DescriptionField maxLength={descriptionMaxLength}/>

      <div className='grid grid-cols-2 gap-x-4 mt-2'>
        <Button
          variant='default' color='white'
          onClick={cancelAction}
        >
          انصراف
        </Button>

        <Button
          color='red' type='submit' loading={loading}
        >
          حذف
        </Button>
      </div>
    </ReactHookFormWrapper>
  );
}

export default AdminHighRiskIndividualsDeleteForm;
