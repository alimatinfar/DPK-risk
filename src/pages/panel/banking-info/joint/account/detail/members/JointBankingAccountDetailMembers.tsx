import Table from "../../../../../../../components/others/Table/Table.tsx";
import {
  JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS,
} from "./index.constances.ts";
import RenderLogic from "../../../../../../../components/others/RenderLogic/RenderLogic.tsx";
import useJointBankingAccountDetailMembers from "./hooks/useJointBankingAccountDetailMembers.ts";



function JointBankingAccountDetailMembers() {

  const {
    isFetching, error, tableData
  } = useJointBankingAccountDetailMembers()

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default JointBankingAccountDetailMembers;
