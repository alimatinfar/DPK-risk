import getCleanBodyDataObject from "../../../request/utils/getCleanBodyDataObject.ts";
import type {SearchPageFormDataType, SearchPageFormPersonType} from "../form/SearchPageForm.types.ts";
import getPersonTypeItem from "../form/utils/getPersonTypeItem.ts";
import {accountNumberFieldName} from "../form/formFields/AccountNumberField/AccountNumberField.constances.ts";
import {customerNumberFieldName} from "../form/formFields/CustomerNumberField/CustomerNumberField.constances.ts";
import {shahabNumberFieldName} from "../form/formFields/ShahabNumberField/ShahabNumberField.constances.ts";
import {cardNumberFieldName} from "../form/formFields/CardNumberField/CardNumberField.constances.ts";
import {nationalCodeFieldName} from "../form/formFields/natural/NationalCodeField/NationalCodeField.constances.ts";
import {firstNameFieldName} from "../form/formFields/natural/FirstNameField/FirstNameField.constances.ts";
import {lastNameFieldName} from "../form/formFields/natural/LastNameField/LastNameField.constances.ts";
import {
  legalRegistrationNumberFieldName
} from "../form/formFields/legal/LegalRegistrationNumberField/LegalRegistrationNumberField.constances.ts";
import {nationalityFieldName} from "../form/formFields/foreignCitizen/NationalityField/NationalityField.constances.ts";
import {citizenshipFieldName} from "../form/formFields/foreignCitizen/CitizenshipField/CitizenshipField.constances.ts";
import {
  legalCustomerNameFieldName
} from "../form/formFields/legal/LegalCustomerNameField/LegalCustomerNameField.constances.ts";
import {legalBrandNameFieldName} from "../form/formFields/legal/LegalBrandNameField/LegalBrandNameField.constances.ts";
import {
  legalAbbreviationFieldName
} from "../form/formFields/legal/LegalAbbreviationField/LegalAbbreviationField.constances.ts";
import {legalTypeFieldName} from "../form/formFields/legal/LegalTypeField/LegalTypeField.constances.ts";
import {
  registrationDateFromFieldName
} from "../form/formFields/legal/RegistrationDateFromField/RegistrationDateFromField.constances.ts";
import {
  registrationDateToFieldName
} from "../form/formFields/legal/RegistrationDateToField/RegistrationDateToField.constances.ts";
import getBodyDataNumberField from "../../../request/utils/getBodyDataNumberField.ts";
import type {SearchFormRequestBodyData} from "../SearchPage.types.ts";


type Props = {
  activePersonType: SearchPageFormPersonType | undefined;
}

function useSearchPageBodyData(
  {activePersonType}: Props
) {

  function getBodyData(formData: SearchPageFormDataType) {
    return getCleanBodyDataObject({
      customerType: activePersonType ? getPersonTypeItem(activePersonType)?.id : 0,
      accountNumber: getBodyDataNumberField(formData[accountNumberFieldName]),
      customerId: getBodyDataNumberField(formData[customerNumberFieldName]),
      shahabId: getBodyDataNumberField(formData[shahabNumberFieldName]),
      cardNumber: getBodyDataNumberField(formData[cardNumberFieldName]),
      nationalID: getBodyDataNumberField(formData[nationalCodeFieldName]),
      firstName: formData[firstNameFieldName],
      lastName: formData[lastNameFieldName],
      shenasnameId: getBodyDataNumberField(formData[legalRegistrationNumberFieldName]),
      //TODO set select option type id
      nationality: getBodyDataNumberField(formData[nationalityFieldName]),
      //TODO set select option type id
      citizenship: getBodyDataNumberField(formData[citizenshipFieldName]),
      legalName: formData[legalCustomerNameFieldName],
      tradeName: formData[legalBrandNameFieldName],
      abbreviationName: formData[legalAbbreviationFieldName],
      //TODO set select option type id
      legalType: getBodyDataNumberField(formData[legalTypeFieldName]),
      //TODO set date as number format
      fromRegistrationDate: getBodyDataNumberField(formData[registrationDateFromFieldName]),
      //TODO set date as number format
      toRegistrationDate: getBodyDataNumberField(formData[registrationDateToFieldName]),
    }) satisfies SearchFormRequestBodyData
  }

  return {getBodyData}
}

export default useSearchPageBodyData;