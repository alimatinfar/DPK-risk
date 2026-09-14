import type {ResultPersonCardDataType} from "../../../../../search/result/ResultCard.types";
import AdminHighRiskFormStep3FoundedIndividualsCard from "./AdminHighRiskFormStep3FoundedIndividualsCard";
import type {AdminHighRiskFormStep3ShareProps} from "./AdminHighRiskFormStep3Share.tsx";
import type {AdminHighRiskFormStep3DuplicateUserModalProps} from "./AdminHighRiskFormStep3DuplicateUserModal.tsx";


export type AdminHighRiskFormStep3FoundedIndividualsProps = {
  foundedIndividuals: ResultPersonCardDataType[];
  setUserDuplicateModalState: (value: AdminHighRiskFormStep3DuplicateUserModalProps['userDuplicateModalState']) => void;
  closeUserDuplicateModalHandler: () => void;
} & Pick<AdminHighRiskFormStep3ShareProps, 'formDataStep1' | 'setFormData' | 'individuals'>

function AdminHighRiskFormStep3FoundedIndividuals(
  {
    foundedIndividuals, setUserDuplicateModalState, closeUserDuplicateModalHandler,
    setFormData, individuals, formDataStep1
  }: AdminHighRiskFormStep3FoundedIndividualsProps
) {
  return foundedIndividuals?.length !== 0 ? (
    <div className='grid grid-cols-3 gap-4 pt-4 border-t border-gray-200'>
      {foundedIndividuals?.map((item, index) => (
        <AdminHighRiskFormStep3FoundedIndividualsCard
          key={item.customerId} data={item} setUserDuplicateModalState={setUserDuplicateModalState}
          closeUserDuplicateModalHandler={closeUserDuplicateModalHandler}
          setFormData={setFormData} individuals={individuals} formDataStep1={formDataStep1}
        />
      ))}
    </div>
  ) : null;
}

export default AdminHighRiskFormStep3FoundedIndividuals;
