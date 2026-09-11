import AdminHighRiskLetterDetailDescriptionSection
  , {
  type AdminHighRiskLetterDetailDescriptionSectionProps
} from "../../../letters/detail/documents/AdminHighRiskLetterDetailDescriptionSection.tsx";
import {descriptionFieldName} from "../../../FormFields/DescriptionField/index.constances.ts";
import {letterDateFieldName} from "../../../FormFields/LetterDateField/index.constances.ts";
import getFormattedMomentJalaliDateTime
  from "../../../../../../utils/dateAndTIme/momentJalaliDateTime/getFormattedMomentJalaliDateTime.ts";
import getSelectNameValue from "../../../../../../components/Form/Select/utils/getSelectNameValue.ts";
import {letterNumberFieldName} from "../../../FormFields/LetterNumberField/index.constances.ts";
import {announceReferenceFieldName} from "../../../FormFields/AnnouncingReferenceField/index.constances.ts";
import ResultPersonCategoryWrapper from "../../../../../search/result/ResultPersonCategoryWrapper.tsx";
import ResultPersonCategory2 from "../../../../../search/result/ResultPersonCategory2.tsx";
import AdminHighRiskIndividualsCardElement from "../../../individuals/AdminHighRiskIndividualsCardElement.tsx";
import type {ResultPersonCardDataType} from "../../../../../search/result/ResultCard.types.ts";
import type {AdminHighRiskFormStep1ShareProps} from "../step1/AdminHighRiskFormStep1Share.tsx";


export type AdminHighRiskFormStep4ShareProps = {
  formStep1Data: any;
  individuals: ResultPersonCardDataType[];
  loading: boolean;
  onSubmitHandler: () => void;
} & Pick<AdminHighRiskLetterDetailDescriptionSectionProps,
  'expireDate' | 'riskListType' | 'requestReason' | 'responseSubmissionStatus'
> & Pick<AdminHighRiskFormStep1ShareProps, 'ButtonsSection'>


function AdminHighRiskFormStep4Share(
  {
    formStep1Data, individuals, expireDate, riskListType, requestReason, responseSubmissionStatus,
    ButtonsSection, loading, onSubmitHandler
  }: AdminHighRiskFormStep4ShareProps
) {
  return (
    <div className='flex flex-col gap-y-4'>
      <AdminHighRiskLetterDetailDescriptionSection
        description={formStep1Data?.[descriptionFieldName]}
        letterDate={formStep1Data?.[letterDateFieldName] ? getFormattedMomentJalaliDateTime({
          date: formStep1Data?.[letterDateFieldName],
          mode: 'jDate'
        }) : ''}
        letterNumber={formStep1Data?.[letterNumberFieldName]}
        reference={getSelectNameValue(formStep1Data?.[announceReferenceFieldName])}
        expireDate={expireDate} riskListType={riskListType} requestReason={requestReason}
        responseSubmissionStatus={responseSubmissionStatus}
      />

      <ResultPersonCategoryWrapper renderCallback={(item) => (
        <ResultPersonCategory2
          key={item.name} personTypeItem={item} resultData={individuals}
          emptyStateText='شخصی اضافه نشده است'
          customContent={(visibleItems) => (
            <div className='grid grid-cols-4 gap-4'>
              {visibleItems.map(visibleItem => {
                return (
                  <AdminHighRiskIndividualsCardElement
                    data={visibleItem as ResultPersonCardDataType} hiddenAction
                  />
                )
              })}
            </div>
          )}
        />
      )}/>

      <ButtonsSection
        onClick={onSubmitHandler} loading={loading}
      />
    </div>
  );
}

export default AdminHighRiskFormStep4Share;
