import SearchPageSkeleton from "../../../search/skeleton/SearchPageSkeleton.tsx";
import RenderLogic from "../../../../components/others/RenderLogic/RenderLogic.tsx";
import AdminHighRiskIndividualsCardElement from "./AdminHighRiskIndividualsCardElement.tsx";
import ResultPersonCategory2 from "../../../search/result/ResultPersonCategory2.tsx";
import ResultPersonCategoryWrapper from "../../../search/result/ResultPersonCategoryWrapper.tsx";
import {type ResultPersonCardDataType} from "../../../search/result/ResultCard.types.ts";
import type {UseFilterReturnProps} from "../../../../components/Form/FilterForm/hooks/useFilter.ts";
import useAdminHighRiskIndividualsCards from "./hooks/useAdminHighRiskIndividualsCards.ts";

export type AdminHighRiskIndividualsCardsProps = Pick<UseFilterReturnProps<any>, 'filters'>

function AdminHighRiskIndividualsCards(
  {filters}: AdminHighRiskIndividualsCardsProps
) {

  const {
    cardsData, isFetching, error
  } = useAdminHighRiskIndividualsCards({
    filters
  })

  return (
    <RenderLogic
      isEmpty={cardsData?.length === 0}
      error={error}
      isLoading={isFetching}
      loadingElement={<SearchPageSkeleton />}
    >
      <ResultPersonCategoryWrapper renderCallback={(item) => (
        <ResultPersonCategory2
          key={item.name} personTypeItem={item} resultData={cardsData}
          customContent={(visibleItems) => (
            <div className='grid grid-cols-4 gap-4 p-4'>
              {visibleItems.map(visibleItem => {
                return (
                  <AdminHighRiskIndividualsCardElement
                    data={visibleItem as ResultPersonCardDataType}
                    // documentsNumbers={3} lettersNumbers={5}
                  />
                )
              })}
            </div>
          )}
        />
      )} />
    </RenderLogic>
  );
}

export default AdminHighRiskIndividualsCards;
