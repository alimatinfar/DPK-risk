import {
  DetailInfoSection,
  type DetailInfoSectionProps
} from "../../../../../../components/others/DetailInfo/DetailInfoSection";
import {useMemo} from "react";
import {expireDateFieldLabel} from "../../../FormFields/ExpireDateField/index.constances.ts";
import {letterNumberFieldLabel} from "../../../FormFields/LetterNumberField/index.constances.ts";
import {announceReferenceFieldLabel} from "../../../FormFields/AnnouncingReferenceField/index.constances.ts";
import {letterDateFieldLabel} from "../../../FormFields/LetterDateField/index.constances.ts";
import {descriptionFieldLabel} from "../../../FormFields/DescriptionField/index.constances.ts";
import {riskListTypeFieldLabel} from "../../../FormFields/RiskListTypeField/index.constances.ts";


type Props = {
  detailInfoSectionProps?: Partial<DetailInfoSectionProps>;
  letterNumber: string | number | undefined;
  reference: string | number | undefined;
  letterDate: string;
  description: string | undefined;
  expireDate?: string;
  riskListType?: string;
}

function AdminHighRiskLetterDetailDescriptionSection(
  {
    detailInfoSectionProps, letterDate, letterNumber, description, reference, expireDate, riskListType
  }: Props
) {

  const infoList: DetailInfoSectionProps['infoList'] = useMemo(function () {
    return [
      {
        label: letterNumberFieldLabel,
        value: letterNumber
      },
      {
        label: announceReferenceFieldLabel,
        value: reference
      },
      {
        label: letterDateFieldLabel,
        value: letterDate
      },
      ...riskListType ? [{
        label: riskListTypeFieldLabel,
        value: riskListType
      }] : [],
      ...expireDate ? [{
        label: expireDateFieldLabel,
        value: expireDate
      }] : [],
      {
        label: descriptionFieldLabel,
        value: description,
        column: 3
      },
    ]
  }, [letterNumber, letterDate, description, reference, expireDate, riskListType])

  return (
    <DetailInfoSection
      title='توضیحات' {...detailInfoSectionProps}
      infoList={infoList} customGridColsClass='grid-cols-4' customColumnsNumber={4}
    />
  );
}

export default AdminHighRiskLetterDetailDescriptionSection;
