import Table from "../../../../components/others/Table/Table.tsx";
import {
  PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS,
  PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS

} from "./index.constances.ts";
import getActivePersonData from "../../utils/getActivePersonData.ts";
import useFetchData from "../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../request/constances/apis.ts";
import {useMemo} from "react";
import RenderLogic from "../../../../components/others/RenderLogic/RenderLogic.tsx";
import type {PanelLegalRepresentativeInfoMajorOwnersResponseType} from "./index.types.ts";


function PanelLegalRepresentativeInformationPageMajorOwners() {

  const {getActivePersonNationalId} = getActivePersonData()

  const {
    data, isFetching, error
  } = useFetchData<PanelLegalRepresentativeInfoMajorOwnersResponseType>({
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
      [PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER]: '40001234',
      [PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.PERSON_TYPE]: 'حقیقی',
      [PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.NATIONALITY]: 'ایرانی',
      [PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.FIRST_NAME]: 'سعید',
      [PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.LAST_NAME]: 'موسوی',
      [PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.NATIONAL_CODE_OR_FOREIGN_ID]: '1231231231',
      [PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.COMPANY_OR_INSTITUTE_NAME]: '-',
      [PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.NATIONAL_ID]: '-',
      [PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.MANAGEMENT_SEAT_STATUS]: 'دارد',
      [PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.CAPITAL_AMOUNT]: 5000000000,
      [PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.OWNERSHIP_PERCENTAGE]: '25%',
      [PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.FROM_DATE]: '2022-05-01',
      [PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS_KEYS.TO_DATE]: '-',
    }))
  }, [data])


  return (
    <RenderLogic
      error={error} isLoading={isFetching}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelLegalRepresentativeInformationPageMajorOwners;