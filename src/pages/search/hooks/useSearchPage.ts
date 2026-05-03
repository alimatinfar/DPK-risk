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
import useSearchPageBodyData from "./useSearchPageBodyData.ts";


function useSearchPage() {

  const [activePersonType, setActivePersonType] = useState<SearchPageFormPersonType | undefined>(undefined)

  const {getBodyData} = useSearchPageBodyData({
    activePersonType
  })

  const {
    mutate, data, error
  } = useMutateData<SearchFormResponseType, SearchFormRequestBodyData>({
    axiosConfig: {
      url: APIS.GET_CUSTOMERS, method: 'POST'
    }
  })

  const [resultData, setResultData] = useState<SearchPageResultProps['resultData']>([])
  const [isSubmittedSuccessful, setIsSubmittedSuccessful] = useState(false)

  function onSubmitHandler(formData: SearchPageFormDataType) {
    if (Object.values(formData).every(value => !value))
      return toastPromise().then(toast => toast.error('تکمیل حداقل یک فیلد الزامی است'))

    const bodyData = getBodyData(formData)

      mutate(bodyData, {
      onSuccess: (data, variables, onMutateResult, context) => {
        setResultData(SEARCH_PAGE_FAKE_DATA)
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

  // const resultData: SearchPageResultProps['resultData'] = useMemo(function () {
  //   return
  // }, [])

  return {
    formMethods, onSubmit, resultData, isSubmittedSuccessful, activePersonType, setActivePersonType
  }
}

export default useSearchPage;