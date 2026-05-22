import Table from "../../../../../../../components/others/Table/Table.tsx";
import {
  INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS, INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS_KEYS,
} from "./index.constances.ts";
import {useParams} from "react-router";
import useFetchData from "../../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import {useMemo} from "react";
import RenderLogic from "../../../../../../../components/others/RenderLogic/RenderLogic.tsx";
import type {IndividualBankingAccountDetailSaptaMobileNumbersResponseType} from "./index.types.ts";
import displayAvailableValues from "../../../../../../../utils/display/displayAvailableValues.ts";
import displayForeignCitizenNationalId from "../../../../../../../utils/display/displayForeignCitizenNationalId.ts";
import displayNaturalNationalId from "../../../../../../../utils/display/displayNaturalNationalId.ts";
import displayLegalNationalId from "../../../../../../../utils/display/displayLegalNationalId.ts";


function IndividualBankingAccountDetailSaptaMobileNumbers() {

  const {id: accountNumber} = useParams()

  const {
    data, isFetching, error
  } = useFetchData<IndividualBankingAccountDetailSaptaMobileNumbersResponseType>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_ACCOUNT_SAPTA_MOBILE,
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
      [INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS_KEYS.MOBILE_NUMBER]: item?.mobileNo,
      [INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS_KEYS.OWNER_TYPE]: item?.legalTypeTitle,
      [INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS_KEYS.NAME]: displayAvailableValues(item?.firstName, item?.lastName, item?.legalName),
      [INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS_KEYS.NATIONAL_ID]: displayAvailableValues(
        item?.nationality ? displayForeignCitizenNationalId(item?.nationalID) : displayNaturalNationalId(item?.nationalID),
        displayLegalNationalId(item?.legalNationalID)
      ),
    }))
  }, [data])

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default IndividualBankingAccountDetailSaptaMobileNumbers;
