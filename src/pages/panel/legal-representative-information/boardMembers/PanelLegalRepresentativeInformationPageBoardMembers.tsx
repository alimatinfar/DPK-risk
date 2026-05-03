import Table from "../../../../components/others/Table/Table.tsx";
import {
  PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS, PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS,
} from "./index.constances.ts";
import useFetchData from "../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../request/constances/apis.ts";
import getActivePersonData from "../../utils/getActivePersonData.ts";
import type {PanelLegalRepresentativeBoardMembersResponseType} from "./index.types.ts";
import {useMemo} from "react";
import RenderLogic from "../../../../components/others/RenderLogic/RenderLogic.tsx";


function PanelLegalRepresentativeInformationPageBoardMembers() {

  const {getActivePersonNationalId} = getActivePersonData()

  const {
    data, isFetching, error
  } = useFetchData<PanelLegalRepresentativeBoardMembersResponseType>({
    axiosConfig: {
      url: APIS.GET_MAIN_INCOME_INFO,
      params: {
        nationalID: getActivePersonNationalId()
      }
    }
  })

  const tableData = useMemo(function () {
    if (!data?.data) return []

    return data?.data?.map((item, index) => ({
      id: index,
      [PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER]: '20007891',
      [PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.PERSON_TYPE]: 'حقیقی',
      [PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.NATIONALITY]: 'ایرانی',
      [PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.FIRST_NAME]: 'الهام',
      [PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.LAST_NAME]: 'کاظمی',
      [PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.NATIONAL_CODE_OR_FOREIGN_ID]: '0987654321',
      [PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.COMPANY_OR_INSTITUTE_NAME]: '-',
      [PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.NATIONAL_ID]: '-',
      [PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.BOARD_POSITION]: 'نایب رئیس هیئت مدیره',
      [PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.BOARD_START_DATE]: '2023-09-01',
      [PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.BOARD_END_DATE]: '2026-09-01',
    }))
  }, [data])

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
    >
      <Table
        columns={PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelLegalRepresentativeInformationPageBoardMembers;