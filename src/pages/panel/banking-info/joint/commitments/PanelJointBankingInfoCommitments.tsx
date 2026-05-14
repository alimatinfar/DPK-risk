import Table from "../../../../../components/others/Table/Table.tsx";
import {PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS, PANEL_JOINT_COMMITMENTS_TABLE_FAKE_DATA} from "./index.constances.tsx";
import {useNavigate} from "react-router";
import {useMemo} from "react";
import TABLE_ACCESSORS from "../../../../../components/others/Table/constances/tableAccessors.ts";
import ROUTER_LINKS from "../../../../../constances/routerLinks.ts";
import ArrowIcon2 from "../../../../../components/svg/ArrowIcon2.tsx";

function PanelJointBankingInfoCommitments() {

  const navigate = useNavigate()

  const tableData = useMemo(function () {
    return PANEL_JOINT_COMMITMENTS_TABLE_FAKE_DATA.map(item => ({
      ...item,
      [TABLE_ACCESSORS.TD_ACTIONS_ACCESSOR]: [
        {
          onClick: () => navigate(ROUTER_LINKS.PANEL_JOINT_BANKING_INFORMATION_COMMITMENTS_DETAIL(item.id)),
          icon: <ArrowIcon2 width='100%' height='100%' />,
          title: 'جزئیات',
        }
      ],
    }))
  }, [])

  return (
    <Table
      columns={PANEL_JOINT_COMMITMENTS_TABLE_COLUMNS}
      data={tableData}
    />
  );
}

export default PanelJointBankingInfoCommitments;