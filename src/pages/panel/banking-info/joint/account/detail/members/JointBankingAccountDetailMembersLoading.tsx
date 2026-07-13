import Table from "../../../../../../../components/others/Table/Table.tsx";
import {JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS} from "./index.constances.ts";

function JointBankingAccountDetailMembersLoading() {
  return (
    <Table columns={JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS} data={[]} loading />
  );
}

export default JointBankingAccountDetailMembersLoading;
