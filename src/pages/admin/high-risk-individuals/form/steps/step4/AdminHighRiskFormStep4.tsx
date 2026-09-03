import AdminHighRiskLetterDetailDescriptionSection
  from "../../../letters/detail/documents/AdminHighRiskLetterDetailDescriptionSection.tsx";
import {descriptionFieldName} from "../../../FormFields/DescriptionField/index.constances.ts";
import {announceReferenceFieldName} from "../../../FormFields/AnnouncingReferenceField/index.constances.ts";
import getSelectNameValue from "../../../../../../components/Form/Select/utils/getSelectNameValue.ts";
import {letterNumberFieldName} from "../../../FormFields/LetterNumberField/index.constances.ts";
import {letterDateFieldName} from "../../../FormFields/LetterDateField/index.constances.ts";
import getFormattedMomentJalaliDateTime
  from "../../../../../../utils/dateAndTIme/momentJalaliDateTime/getFormattedMomentJalaliDateTime.ts";
import AdminHighRiskIndividualsFormButtons from "../../AdminHighRiskIndividualsFormButtons.tsx";
import ResultPersonCategory2 from "../../../../../search/result/ResultPersonCategory2.tsx";
import AdminHighRiskIndividualsCardElement from "../../../individuals/AdminHighRiskIndividualsCardElement.tsx";
import ResultPersonCategoryWrapper from "../../../../../search/result/ResultPersonCategoryWrapper.tsx";
import {type ResultPersonCardDataType} from "../../../../../search/result/ResultCard.types.ts";
import useAdminHighRiskFormStep4 from "./hooks/useAdminHighRiskFormStep4.ts";
import {expireDateFieldName} from "../../../FormFields/ExpireDateField/index.constances.ts";
import {riskListTypeFieldName} from "../../../FormFields/RiskListTypeField/index.constances.ts";

function AdminHighRiskFormStep4() {

  const {
    formStep1Data, individuals, onSubmitHandler, loading
  } = useAdminHighRiskFormStep4()

  return (
    <div className='flex flex-col gap-y-4'>
      <AdminHighRiskLetterDetailDescriptionSection
        description={formStep1Data?.[descriptionFieldName]}
        letterDate={formStep1Data?.[letterDateFieldName] ? getFormattedMomentJalaliDateTime({date: formStep1Data?.[letterDateFieldName], mode: 'jDate'}) : ''}
        expireDate={formStep1Data?.[expireDateFieldName] ? getFormattedMomentJalaliDateTime({date: formStep1Data?.[expireDateFieldName], mode: 'jDate'}) : ''}
        riskListType={getSelectNameValue(formStep1Data?.[riskListTypeFieldName])}
        letterNumber={formStep1Data?.[letterNumberFieldName]}
        reference={getSelectNameValue(formStep1Data?.[announceReferenceFieldName])}
      />

      <ResultPersonCategoryWrapper renderCallback={(item) => (
        <ResultPersonCategory2
          key={item.name} personTypeItem={item} resultData={individuals}
          emptyStateText='شخصی اضافه نشده است'
          customContent={(visibleItems) => (
            <div className='grid grid-cols-4 gap-4 p-4'>
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
      )} />

      <AdminHighRiskIndividualsFormButtons
        onClick={onSubmitHandler} loading={loading}
      />
    </div>
  );
}

export default AdminHighRiskFormStep4;
