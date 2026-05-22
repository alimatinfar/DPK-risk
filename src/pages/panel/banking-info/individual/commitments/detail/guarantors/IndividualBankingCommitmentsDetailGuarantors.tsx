import {
  PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS, PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS_KEYS
} from "../index.constances.ts";
import Table from "../../../../../../../components/others/Table/Table.tsx";
import {useParams} from "react-router";
import useFetchData from "../../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import {useMemo} from "react";
import displayAvailableValues from "../../../../../../../utils/display/displayAvailableValues.ts";
import RenderLogic from "../../../../../../../components/others/RenderLogic/RenderLogic.tsx";
import type {IndividualBankingCommitmentsDetailGuarantorsResponseType} from "./index.types.ts";



function IndividualBankingCommitmentsDetailGuarantors() {

  const {id: commitmentId} = useParams()

  const {
    data, isFetching, error
  } = useFetchData<IndividualBankingCommitmentsDetailGuarantorsResponseType>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_CUSTOMER_OBLIGATIONS_GUARANTORS,
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
      [PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER]: item?.customerId,
      [PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS_KEYS.CUSTOMER_TYPE]: item?.legalTypeTitle,
      [PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS_KEYS.NAME]: displayAvailableValues(item?.firstName, item?.lastName, item?.legalName || ''),
      [PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS_KEYS.NATIONAL_ID]: displayAvailableValues(item?.nationalID, item?.legalNationalID),
    }))
  }, [data])

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default IndividualBankingCommitmentsDetailGuarantors;
