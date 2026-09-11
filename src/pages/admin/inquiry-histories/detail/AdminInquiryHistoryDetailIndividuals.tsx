import AdminHighRiskIndividualsLettersDetailIndividualsCategories
  from "../../high-risk-individuals/letters/detail/individuals/AdminHighRiskIndividualsLettersDetailIndividualsCategories.tsx";
import useAdminInquiryHistoryDetailIndividuals from "./hooks/useAdminInquiryHistoryDetailIndividuals.tsx";

function AdminInquiryHistoryDetailIndividuals() {

  const {
    individualsList
  } = useAdminInquiryHistoryDetailIndividuals()

  return (
    <AdminHighRiskIndividualsLettersDetailIndividualsCategories
      data={individualsList}
    />
  );
}

export default AdminInquiryHistoryDetailIndividuals;
