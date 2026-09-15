import PanelCustomerRiskEmptyState from "./PanelCustomerRiskEmptyState.tsx";
import {lazy, useState} from "react";
const PanelCustomerRiskLoading = lazy(() => import(
  "./animationLoading/PanelCustomerRiskLoading.tsx"
  ));


function PanelCustomerRiskPage() {

  const [isCalculating, setIsCalculating] = useState(false)

  function startCalculatingHandler() {
    setIsCalculating(true)
  }

  return (
    <div className='flex-center pt-8'>
      {isCalculating ? (
        <PanelCustomerRiskLoading/>
      ) : (
        <PanelCustomerRiskEmptyState startCalculatingHandler={startCalculatingHandler}/>
      )}
    </div>
  );
}

export default PanelCustomerRiskPage;
