import {type TabsProps} from "../../../../../../components/others/Tab/Tab.tsx";
import {lazy} from "react";
import TableSuspense from "../../../../../../components/others/RenderLogic/TableSuspense.tsx";
import IndividualBankingAccountDetailIssuedChequesLoading
  from "./issuedCheques/IndividualBankingAccountDetailIssuedChequesLoading.tsx";
import IndividualBankingAccountDetailReturnedChequesLoading
  from "./returnedCheques/IndividualBankingAccountDetailReturnedChequesLoading.tsx";
import IndividualBankingAccountDetailTransactionInformationLoading
  from "./accountTransactionInformation/IndividualBankingAccountDetailTransactionInformationLoading.tsx";
import IndividualBankingAccountDetailBlockHistoryLoading
  from "./blockHistory/IndividualBankingAccountDetailBlockHistoryLoading.tsx";

const IndividualBankingAccountDetailTransactionInformation = lazy(() => import(
  "./accountTransactionInformation/IndividualBankingAccountDetailTransactionInformation.tsx"
  ));
const IndividualBankingAccountDetailBlockHistory = lazy(() => import(
  "./blockHistory/IndividualBankingAccountDetailBlockHistory.tsx"
  ));
const IndividualBankingAccountDetailReturnedCheques = lazy(() => import(
  "./returnedCheques/IndividualBankingAccountDetailReturnedCheques.tsx"
  ));
const IndividualBankingAccountDetailSaptaMobileNumbers = lazy(() => import(
  "./saptaMobileNumbers/IndividualBankingAccountDetailSaptaMobileNumbers.tsx"
  ));
const IndividualBankingAccountDetailSpecialInstructions = lazy(() => import(
  "./specialInstructions/IndividualBankingAccountDetailSpecialInstructions.tsx"
  ));
const IndividualBankingAccountDetailIssuedCheques = lazy(() => import(
  "./issuedCheques/IndividualBankingAccountDetailIssuedCheques.tsx"
  ));
const IndividualBankingAccountDetailAccountSignatories = lazy(() => import(
  "./accountSignatories/IndividualBankingAccountDetailAccountSignatories.tsx"
  ));

export const PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS = {
  ACCOUNT_TRANSACTION_INFORMATION: 'accountTransactionInformation',
  BLOCK_HISTORY: 'blockHistory',
  ISSUED_CHEQUES: 'issuedCheques',
  RETURNED_CHEQUES: 'returnedCheques',
  SAPTA_MOBILE_NUMBERS: 'saptaMobileNumbers',
  SPECIAL_INSTRUCTIONS: 'specialInstructions',
  ACCOUNT_SIGNATORIES: 'accountSignatories',
}

export const PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS: TabsProps['tabs'] = [
  {
    id: PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS.ISSUED_CHEQUES,
    title: 'چک‌های صادره'
  },
  {
    id: PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS.RETURNED_CHEQUES,
    title: 'چک‌های برگشتی'
  },
  {
    id: PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS.SPECIAL_INSTRUCTIONS,
    title: 'دستورالعمل ویژه'
  },
  {
    id: PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS.BLOCK_HISTORY,
    title: 'تاریخچه مسدودی'
  },
  {
    id: PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS.ACCOUNT_SIGNATORIES,
    title: 'امضاداران حساب'
  },
  {
    id: PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS.SAPTA_MOBILE_NUMBERS,
    title: 'شماره موبایل های ساپتا'
  },
  {
    id: PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS.ACCOUNT_TRANSACTION_INFORMATION,
    title: 'اطلاعات گردش حساب'
  },
]

export const PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_RENDER_OBJECT = {
  [PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS.ISSUED_CHEQUES]: (
    <TableSuspense fallback={<IndividualBankingAccountDetailIssuedChequesLoading />}>
      <IndividualBankingAccountDetailIssuedCheques />
    </TableSuspense>
  ),
  [PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS.RETURNED_CHEQUES]: (
    <TableSuspense fallback={<IndividualBankingAccountDetailReturnedChequesLoading />}>
      <IndividualBankingAccountDetailReturnedCheques />
    </TableSuspense>
  ),
  [PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS.ACCOUNT_TRANSACTION_INFORMATION]: (
    <TableSuspense fallback={<IndividualBankingAccountDetailTransactionInformationLoading />}>
      <IndividualBankingAccountDetailTransactionInformation />
    </TableSuspense>
  ),
  [PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS.BLOCK_HISTORY]: (
    <TableSuspense fallback={<IndividualBankingAccountDetailBlockHistoryLoading />}>
      <IndividualBankingAccountDetailBlockHistory />
    </TableSuspense>
  ),
  [PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS.ACCOUNT_SIGNATORIES]: (
    <TableSuspense fallback={<div>salam</div>}>
      <IndividualBankingAccountDetailAccountSignatories />
    </TableSuspense>
  ),
  [PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS.SAPTA_MOBILE_NUMBERS]: (
    <TableSuspense fallback={<div>salam</div>}>
      <IndividualBankingAccountDetailSaptaMobileNumbers />
    </TableSuspense>
  ),
  [PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS.SPECIAL_INSTRUCTIONS]: (
    <TableSuspense fallback={<div>salam</div>}>
      <IndividualBankingAccountDetailSpecialInstructions />
    </TableSuspense>
  ),
}
