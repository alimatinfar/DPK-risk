import AdminHighRiskLetterDetailDescriptionSection
  from "../../../letters/detail/documents/AdminHighRiskLetterDetailDescriptionSection.tsx";
import {useAdminHighRiskIndividualsFormStore} from "../../store/useAdminHighRiskIndividualsFormStore.ts";
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
import {customerIdFieldName, type ResultPersonCardDataType} from "../../../../../search/result/ResultCard.types.ts";

function AdminHighRiskFormStep5() {

  const formStep1Data = useAdminHighRiskIndividualsFormStore(state => state.formData.step1)
  const individuals = useAdminHighRiskIndividualsFormStore(state => state.formData.step3.individuals)
  const individualsExtraData = useAdminHighRiskIndividualsFormStore(state => state.formData.step4.individualsExtraData)

  function onSubmitHandler() {
    console.log('onSubmit')
  }

  return (
    <div className='flex flex-col gap-y-4'>
      <AdminHighRiskLetterDetailDescriptionSection
        description={formStep1Data?.[descriptionFieldName]}
        letterDate={formStep1Data?.[letterDateFieldName] ? getFormattedMomentJalaliDateTime({date: formStep1Data?.[letterDateFieldName], mode: 'jDate'}) : ''}
        letterNumber={formStep1Data?.[letterNumberFieldName]}
        reference={getSelectNameValue(formStep1Data?.[announceReferenceFieldName])}
      />

      <ResultPersonCategoryWrapper renderCallback={(item) => (
        <ResultPersonCategory2
          key={item.name} personTypeItem={item} resultData={individuals}
          customContent={(visibleItems) => (
            <div className='grid grid-cols-4 gap-4 p-4'>
              {visibleItems.map(visibleItem => {

                const extraData = individualsExtraData?.find(item => item?.[customerIdFieldName] === visibleItem?.[customerIdFieldName])
                const documentsLength = extraData?.documentsList?.length || 0

                return (
                  <AdminHighRiskIndividualsCardElement
                    data={visibleItem as ResultPersonCardDataType}
                    documentsNumbers={documentsLength} hiddenAction
                  />
                )
              })}
            </div>
          )}
        />
      )} />

      <AdminHighRiskIndividualsFormButtons
        onClick={onSubmitHandler}
      />
    </div>
  );
}

export default AdminHighRiskFormStep5;
