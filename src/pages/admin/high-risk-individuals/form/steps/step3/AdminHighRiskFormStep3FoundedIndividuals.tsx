import type {ResultPersonCardDataType} from "../../../../../search/result/ResultCard.types";
import AdminHighRiskFormStep3FoundedIndividualsCard from "./AdminHighRiskFormStep3FoundedIndividualsCard";


export type AdminHighRiskFormStep3FoundedIndividualsProps = {
  foundedIndividuals: ResultPersonCardDataType[];
  setUserDuplicateModalState: (value: () => () => void |  undefined) => void;
  closeUserDuplicateModalHandler: () => void;
}

function AdminHighRiskFormStep3FoundedIndividuals(
  {
    foundedIndividuals, setUserDuplicateModalState, closeUserDuplicateModalHandler
  }: AdminHighRiskFormStep3FoundedIndividualsProps
) {
  return foundedIndividuals?.length !== 0 ? (
    <div className='grid grid-cols-3 gap-4 pt-4 border-t border-gray-200'>
      {foundedIndividuals?.map((item, index) => (
        <AdminHighRiskFormStep3FoundedIndividualsCard
          key={item.customerId} data={item} setUserDuplicateModalState={setUserDuplicateModalState}
          closeUserDuplicateModalHandler={closeUserDuplicateModalHandler}
        />
      ))}
    </div>
  ) : null;
}

export default AdminHighRiskFormStep3FoundedIndividuals;
