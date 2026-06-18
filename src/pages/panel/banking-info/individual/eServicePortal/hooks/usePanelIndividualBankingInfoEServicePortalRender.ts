import {useState} from "react";
import type {SelectProps} from "../../../../../../components/Form/Select/select-exports.ts";


function usePanelIndividualBankingInfoEServicePortalRender() {

  const [selectedCustomerNumber, setSelectedCustomerNumber] = useState<SelectProps['value']>(undefined)

  return {
    selectedCustomerNumber, setSelectedCustomerNumber
  }
}

export default usePanelIndividualBankingInfoEServicePortalRender;
