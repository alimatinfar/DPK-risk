import {RiskCalculation} from "./report/RiskCalculation.tsx";
import usePanelCustomerRiskPage from "./hooks/usePanelCustomerRiskPage.ts";


function PanelCustomerRiskPage() {

  const {
    loading, fetchRiskData, responseData, error
  } = usePanelCustomerRiskPage()

  return (
    <div className='flex-center pb-5'>
      <RiskCalculation
        loading={loading} fetchRiskData={fetchRiskData} responseData={responseData} error={error}
      />
    </div>
  );
}

export default PanelCustomerRiskPage;
