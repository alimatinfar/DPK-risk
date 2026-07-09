import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import usePanelEconomicInformationPageSecondarySourceOfIncome
  from "./hooks/usePanelEconomicInformationPageSecondarySourceOfIncome.ts";
import PanelEconomicInformationPageSecondarySourceOfIncomeTable
  from "./PanelEconomicInformationPageSecondarySourceOfIncomeTable.tsx";
import PanelEconomicInformationPageSecondarySourceOfIncomeLoading
  from "./PanelEconomicInformationPageSecondarySourceOfIncomeLoading.tsx";


function PanelEconomicInformationPageSecondarySourceOfIncome() {

  const {
    isFetching, error, tableData
  } = usePanelEconomicInformationPageSecondarySourceOfIncome()

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
      loadingElement={<PanelEconomicInformationPageSecondarySourceOfIncomeLoading />}
    >
      <PanelEconomicInformationPageSecondarySourceOfIncomeTable data={tableData}/>
    </RenderLogic>
  );
}

export default PanelEconomicInformationPageSecondarySourceOfIncome;
