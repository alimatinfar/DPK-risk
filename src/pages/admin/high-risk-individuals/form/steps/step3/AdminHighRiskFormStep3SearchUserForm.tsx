import TabContentRender from "../../../../../../components/others/Tab/TabContentRender.tsx";
import ReactHookFormWrapper
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";

import Button from "../../../../../../components/Form/Button/Button.tsx";
import SearchIcon from "../../../../../../components/svg/SearchIcon.tsx";
import { ADMIN_HIGH_RISK_INDIVIDUALS_FORM_STEP3_TABS_RENDER_OBJECT } from "./index.constances.tsx";
import useReactHookFormWrapper
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper";
import type {
  ForeignCitizenFormFieldsType,
  LegalFormFieldsType,
  NaturalFormFieldsType
} from "../../../../../search/form/SearchPageForm.types";
import checkFormHasAtLeastOneValue
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/utils/checkFormHasAtLeastOneValue";
import toastPromise from "../../../../../../utils/toastPromise";
import type {TabType} from "../../../../../../components/others/Tab/Tab";


type Props = {
  activeTab: TabType['id'];
}

function AdminHighRiskFormStep3SearchUserForm(
  {activeTab}: Props
) {

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper({
    onSubmitHandler
  })

  function onSubmitHandler(formData: NaturalFormFieldsType | LegalFormFieldsType | ForeignCitizenFormFieldsType) {
    if (!checkFormHasAtLeastOneValue(formData))
      return toastPromise().then(toast => toast.error('تکمیل حداقل یک فیلد الزامی است'))

    console.log({formData})
  }

  return (
    <ReactHookFormWrapper
      formMethods={formMethods} onSubmit={onSubmit} className='grid grid-cols-3 gap-4'
    >
      <TabContentRender
        renderObject={ADMIN_HIGH_RISK_INDIVIDUALS_FORM_STEP3_TABS_RENDER_OBJECT}
        activeTab={activeTab}
      />

      <div className='flex justify-end items-center col-start-3 pt-2.5'>
        <Button
          variant='outlined' rightIcon={<SearchIcon />} type='submit'
        >
          جستجو
        </Button>
      </div>
    </ReactHookFormWrapper>
  );
}

export default AdminHighRiskFormStep3SearchUserForm;