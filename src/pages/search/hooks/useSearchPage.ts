import {useState} from "react";
import {SEARCH_PAGE_FAKE_DATA} from "../SearchPage.constances.ts";
import useReactHookFormWrapper
  from "../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import type {SearchPageFormDataType, SearchPageFormPersonType} from "../form/SearchPageForm.types.ts";
import scrollToElementById from "../../../utils/scrollToElementById.ts";
import {ELEMENT_IDS} from "../../../constances/elementIDs.ts";
import toastPromise from "../../../utils/toastPromise.ts";
import type {SearchPageResultProps} from "../result/SearchPageResult.tsx";
import APIS from "../../../request/constances/apis.ts";
import useMutateData from "../../../request/hooks/useMutateData.ts";
import type {SearchFormRequestBodyData, SearchFormResponseType} from "../SearchPage.types.ts";
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


function useSearchPage() {

  const [activePersonType, setActivePersonType] = useState<SearchPageFormPersonType | undefined>(undefined)

  const {
    mutate, data, error
  } = useMutateData<SearchFormResponseType, SearchFormRequestBodyData>({
    axiosConfig: {
      url: APIS.GET_CUSTOMERS
    }
  })

  console.log({data})

  const [resultData, setResultData] = useState<SearchPageResultProps['resultData']>([])
  const [isSubmittedSuccessful, setIsSubmittedSuccessful] = useState(false)

  function onSubmitHandler(formData: SearchPageFormDataType) {
    if (Object.values(formData).every(value => !value))
      return toastPromise().then(toast => toast.error('تکمیل حداقل یک فیلد الزامی است'))

    const bodyData: SearchFormRequestBodyData = {
      ...activePersonType ? {customerType: getPersonTypeItem(activePersonType)?.id} : {},
      accountNumber: Number(formData[accountNumberFieldName]),
      customerId: Number(formData[customerNumberFieldName]),
      shahabId: Number(formData[shahabNumberFieldName]),
      cardNumber: Number(formData[cardNumberFieldName]),
      nationalID: Number(formData[nationalCodeFieldName]),
      firstName: formData[firstNameFieldName],
      lastName: formData[lastNameFieldName],
      shenasnameId: Number(formData[legalRegistrationNumberFieldName])
    }

    mutate(bodyData, {
      onSuccess: (data, variables, onMutateResult, context) => {
        // Boom baby!
      },
    })

    console.log({formData})
    setResultData(SEARCH_PAGE_FAKE_DATA)
    setIsSubmittedSuccessful(true)
    setTimeout(() => scrollToElementById(ELEMENT_IDS.SEARCH_RESULT), 300)
  }

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper<SearchPageFormDataType>({
    onSubmitHandler
  })

  // const resultData: SearchPageResultProps['resultData'] = useMemo(function () {
  //   return
  // }, [])

  return {
    formMethods, onSubmit, resultData, isSubmittedSuccessful, activePersonType, setActivePersonType
  }
}

export default useSearchPage;