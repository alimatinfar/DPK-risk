import {useState} from "react";
import useReactHookFormWrapper
  from "../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import type {SearchPageFormDataType, SearchPageFormPersonType} from "../form/SearchPageForm.types.ts";
import scrollToElementById from "../../../utils/scrollToElementById.ts";
import {ELEMENT_IDS} from "../../../constances/elementIDs.ts";
import toastPromise from "../../../utils/toastPromise.ts";
import APIS from "../../../request/constances/apis.ts";
import useMutateData from "../../../request/hooks/useMutateData.ts";
import type {SearchFormRequestBodyData, SearchFormResponseType} from "../SearchPage.types.ts";
import useSearchPageBodyData from "./useSearchPageBodyData.ts";
import useSearchPageResultData from "./useSearchPageResultData.ts";
import checkFormHasAtLeastOneValue
  from "../../../components/Form/FormLayout/ReactHookFormWrapper/utils/checkFormHasAtLeastOneValue";


function useSearchPage() {

  const [activePersonType, setActivePersonType] = useState<SearchPageFormPersonType | undefined>(undefined)

  const {getBodyData} = useSearchPageBodyData({
    activePersonType
  })

  const {
    mutate, data, error, isPending
  } = useMutateData<SearchFormResponseType, SearchFormRequestBodyData>({
    axiosConfig: {
      url: APIS.GET_CUSTOMERS, method: 'POST'
    }
  })

  const [isSubmittedSuccessful, setIsSubmittedSuccessful] = useState(false)

  function onSubmitHandler(formData: SearchPageFormDataType) {
    if (!checkFormHasAtLeastOneValue(formData))
      return toastPromise().then(toast => toast.error('تکمیل حداقل یک فیلد الزامی است'))

    const bodyData = getBodyData(formData)

    mutate(bodyData, {
      onSuccess: (data, variables, onMutateResult, context) => {
        setIsSubmittedSuccessful(true)
        setTimeout(() => scrollToElementById(ELEMENT_IDS.SEARCH_RESULT), 300)
      },
    })
  }

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper<SearchPageFormDataType>({
    onSubmitHandler
  })

  const {
    resultData
  } = useSearchPageResultData({
    data
  })

  return {
    formMethods, onSubmit, resultData, isSubmittedSuccessful, activePersonType, setActivePersonType,
    error, isPending
  }
}

export default useSearchPage;