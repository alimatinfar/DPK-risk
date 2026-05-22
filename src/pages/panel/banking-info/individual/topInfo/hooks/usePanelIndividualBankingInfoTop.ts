import type {DetailInfoSection2Props} from "../../../../../../components/others/DetailInfo/DetailInfoSection2";
import {useMemo} from "react";
import useFetchCustomerInfo from "../../../../comprehensive-info/basic-information/hooks/useFetchCustomerInfo.ts";
import displayDate from "../../../../../../utils/dateAndTIme/displayDate.ts";


function usePanelIndividualBankingInfoTop() {

  const {
    loading, error, commonCustomerData
  } = useFetchCustomerInfo()

  const infoList: DetailInfoSection2Props['infoList'] = useMemo(function () {
    return [
      {
        label: 'شماره مشتری',
        value: commonCustomerData?.customerId,
      },
      {
        label: 'شناسه شهاب',
        // TODO set from api response
        value: null,
      },
      {
        label: 'زیرنوع مشتری',
        value: commonCustomerData?.customerSubType,
      },
      {
        label: 'تاریخ آخرین تغییرات تعریف مشتری',
        value: displayDate(commonCustomerData?.changeLastDate),
      },
      {
        label: 'کد شعبه تعریف مشتری',
        value: commonCustomerData?.branchCode,
      },
      {
        label: 'نام شعبه',
        value: commonCustomerData?.branchName,
      },
      {
        label: 'کد منطقه تعریف مشتری',
        value: commonCustomerData?.areaCode,
      },
      {
        label: 'نام منطقه',
        value: commonCustomerData?.areaName,
      },
    ]
  }, [commonCustomerData])

  return {
    infoList, loading, error
  }
}

export default usePanelIndividualBankingInfoTop;
