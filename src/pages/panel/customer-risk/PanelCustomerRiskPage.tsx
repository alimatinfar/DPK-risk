import PanelCustomerRiskEmptyState from "./PanelCustomerRiskEmptyState.tsx";
import {lazy, useState} from "react";
import PanelCustomerRiskLoading from "./animationLoading/PanelCustomerRiskLoading.tsx";
import PanelCustomerRiskReport from "./report/PanelCustomerRiskReport.tsx";
import {PANEL_CUSTOMER_RISK_REPORT_FAKE_DATA} from "./report/index.utils.tsx";


function PanelCustomerRiskPage() {

  const [isCalculating, setIsCalculating] = useState(false)
  const [reportIsReady, setReportIsReady] = useState(false)

  function startCalculatingHandler() {
    setIsCalculating(true)

    setTimeout(function () {
      setIsCalculating(false)
      setReportIsReady(true)
    }, 6000)
  }

  return (
    <div className='flex-center pt-8'>
      {reportIsReady ? (
        <PanelCustomerRiskReport data={PANEL_CUSTOMER_RISK_REPORT_FAKE_DATA} />
      ) : isCalculating ? (
        <PanelCustomerRiskLoading/>
      ) : (
        <PanelCustomerRiskEmptyState startCalculatingHandler={startCalculatingHandler}/>
      )}
    </div>
  );
}

export default PanelCustomerRiskPage;
