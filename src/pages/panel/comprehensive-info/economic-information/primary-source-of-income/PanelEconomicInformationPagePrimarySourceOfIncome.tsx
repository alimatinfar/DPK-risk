import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import usePanelEconomicInformationPagePrimarySourceOfIncome
  from "./hooks/usePanelEconomicInformationPagePrimarySourceOfIncome.ts";
import PanelEconomicInformationPagePrimarySourceOfIncomeTable
  from "./PanelEconomicInformationPagePrimarySourceOfIncomeTable.tsx";
import PanelEconomicInformationPagePrimarySourceOfIncomeLoading
  from "./PanelEconomicInformationPagePrimarySourceOfIncomeLoading.tsx";


function PanelEconomicInformationPagePrimarySourceOfIncome() {

  const {
    isFetching, error, tableData
  } = usePanelEconomicInformationPagePrimarySourceOfIncome()

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
      loadingElement={<PanelEconomicInformationPagePrimarySourceOfIncomeLoading />}
    >
      <PanelEconomicInformationPagePrimarySourceOfIncomeTable data={tableData}/>
    </RenderLogic>
  );
}

export default PanelEconomicInformationPagePrimarySourceOfIncome;
