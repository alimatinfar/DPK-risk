import type {DetailInfoSectionProps} from "../../../../../../../components/others/DetailInfo/DetailInfoSection";
import {useMemo} from "react";

function useAdminHighRiskIndividualsLettersDetailDocumentsDescription() {

  const descriptionItems: DetailInfoSectionProps['infoList'] = useMemo(function () {
    return [
      {
        label: 'شماره نامه',
        value: '321564643'
      },
      {
        label: 'مرجع',
        value: 'قوه قضائیه'
      },
      {
        label: 'تاریخ نامه',
        value: '1405/01/01'
      },
      {
        label: 'توضیحات',
        value: 'توضیحات کاربر درباره این نامه توضیحات کاربر درباره این نامه توضیحات کاربر درباره این نامه توضیحات کاربر درباره این نامه توضیحات کاربر درباره این نامه توضیحات کاربر درباره این نامه توضیحات کاربر درباره این نامه ',
        column: 3
      },
    ]
  }, [])

  return {
    descriptionItems
  }
}

export default useAdminHighRiskIndividualsLettersDetailDocumentsDescription;
