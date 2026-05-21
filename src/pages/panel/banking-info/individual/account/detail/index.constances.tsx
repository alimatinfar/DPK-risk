import {type TabsProps} from "../../../../../../components/others/Tab/Tab.tsx";
import {lazy} from "react";

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
    <IndividualBankingAccountDetailIssuedCheques />
  ),
  [PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS.RETURNED_CHEQUES]: (
    <IndividualBankingAccountDetailReturnedCheques />
  ),
  [PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS.ACCOUNT_TRANSACTION_INFORMATION]: (
    <IndividualBankingAccountDetailTransactionInformation />
  ),
  [PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS.BLOCK_HISTORY]: (
    <IndividualBankingAccountDetailBlockHistory />
  ),
  [PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS.ACCOUNT_SIGNATORIES]: (
    <IndividualBankingAccountDetailAccountSignatories />
  ),
  [PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS.SAPTA_MOBILE_NUMBERS]: (
    <IndividualBankingAccountDetailSaptaMobileNumbers />
  ),
  [PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS.SPECIAL_INSTRUCTIONS]: (
    <IndividualBankingAccountDetailSpecialInstructions />
  ),
}
