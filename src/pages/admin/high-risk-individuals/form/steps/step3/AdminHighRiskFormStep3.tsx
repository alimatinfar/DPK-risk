import Tab from "../../../../../../components/others/Tab/Tab.tsx";
import AdminHighRiskIndividualsFormButtons from "../../AdminHighRiskIndividualsFormButtons.tsx";
import {
  ADMIN_HIGH_RISK_INDIVIDUALS_FORM_STEP3_TABS,
  ADMIN_HIGH_RISK_INDIVIDUALS_FORM_STEP3_TABS_RENDER_OBJECT
} from "./index.constances";
import useActiveTab from "../../../../../../components/others/Tab/hooks/useActiveTab";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../../search/form/SearchPageForm.constances";
import TabContentRender from "../../../../../../components/others/Tab/TabContentRender.tsx";
import ReactHookFormWrapper
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import useReactHookFormWrapper
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import type {
  ForeignCitizenFormFieldsType,
  LegalFormFieldsType,
  NaturalFormFieldsType
} from "../../../../../search/form/SearchPageForm.types";
import Card from "../../../../../../components/others/Card/Card.tsx";
import Button from "../../../../../../components/Form/Button/Button.tsx";
import SearchIcon from "../../../../../../components/svg/SearchIcon.tsx";


function AdminHighRiskFormStep3() {

  const [activeTab, setActiveTab] = useActiveTab(SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name)

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper({
    onSubmitHandler
  })

  function onSubmitHandler(formData: NaturalFormFieldsType | LegalFormFieldsType | ForeignCitizenFormFieldsType) {
    console.log({formData})
  }

  return (
    <div className='flex flex-col gap-y-4'>
      <Card className='flex flex-col gap-y-4'>
        <Tab
          tabs={ADMIN_HIGH_RISK_INDIVIDUALS_FORM_STEP3_TABS}
          activeTab={activeTab} onChange={setActiveTab}
        />

        <ReactHookFormWrapper
          formMethods={formMethods} onSubmit={onSubmit} className='grid grid-cols-3 gap-4'
        >
          <TabContentRender
            renderObject={ADMIN_HIGH_RISK_INDIVIDUALS_FORM_STEP3_TABS_RENDER_OBJECT}
            activeTab={activeTab}
          />

          <div className='flex justify-end items-center col-start-3 pt-2.5'>
            <Button
              variant='outlined' rightIcon={<SearchIcon />}
            >
              جستجو
            </Button>
          </div>
        </ReactHookFormWrapper>
      </Card>

      <AdminHighRiskIndividualsFormButtons/>
    </div>
  );
}

export default AdminHighRiskFormStep3;
