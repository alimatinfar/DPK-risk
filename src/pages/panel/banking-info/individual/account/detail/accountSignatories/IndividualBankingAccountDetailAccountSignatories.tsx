import {
  PANEL_INDIVIDUAL_ACCOUNT_DETAIL_SIGNATORIES_TABLE_COLUMNS,
} from "./index.constances.ts";
import useIndividualBankingAccountDetailAccountSignatories
  from "./hooks/useIndividualBankingAccountDetailAccountSignatories.ts";
import TableRenderLogic from "../../../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


function IndividualBankingAccountDetailAccountSignatories() {

  const {
    isFetching, error, tableData
  } = useIndividualBankingAccountDetailAccountSignatories()

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: PANEL_INDIVIDUAL_ACCOUNT_DETAIL_SIGNATORIES_TABLE_COLUMNS
      }}
    />
  );
}

export default IndividualBankingAccountDetailAccountSignatories;
