import {
  JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS,
} from "./index.constances.ts";
import useJointBankingAccountDetailMembers from "./hooks/useJointBankingAccountDetailMembers.ts";
import TableRenderLogic from "../../../../../../../components/others/RenderLogic/TableRenderLogic.tsx";



function JointBankingAccountDetailMembers() {

  const {
    isFetching, error, tableData
  } = useJointBankingAccountDetailMembers()

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS
      }}
    />
  );
}

export default JointBankingAccountDetailMembers;
