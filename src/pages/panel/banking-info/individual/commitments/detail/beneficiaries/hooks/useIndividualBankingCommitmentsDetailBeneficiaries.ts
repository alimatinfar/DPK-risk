import {useParams} from "react-router";
import useFetchData from "../../../../../../../../request/hooks/useFetchData.ts";
import type {IndividualBankingCommitmentsDetailBeneficiariesResponseType} from "../index.types.ts";
import APIS from "../../../../../../../../request/constances/apis.ts";
import {useMemo} from "react";
import {PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS_KEYS} from "../../index.constances.tsx";
import displayAvailableValues from "../../../../../../../../utils/display/displayAvailableValues.ts";

function useIndividualBankingCommitmentsDetailBeneficiaries() {

  const {id: commitmentId} = useParams()

  const {
    data, isFetching, error
  } = useFetchData<IndividualBankingCommitmentsDetailBeneficiariesResponseType>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_CUSTOMER_OBLIGATIONS_BENEFICIARY,
      method: "POST",
      params: {
        obligationsNo: commitmentId
      }
    }
  })

  const tableData = useMemo(function () {
    if (!data?.data) return []

    return data?.data?.map((item, index) => ({
      id: index,
      [PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER]: item?.customerIdStr,
      [PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS_KEYS.CUSTOMER_TYPE]: item?.legalTypeTitle,
      [PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS_KEYS.NAME]: displayAvailableValues(item?.firstName, item?.lastName, item?.legalName || ''),
      [PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS_KEYS.NATIONAL_ID]: displayAvailableValues(item?.nationalIDStr, item?.legalNationalIDStr),
    }))
  }, [data])

  return {
    isFetching, error, tableData
  }
}

export default useIndividualBankingCommitmentsDetailBeneficiaries;
