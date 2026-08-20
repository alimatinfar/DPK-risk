import RenderLogic from "../../../../../../components/others/RenderLogic/RenderLogic";
import type {ResultPersonCardDataType} from "../../../../../search/result/ResultCard.types";
import SearchPageEmptyStateAfterFilter from "../../../../../search/SearchPageEmptyStateAfterFilter";
import AdminHighRiskFormStep3FoundedIndividualsCard from "./AdminHighRiskFormStep3FoundedIndividualsCard";


type Props = {
  foundedIndividuals?: ResultPersonCardDataType[]
}

function AdminHighRiskFormStep3FoundedIndividuals(
  {foundedIndividuals}: Props
) {
  return foundedIndividuals?.length !== 0 ? (
    <RenderLogic
      isEmpty={false}
      emptyElement={<SearchPageEmptyStateAfterFilter />}
    >
      <div className='grid grid-cols-3 gap-4 pt-4 border-t border-gray-200'>
        {foundedIndividuals?.map((item, index) => (
          <AdminHighRiskFormStep3FoundedIndividualsCard
            key={item.customerId} data={item}
          />
        ))}
      </div>
    </RenderLogic>
  ) : null;
}

export default AdminHighRiskFormStep3FoundedIndividuals;