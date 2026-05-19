import {
  DetailInfoSection2,
  type DetailInfoSection2Props
} from "../../../../components/others/DetailInfo/DetailInfoSection2";
import {useMemo} from "react";


function PanelIndividualBankingInfoTop() {

  const infoList: DetailInfoSection2Props['infoList'] = useMemo(function () {
    return [
      {
        label: 'شماره مشتری',
        value: 'R1',
      },
      {
        label: 'شماره شهاب',
        value: '32156461312',
      },
      {
        label: 'زیرنوع مشتری',
        value: '3215461321',
      },
      {
        label: 'تاریخ آخرین تغییرات تعریف مشتری',
        value: '2025-01-01',
      },
      {
        label: 'کد شعبه تعریف مشتری',
        value: '12',
      },
      {
        label: 'نام شعبه',
        value: 'ازادی',
      },
      {
        label: 'کد منطقه تعریف مشتری',
        value: '12',
      },
      {
        label: 'نام منطقه',
        value: 'آزادی',
      },
    ]
  }, [])

  return (
    <DetailInfoSection2 infoList={infoList} />
  );
}

export default PanelIndividualBankingInfoTop;