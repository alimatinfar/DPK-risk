import TabContentRender from "../../../../../../components/others/Tab/TabContentRender.tsx";
import {
  type ReactHookFormWrapperProps
} from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import {
  ADMIN_HIGH_RISK_INDIVIDUALS_FORM_STEP3_TABS_RENDER_OBJECT
} from "./index.constances.tsx";
import type {TabType} from "../../../../../../components/others/Tab/Tab";
import SearchFormWrapper from "../../../../../../components/Form/FormLayout/SearchFormWrapper.tsx";


type Props = {
  activeTab: TabType['id'];
  loading: boolean;
} & Pick<ReactHookFormWrapperProps, 'formMethods' | 'onSubmit'>

function AdminHighRiskFormStep3SearchUserForm(
  {activeTab, formMethods, onSubmit, loading}: Props
) {
  return (
    <SearchFormWrapper
      formMethods={formMethods} onSubmit={onSubmit} loading={loading}
    >
      <TabContentRender
        renderObject={ADMIN_HIGH_RISK_INDIVIDUALS_FORM_STEP3_TABS_RENDER_OBJECT}
        activeTab={activeTab}
      />
    </SearchFormWrapper>
  );
}

export default AdminHighRiskFormStep3SearchUserForm;
