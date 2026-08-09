import type {DetailInfoSectionProps} from "../../../../../../../components/others/DetailInfo/DetailInfoSection";
import useAdminHighRiskIndividualsLettersDetailDocumentsDescription
  from "./useAdminHighRiskIndividualsLettersDetailDocumentsDescription.ts";

function useAdminHighRiskIndividualsLettersDetailDocuments() {

  const {
    descriptionItems
  } = useAdminHighRiskIndividualsLettersDetailDocumentsDescription()

  return {
    descriptionItems
  }
}

export default useAdminHighRiskIndividualsLettersDetailDocuments;
