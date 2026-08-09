import SearchPageSkeleton from "../../../search/skeleton/SearchPageSkeleton.tsx";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../search/form/SearchPageForm.constances.ts";
import RenderLogic from "../../../../components/others/RenderLogic/RenderLogic.tsx";
import {FAKE_DATA} from "./index.constances.ts";
import AdminHighRiskIndividualsCardElement from "./AdminHighRiskIndividualsCardElement.tsx";
import ResultPersonCategory2 from "../../../search/result/ResultPersonCategory2.tsx";

function AdminHighRiskIndividualsCards() {
  return (
    <RenderLogic
      isEmpty={false}
      error={null}
      isLoading={false}
      loadingElement={<SearchPageSkeleton />}
    >
      <div className='flex flex-col gap-y-4'>
        {Object.values(SEARCH_PAGE_FORM_PERSON_TYPE_KEYS).map((item) => (
          <ResultPersonCategory2
            key={item.name} personTypeItem={item} resultData={FAKE_DATA}
            CardElement={AdminHighRiskIndividualsCardElement}
          />
        ))}
      </div>
    </RenderLogic>
  );
}

export default AdminHighRiskIndividualsCards;
