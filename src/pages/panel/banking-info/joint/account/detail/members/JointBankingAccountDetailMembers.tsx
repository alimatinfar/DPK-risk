import Table from "../../../../../../../components/others/Table/Table.tsx";
import {
  JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS,
  JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_FAKE_DATA
} from "./index.constances.ts";

function JointBankingAccountDetailMembers() {
  return (
    <Table
      columns={JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS}
      data={JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_FAKE_DATA}
    />
  );
}

export default JointBankingAccountDetailMembers;