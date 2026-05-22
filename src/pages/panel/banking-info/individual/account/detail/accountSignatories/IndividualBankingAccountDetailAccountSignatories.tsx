import Table from "../../../../../../../components/others/Table/Table.tsx";
import {
  PANEL_INDIVIDUAL_ACCOUNT_DETAIL_SIGNATORIES_TABLE_COLUMNS,
  PANEL_INDIVIDUAL_ACCOUNT_DETAIL_SIGNATORIES_TABLE_COLUMNS_KEYS
} from "./index.constances.ts";
import {useParams} from "react-router";
import useFetchData from "../../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import {useMemo} from "react";
import displayAvailableValues from "../../../../../../../utils/display/displayAvailableValues.ts";
import type {IndividualBankingAccountDetailAccountSignatoriesResponseType} from "./index.types.ts";
import RenderLogic from "../../../../../../../components/others/RenderLogic/RenderLogic.tsx";


function IndividualBankingAccountDetailAccountSignatories() {


  const {id: accountNumber} = useParams()

  const {
    data, isFetching, error
  } = useFetchData<IndividualBankingAccountDetailAccountSignatoriesResponseType>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_ACCOUNT_SIGNATORS,
      method: "POST",
      params: {
        accountNumber
      }
    }
  })

  const tableData = useMemo(function () {
    if (!data?.data) return []

    return data?.data?.map((item, index) => ({
      id: index,
      [PANEL_INDIVIDUAL_ACCOUNT_DETAIL_SIGNATORIES_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER]: item?.customerId,
      [PANEL_INDIVIDUAL_ACCOUNT_DETAIL_SIGNATORIES_TABLE_COLUMNS_KEYS.CUSTOMER_TYPE]: item?.legalTypeTitle,
      [PANEL_INDIVIDUAL_ACCOUNT_DETAIL_SIGNATORIES_TABLE_COLUMNS_KEYS.NAME]: displayAvailableValues(item?.firstName, item?.lastName, item?.legalName || ''),
      [PANEL_INDIVIDUAL_ACCOUNT_DETAIL_SIGNATORIES_TABLE_COLUMNS_KEYS.NATIONAL_ID]: displayAvailableValues(item?.nationalIDStr, item?.legalNationalID),
    }))
  }, [data])


  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_INDIVIDUAL_ACCOUNT_DETAIL_SIGNATORIES_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default IndividualBankingAccountDetailAccountSignatories;
