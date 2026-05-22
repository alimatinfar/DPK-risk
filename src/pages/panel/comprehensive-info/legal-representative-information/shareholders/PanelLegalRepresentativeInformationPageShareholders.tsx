import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS,
  PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS
} from "./index.constances.ts";
import getActivePersonData from "../../../utils/getActivePersonData.ts";
import useFetchData from "../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../request/constances/apis.ts";
import {useMemo} from "react";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import type {PanelLegalRepresentativeInfoShareholdersResponseType} from "./index.types.ts";
import displayDate from "../../../../../utils/display/displayDate.ts";
import displayAvailableValues from "../../../../../utils/display/displayAvailableValues.ts";
import displayForeignCitizenNationalId from "../../../../../utils/display/displayForeignCitizenNationalId.ts";
import displayLegalNationalId from "../../../../../utils/display/displayLegalNationalId.ts";
import displayNaturalNationalId from "../../../../../utils/display/displayNaturalNationalId.ts";


function PanelLegalRepresentativeInformationPageShareholders() {

  const {activePersonData} = getActivePersonData()

  const {
    data, isFetching, error
  } = useFetchData<PanelLegalRepresentativeInfoShareholdersResponseType>({
    axiosConfig: {
      url: APIS.GET_SHAREHOLDERS_INFO,
      params: {
        customerId: activePersonData?.customerId
      }
    }
  })

  const tableData = useMemo(function () {
    if (!data?.data) return []

    return data?.data?.map((item, index) => ({
      id: index,
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER]: item?.customerId,
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.PERSON_TYPE]: item?.personalityType,
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.NATIONALITY]: item?.nationality,
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.NAME]: displayAvailableValues(item?.firstName, item?.lastName, item?.companyName),
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.NATIONAL_ID]: item?.nationality ?
        displayForeignCitizenNationalId(item?.nationalID) : item?.legalName ?
          displayLegalNationalId(item?.nationalID) : displayNaturalNationalId(item?.nationalID),
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.MANAGEMENT_SEAT_STATUS]: item?.managementStatus,
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.NUMBER_OF_SHARES]: item?.sharesNumber,
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.SHARE_PERCENTAGE]: item?.percentageOfTotalShares,
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.FROM_DATE]: displayDate(item?.fromDate),
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.TO_DATE]: displayDate(item?.toDate),
    }))
  }, [data])


  return (
    <RenderLogic
      error={error} isLoading={isFetching}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelLegalRepresentativeInformationPageShareholders;
