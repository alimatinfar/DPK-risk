import FormStepContextProvider from "../../../../contexts/FormStepContext.tsx";
import AdminHighRiskIndividualsFormPageContent from "./AdminHighRiskIndividualsFormPageContent.tsx";


function AdminHighRiskIndividualsFormPage() {
  return (
    <FormStepContextProvider>
      <AdminHighRiskIndividualsFormPageContent/>
    </FormStepContextProvider>
  );
}

export default AdminHighRiskIndividualsFormPage;
