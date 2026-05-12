import type {TabsProps} from "../../../../../../components/others/Tab/Tab.tsx";

export const PANEL_INDIVIDUAL_BANKING_INFO_DETAIL_TABS_KEYS = {
  ACCOUNT_TRANSACTION_INFORMATION: 'accountTransactionInformation',
  BLOCK_HISTORY: 'blockHistory',
  RETURNED_CHEQUES: 'returnedCheques',
  SAPTA_MOBILE_NUMBERS: 'saptaMobileNumbers',
  SPECIAL_INSTRUCTIONS: 'specialInstructions',
}

export const PANEL_INDIVIDUAL_BANKING_INFO_DETAIL_TABS: TabsProps['tabs'] = [
  {
    id: PANEL_INDIVIDUAL_BANKING_INFO_DETAIL_TABS_KEYS.RETURNED_CHEQUES,
    title: 'چک های برگشتی'
  },
  {
    id: PANEL_INDIVIDUAL_BANKING_INFO_DETAIL_TABS_KEYS.SPECIAL_INSTRUCTIONS,
    title: 'دستورالعمل ویژه'
  },
  {
    id: PANEL_INDIVIDUAL_BANKING_INFO_DETAIL_TABS_KEYS.BLOCK_HISTORY,
    title: 'تاریخچه مسدودی'
  },
  {
    id: PANEL_INDIVIDUAL_BANKING_INFO_DETAIL_TABS_KEYS.SAPTA_MOBILE_NUMBERS,
    title: 'شماره موبایل های ساپتا'
  },
  {
    id: PANEL_INDIVIDUAL_BANKING_INFO_DETAIL_TABS_KEYS.ACCOUNT_TRANSACTION_INFORMATION,
    title: 'اطلاعات گردش حساب'
  },
]