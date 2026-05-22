import Table from "../../../../../../../components/others/Table/Table.tsx";
import {
  JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS, JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS_KEYS,
} from "./index.constances.ts";
import useFetchData from "../../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import {useMemo} from "react";
import RenderLogic from "../../../../../../../components/others/RenderLogic/RenderLogic.tsx";
import type {JointBankingAccountDetailMembersResponseType} from "./index.types.ts";
import displayAvailableValues from "../../../../../../../utils/display/displayAvailableValues.ts";
import displayDate from "../../../../../../../utils/display/displayDate.ts";
import getActivePersonData from "../../../../../utils/getActivePersonData.ts";
import displayForeignCitizenNationalId from "../../../../../../../utils/display/displayForeignCitizenNationalId.ts";
import displayNaturalNationalId from "../../../../../../../utils/display/displayNaturalNationalId.ts";
import displayLegalNationalId from "../../../../../../../utils/display/displayLegalNationalId.ts";

function JointBankingAccountDetailMembers() {

  const {activePersonData} = getActivePersonData();

  const {
    data, isFetching, error
  } = useFetchData<JointBankingAccountDetailMembersResponseType>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_ACCOUNT_SHARE_MEMBERS,
      params: {
        customerId: activePersonData?.customerId
      }
    }
  })

  const tableData = useMemo(function () {
    if (!data?.data) return []

    return data?.data?.map((item, index) => ({
      id: index,
      [JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER]: item?.customerId,
      [JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS_KEYS.CUSTOMER_TYPE]: item?.customerTypeTitle,
      [JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS_KEYS.NATIONALITY]: item?.nationality,
      [JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS_KEYS.NAME]: displayAvailableValues(item?.firstName, item?.lastName, item?.legalName),
      [JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS_KEYS.IDENTIFICATION_CODE]: displayAvailableValues(
        item?.nationality ? displayForeignCitizenNationalId(item?.nationalID) : displayNaturalNationalId(item?.nationalID),
        displayLegalNationalId(item?.legalNationalID)
      ),
      [JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS_KEYS.SHEHAB_ID]: item?.shahabId,
      [JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS_KEYS.LAST_CUSTOMER_UPDATE_DATE]: displayDate(item?.changeLastDate),
      [JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS_KEYS.CUSTOMER_BRANCH_CODE]: item?.branchCode,
      [JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS_KEYS.BRANCH_NAME]: item?.branchName,
      [JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS_KEYS.CUSTOMER_REGION_CODE]: item?.areaCode,
      [JOINT_ACCOUNT_JOINT_ACCOUNT_MEMBERS_TABLE_COLUMNS_KEYS.REGION_NAME]: item?.areaName,
    }))
  }, [data])


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
