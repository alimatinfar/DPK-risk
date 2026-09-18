import {useState} from "react";
import {RiskCalculation} from "./report/RiskCalculation.tsx";


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
    <div className='flex-center'>
      <RiskCalculation />
    </div>
  );
}

export default PanelCustomerRiskPage;
