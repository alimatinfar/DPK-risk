import TabContentRender from "../../../../../../components/others/Tab/TabContentRender.tsx";
import ReactHookFormWrapper
  , {
  type ReactHookFormWrapperProps
} from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import Button from "../../../../../../components/Form/Button/Button.tsx";
import SearchIcon from "../../../../../../components/svg/SearchIcon.tsx";
import {
  ADMIN_HIGH_RISK_INDIVIDUALS_FORM_STEP3_TABS_RENDER_OBJECT
} from "./index.constances.tsx";
import type {TabType} from "../../../../../../components/others/Tab/Tab";


type Props = {
  activeTab: TabType['id'];
  loading: boolean;
} & Pick<ReactHookFormWrapperProps, 'formMethods' | 'onSubmit'>

function AdminHighRiskFormStep3SearchUserForm(
  {activeTab, formMethods, onSubmit, loading}: Props
) {
  return (
    <ReactHookFormWrapper
      formMethods={formMethods} onSubmit={onSubmit} className='grid grid-cols-3 gap-4'
    >
      <TabContentRender
        renderObject={ADMIN_HIGH_RISK_INDIVIDUALS_FORM_STEP3_TABS_RENDER_OBJECT}
        activeTab={activeTab}
      />

      <div className='flex justify-end items-center col-start-3 pt-2.5 min-h-24'>
        <Button
          variant='outlined' rightIcon={<SearchIcon textColor='text-primary' />} type='submit'
          loading={loading}
        >
          جستجو
        </Button>
      </div>
    </ReactHookFormWrapper>
  );
}

export default AdminHighRiskFormStep3SearchUserForm;
