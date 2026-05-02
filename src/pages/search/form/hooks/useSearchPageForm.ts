import type {SearchPageFormPersonType} from "../SearchPageForm.types.ts";
import {useState} from "react";
import resetFormExceptSomeFields
  from "../../../../components/Form/FormLayout/ReactHookFormWrapper/utils/resetFormExceptSomeFields.ts";
import {accountNumberFieldName} from "../formFields/AccountNumberField/AccountNumberField.constances.ts";
import {customerNumberFieldName} from "../formFields/CustomerNumberField/CustomerNumberField.constances.ts";
import {cardNumberFieldName} from "../formFields/CardNumberField/CardNumberField.constances.ts";
import {shahabNumberFieldName} from "../formFields/ShahabNumberField/ShahabNumberField.constances.ts";
import type {SearchPageFormProps} from "../SearchPageForm.tsx";


function useSearchPageForm(
  {formMethods}: Pick<SearchPageFormProps, 'formMethods'>
) {

  const [activePersonType, setActivePersonType] = useState<SearchPageFormPersonType | undefined>(undefined)

  function removeAdvancedSearchSection() {
    setActivePersonType(undefined)
    resetFormExceptSomeFields({
      formMethods, fields: [
        accountNumberFieldName, customerNumberFieldName, cardNumberFieldName, shahabNumberFieldName
      ]
    })
  }

  return {
    activePersonType, setActivePersonType, removeAdvancedSearchSection
  }
}

export default useSearchPageForm;