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


function PanelLegalRepresentativeInformationPageLegalRepresentative() {

  const {getActivePersonNationalId} = getActivePersonData()

  const {
    data, isFetching, error
  } = useFetchData<PanelLegalRepresentativeInformationResponseType>({
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
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER]: '10004567',
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.FIRST_NAME]: 'سعید',
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.LAST_NAME]: 'رضایی',
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.NATIONAL_CODE_OR_FOREIGN_ID]: '0012354782',
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.RELATION]: 'وکالت',
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.NATIONALITY]: 'ایرانی',
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.DOCUMENT_TYPE]: 'وکالت نامه',
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.DOCUMENT_NUMBER_OR_CERTIFICATE_NUMBER]: 'V-35670',
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.AUTHENTICATION_CODE]: 'XYZ123',
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.ISSUING_AUTHORITY]: 'دادگستری تهران',
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.PLACE_OF_ISSUE]: 'تهران',
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.ISSUE_DATE]: '2025-10-01',
      [PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.EXPIRATION_DATE]: '2027-10-01',
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