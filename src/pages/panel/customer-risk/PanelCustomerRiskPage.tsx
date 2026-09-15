import PanelCustomerRiskEmptyState from "./PanelCustomerRiskEmptyState.tsx";
import PanelCustomerRiskLoading from "./animationLoading/PanelCustomerRiskLoading.tsx";
import {useState} from "react";


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
