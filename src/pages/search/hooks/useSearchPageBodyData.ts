import getCleanBodyDataObject from "../../../request/utils/getCleanBodyDataObject.ts";
import type {SearchPageFormDataType, SearchPageFormPersonType} from "../form/SearchPageForm.types.ts";
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
import getBodyDataDateField from "../../../request/utils/getBodyDataDateField";
import getSelectIdValue from "../../../components/Form/Select/utils/getSelectIdValue.ts";


type Props = {
  customerType: number;
}

function useSearchPageBodyData(
  {customerType}: Props
) {

  function getBodyData(formData: SearchPageFormDataType) {
    return getCleanBodyDataObject({
      customerType,
      accountNumber: getBodyDataNumberField(formData[accountNumberFieldName]),
      customerId: getBodyDataNumberField(formData[customerNumberFieldName]),
      shahabId: getBodyDataNumberField(formData[shahabNumberFieldName]),
      cardNumber: getBodyDataNumberField(formData[cardNumberFieldName]),
      nationalID: getBodyDataNumberField(formData[nationalCodeFieldName]),
      firstName: formData[firstNameFieldName],
      lastName: formData[lastNameFieldName],
      shenasnameId: getBodyDataNumberField(formData[legalRegistrationNumberFieldName]),
      nationality: getBodyDataNumberField(getSelectIdValue(formData[nationalityFieldName])),
      citizenship: getBodyDataNumberField(getSelectIdValue(formData[citizenshipFieldName])),
      legalName: formData[legalCustomerNameFieldName],
      tradeName: formData[legalBrandNameFieldName],
      abbreviationName: formData[legalAbbreviationFieldName],
      legalType: getBodyDataNumberField(getSelectIdValue(formData[legalTypeFieldName])),
      fromRegistrationDate: getBodyDataDateField(formData[registrationDateFromFieldName]),
      // toRegistrationDate: getBodyDataDateField(formData[registrationDateToFieldName]),
      toRegistrationDate: getBodyDataDateField(formData[registrationDateToFieldName]),
    }) satisfies SearchFormRequestBodyData
  }

  return {getBodyData}
}

export default useSearchPageBodyData;
