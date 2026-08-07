import SearchPageSkeleton from "../../../search/skeleton/SearchPageSkeleton.tsx";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../search/form/SearchPageForm.constances.ts";
import RenderLogic from "../../../../components/others/RenderLogic/RenderLogic.tsx";
import {FAKE_DATA} from "./index.constances.ts";
import ResultPersonCategory from "../../../search/result/ResultPersonCategory.tsx";
import AdminHighRiskIndividualsCardElement from "./AdminHighRiskIndividualsCardElement.tsx";


function AdminHighRiskIndividualsCards() {
  return (
    <RenderLogic
      isEmpty={false}
      error={null}
      isLoading={false}
      loadingElement={<SearchPageSkeleton />}
    >
      <div className='flex flex-col gap-y-4'>
        {Object.values(SEARCH_PAGE_FORM_PERSON_TYPE_KEYS).map(item => (
          <ResultPersonCategory
            key={item.name} personTypeItem={item} resultData={FAKE_DATA}
            CardElement={AdminHighRiskIndividualsCardElement}
            wrapperBackground='border border-gray-200' headerClassName='bg-gray-50'
            headerBorderBottomClassName='border-b border-gray-200'
          />
        ))}
      </div>
    </RenderLogic>
  );
}

export default AdminHighRiskIndividualsCards;
