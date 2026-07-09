import type {TableColumnType} from "../../../../../../components/others/Table/TableExports.ts";
import type {TabsProps} from "../../../../../../components/others/Tab/Tab.tsx";
import {lazy} from "react";
import TableSuspense from "../../../../../../components/others/RenderLogic/TableSuspense.tsx";
import IndividualBankingCommitmentsDetailBeneficiariesLoading
  from "./beneficiaries/IndividualBankingCommitmentsDetailBeneficiariesLoading.tsx";

const IndividualBankingCommitmentsDetailBeneficiaries = lazy(() => import(
  "./beneficiaries/IndividualBankingCommitmentsDetailBeneficiaries.tsx"
  ))
const IndividualBankingCommitmentsDetailGuarantors = lazy(() => import(
  "./guarantors/IndividualBankingCommitmentsDetailGuarantors.tsx"
  ))


export const PANEL_INDIVIDUAL_BANKING_COMMITMENTS_DETAIL_TABS_KEYS = {
  BENEFICIARIES: 'beneficiaries',
  GUARANTORS: 'guarantors',
}

export const PANEL_INDIVIDUAL_BANKING_COMMITMENTS_DETAIL_TABS: TabsProps['tabs'] = [
  {
    id: PANEL_INDIVIDUAL_BANKING_COMMITMENTS_DETAIL_TABS_KEYS.BENEFICIARIES,
    title: 'ذینفعان'
  },
  {
    id: PANEL_INDIVIDUAL_BANKING_COMMITMENTS_DETAIL_TABS_KEYS.GUARANTORS,
    title: 'ضامنین'
  },
]

export const PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS_KEYS = {
  CUSTOMER_NUMBER: 'customerNumber',
  CUSTOMER_TYPE: 'customerType',
  NAME: 'name',
  NATIONAL_ID: 'nationalId',
} as const;

export const PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: 'شماره مشتری',
    accessor: PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER,
  },
  {
    label: 'نوع مشتری',
    accessor: PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS_KEYS.CUSTOMER_TYPE,
  },
  {
    label: 'نام و نام خانوادگی / نام شرکت',
    accessor: PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS_KEYS.NAME,
  },
  {
    label: 'کد ملی / شناسه فراگیر اتباع / شناسه ملی',
    accessor: PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS_KEYS.NATIONAL_ID,
  },
]

export const PANEL_INDIVIDUAL_BANKING_COMMITMENTS_DETAIL_RENDER_OBJECT = {
  [PANEL_INDIVIDUAL_BANKING_COMMITMENTS_DETAIL_TABS_KEYS.BENEFICIARIES]: (
    <TableSuspense fallback={<IndividualBankingCommitmentsDetailBeneficiariesLoading />}>
      <IndividualBankingCommitmentsDetailBeneficiaries/>
    </TableSuspense>
  ),
  [PANEL_INDIVIDUAL_BANKING_COMMITMENTS_DETAIL_TABS_KEYS.GUARANTORS]: (
    <TableSuspense fallback={<div>salam</div>}>
      <IndividualBankingCommitmentsDetailGuarantors/>
    </TableSuspense>
  ),
}
