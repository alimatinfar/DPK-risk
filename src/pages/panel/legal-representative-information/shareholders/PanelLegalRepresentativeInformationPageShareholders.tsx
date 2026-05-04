import Table from "../../../../components/others/Table/Table.tsx";
import {
  PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS,
  PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS
} from "./index.constances.ts";
import getActivePersonData from "../../utils/getActivePersonData.ts";
import useFetchData from "../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../request/constances/apis.ts";
import {useMemo} from "react";
import RenderLogic from "../../../../components/others/RenderLogic/RenderLogic.tsx";
import type {PanelLegalRepresentativeInfoShareholdersResponseType} from "./index.types.ts";


function PanelLegalRepresentativeInformationPageShareholders() {


  const {getActivePersonNationalId} = getActivePersonData()

  const {
    data, isFetching, error
  } = useFetchData<PanelLegalRepresentativeInfoShareholdersResponseType>({
    axiosConfig: {
      url: APIS.GET_LEGAL_INSPECTOR_INFO,
      params: {
        nationalID: getActivePersonNationalId()
      }
    }
  })

  const tableData = useMemo(function () {
    if (!data?.data) return []

    return data?.data?.map((item, index) => ({
      id: index,
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER]: '30007890',
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.PERSON_TYPE]: 'حقیقی',
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.NATIONALITY]: 'ایرانی',
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.FIRST_NAME]: 'مینا',
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.LAST_NAME]: 'حسینی',
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.NATIONAL_CODE_OR_FOREIGN_ID]: '5566778899',
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.COMPANY_OR_INSTITUTE_NAME]: '-',
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.NATIONAL_ID]: '-',
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.MANAGEMENT_SEAT_STATUS]: 'دارد',
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.NUMBER_OF_SHARES]: 85000,
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.SHARE_PERCENTAGE]: '8.5%',
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.FROM_DATE]: '2023-01-10',
      [PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS_KEYS.TO_DATE]: '-',
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