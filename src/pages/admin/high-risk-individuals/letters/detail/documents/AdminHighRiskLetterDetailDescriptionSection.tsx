import {
  DetailInfoSection,
  type DetailInfoSectionProps
} from "../../../../../../components/others/DetailInfo/DetailInfoSection";
import {useMemo} from "react";


type Props = {
  detailInfoSectionProps?: Partial<DetailInfoSectionProps>;
  letterNumber: string | number | undefined;
  reference: string | number | undefined;
  letterDate: string;
  description: string | undefined;
}

function AdminHighRiskLetterDetailDescriptionSection(
  {
    detailInfoSectionProps, letterDate, letterNumber, description, reference
  }: Props
) {

  const infoList: DetailInfoSectionProps['infoList'] = useMemo(function () {
    return [
      {
        label: 'شماره نامه',
        value: letterNumber
      },
      {
        label: 'مرجع',
        value: reference
      },
      {
        label: 'تاریخ نامه',
        value: letterDate
      },
      {
        label: 'توضیحات',
        value: description,
        column: 3
      },
    ]
  }, [letterNumber, letterDate, description, reference])

  return (
    <DetailInfoSection
      title='توضیحات' {...detailInfoSectionProps}
      infoList={infoList} customGridColsClass='grid-cols-3'
    />
  );
}

export default AdminHighRiskLetterDetailDescriptionSection;
