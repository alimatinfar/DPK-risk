import {
  ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS, ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS_KEYS
} from "./index.constances.tsx";
import TableRenderLogic from "../../../../components/others/RenderLogic/TableRenderLogic.tsx";
import type {UseFilterReturnProps} from "../../../../components/Form/FilterForm/hooks/useFilter.ts";
import useAdminHighRiskIndividualsLettersTable from "./hooks/useAdminHighRiskIndividualsLettersTable.ts";


export type AdminHighRiskIndividualsLettersTableProps = Pick<UseFilterReturnProps<any>, 'filters' | 'setCurrentPage' | 'setRowsPerPage'>

function AdminHighRiskIndividualsLettersTable(
  {filters, setCurrentPage, setRowsPerPage}: AdminHighRiskIndividualsLettersTableProps
) {

  const {
    error, isFetching, tableData, totalLength
  } = useAdminHighRiskIndividualsLettersTable({
    filters
  })

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS
      }}
      paginationProps={{
        totalLength,
        currentPage: filters.currentPage,
        rowsPerPage: filters.rowsPerPage,
        onPageChange: setCurrentPage,
        onRowsPerPageChange: setRowsPerPage
      }}
    />
  );
}

export default AdminHighRiskIndividualsLettersTable;
