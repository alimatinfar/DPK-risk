import Table from "../../../../components/others/Table/Table.tsx";
import {ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS} from "./index.constances.tsx";

function AdminHighRiskIndividualsLettersTableLoading() {
  return (
    <Table
      columns={ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS} data={[]} loading
    />
  );
}

export default AdminHighRiskIndividualsLettersTableLoading;
