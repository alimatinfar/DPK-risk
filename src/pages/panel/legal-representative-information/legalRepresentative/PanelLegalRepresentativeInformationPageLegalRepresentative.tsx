import Table from "../../../../components/others/Table/Table.tsx";
import {
  PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS,
  PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS
} from "./index.constances.ts";
import getActivePersonData from "../../utils/getActivePersonData.ts";
import useFetchData from "../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../request/constances/apis.ts";
import {useMemo} from "react";
import type {PanelLegalRepresentativeInformationResponseType} from "./index.types.ts";
import RenderLogic from "../../../../components/others/RenderLogic/RenderLogic.tsx";
import displayDate from "../../../../utils/dateAndTIme/displayDate.ts";


function PanelLegalRepresentativeInformationPageLegalRepresentative() {

  const {activePersonData} = getActivePersonData()

  const {
    data, isFetching, error
  } = useFetchData<PanelLegalRepresentativeInformationResponseType>({
    axiosConfig: {
      url: APIS.GET_LEGAL_REPRESENTATIVE_INFO,
      params: {
        customerId: activePersonData?.customerId
      }
    }
  })

  const tableData = useMemo(function () {
    if (!data?.data) return []

    return data?.data?.map((item, index) => ({
      id: index,
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER]: item?.customerId,
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.FIRST_NAME]: item?.firstName,
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.LAST_NAME]: item?.lastName,
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.NATIONAL_CODE_OR_FOREIGN_ID]: item?.nationalID,
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.RELATION]: item?.ratio,
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.NATIONALITY]: item?.nationality,
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.DOCUMENT_TYPE]: item?.certificateType,
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.DOCUMENT_NUMBER_OR_CERTIFICATE_NUMBER]: item?.certificateNumber,
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.AUTHENTICATION_CODE]: item?.authenticationCode,
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.ISSUING_AUTHORITY]: item?.issuingAuthority,
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.PLACE_OF_ISSUE]: item?.issuancePlace,
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.ISSUE_DATE]: displayDate(item?.dateOfIssuance),
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.EXPIRATION_DATE]: displayDate(item?.expirationDate),
    }))
  }, [data])


  return (
    <RenderLogic
      error={error} isLoading={isFetching}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelLegalRepresentativeInformationPageLegalRepresentative;