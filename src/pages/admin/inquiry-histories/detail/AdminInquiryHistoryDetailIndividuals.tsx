import AdminHighRiskIndividualsLettersDetailIndividualsCategories
  from "../../high-risk-individuals/letters/detail/individuals/AdminHighRiskIndividualsLettersDetailIndividualsCategories.tsx";
import useAdminInquiryHistoryDetailIndividuals from "./hooks/useAdminInquiryHistoryDetailIndividuals.tsx";
import type {AdminInquiryHistoryLetterDetailProps} from "./index.types.ts";

function AdminInquiryHistoryDetailIndividuals(
  {responseData}: AdminInquiryHistoryLetterDetailProps
) {

  const {
    individualsList
  } = useAdminInquiryHistoryDetailIndividuals({
    responseData
  })

  return (
    <AdminHighRiskIndividualsLettersDetailIndividualsCategories
      data={individualsList}
    />
  );
}

export default AdminInquiryHistoryDetailIndividuals;
