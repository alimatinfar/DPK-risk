import {useMemo} from "react";
import {
  ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS,
  ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_FAKE_DATA
} from "./index.constances.tsx";
import TableRenderLogic from "../../../../components/others/RenderLogic/TableRenderLogic.tsx";
import TABLE_ACCESSORS from "../../../../components/others/Table/constances/tableAccessors.ts";
import {TableDetailAction} from "../../../../components/others/Table/constances/actions/TableDetailAction.tsx";

function AdminHighRiskIndividualsLettersTable() {

  const tableData = useMemo(function () {
    return ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_FAKE_DATA?.map((item, index) => ({
      ...item,
      [TABLE_ACCESSORS.TD_ACTIONS_ACCESSOR]: [
        TableDetailAction(() => {
          console.log('detail')
        })
      ],
    }))
  }, [])

  return (
    <TableRenderLogic
      renderLogicProps={{
        error: null,
        isLoading: false
      }}
      tableProps={{
        data: tableData,
        columns: ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS
      }}
    />
  );
}

export default AdminHighRiskIndividualsLettersTable;
