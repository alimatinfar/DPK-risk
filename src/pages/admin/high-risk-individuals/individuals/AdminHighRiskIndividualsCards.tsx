import SearchPageSkeleton from "../../../search/skeleton/SearchPageSkeleton.tsx";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../search/form/SearchPageForm.constances.ts";
import RenderLogic from "../../../../components/others/RenderLogic/RenderLogic.tsx";
import {FAKE_DATA} from "./index.constances.ts";
import AdminHighRiskIndividualsCardElement from "./AdminHighRiskIndividualsCardElement.tsx";
import ResultPersonCategory2 from "../../../search/result/ResultPersonCategory2.tsx";
import ResultPersonCategoryWrapper from "../../../search/result/ResultPersonCategoryWrapper.tsx";

function AdminHighRiskIndividualsCards() {
  return (
    <RenderLogic
      isEmpty={false}
      error={null}
      isLoading={false}
      loadingElement={<SearchPageSkeleton />}
    >
      <ResultPersonCategoryWrapper renderCallback={(item) => (
        <ResultPersonCategory2
          key={item.name} personTypeItem={item} resultData={FAKE_DATA}
          CardElement={AdminHighRiskIndividualsCardElement}
        />
      )} />
    </RenderLogic>
  );
}

export default AdminHighRiskIndividualsCards;
