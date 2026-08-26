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
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../../search/form/SearchPageForm.constances.ts";
import {nationalCodeFieldName} from "../../../FormFields/NationalCodeField/index.constances.ts";
import {
  birthCertificationNumberFieldName
} from "../../../../../search/form/formFields/natural/BirthCertificateNumberField/BirthCertificateNumberField.constances.ts";
import {
  comprehensiveForeignNationalsIdFieldName
} from "../../../../../search/form/formFields/foreignCitizen/ComprehensiveForeignNationalsIdField/ComprehensiveForeignNationalsIdField.constances.ts";
import {
  nationalityFieldName
} from "../../../../../search/form/formFields/foreignCitizen/NationalityField/NationalityField.constances.ts";
import {
  citizenshipFieldName
} from "../../../../../search/form/formFields/foreignCitizen/CitizenshipField/CitizenshipField.constances.ts";
import {
  legalBrandNameFieldName
} from "../../../../../search/form/formFields/legal/LegalBrandNameField/LegalBrandNameField.constances.ts";
import {
  legalRegistrationNumberFieldName
} from "../../../../../search/form/formFields/legal/LegalRegistrationNumberField/LegalRegistrationNumberField.constances.ts";
import {
  legalTypeFieldName
} from "../../../../../search/form/formFields/legal/LegalTypeField/LegalTypeField.constances.ts";
import {customerIdFieldName, type ResultPersonCardDataType} from "../../../../../search/result/ResultCard.types.ts";

function AdminHighRiskFormStep5() {

  const formStep1Data = useAdminHighRiskIndividualsFormStore(state => state.formData.step1)
  const individuals = useAdminHighRiskIndividualsFormStore(state => state.formData.step3.individuals)
  const individualsExtraData = useAdminHighRiskIndividualsFormStore(state => state.formData.step4.individualsExtraData)

  console.log({individuals, individualsExtraData})

  const personsData = [
    {
      type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
      name: 'حسین مبینی',
      customerId: '1234567890',
      [nationalCodeFieldName]: '1234567890',
      [birthCertificationNumberFieldName]: '1234567890',
    },
    {
      type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name,
      name: 'دوشنبه',
      customerId: '123456789012',
      [comprehensiveForeignNationalsIdFieldName]: '123456789012',
      [nationalityFieldName]: 'افغانستان',
      [citizenshipFieldName]: 'ایران',
    },
    {
      type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name,
      name: 'دیجی کالا',
      customerId: '12345678901',
      [legalBrandNameFieldName]: 'دیجی کالا',
      [legalRegistrationNumberFieldName]: '12345678901',
      [legalTypeFieldName]: 'نوع حقوقی',
    },
  ]

  function onSubmitHandler() {

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
