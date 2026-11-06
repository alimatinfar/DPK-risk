import {useEffect, useState} from "react";
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
import type {CustomResponseType} from "../../../request/types/CustomResponseType.ts";
import getPersonTypeItem from "../form/utils/getPersonTypeItem.ts";
import type {SetZustandStoreType} from "../../../types/SetZustandStoreType.ts";
import type {SearchPageStoreType} from "../store/useSearchStore.ts";


export type UseSearchPageProps = {
  onSuccessHandler?: (data: CustomResponseType<SearchFormResponseType>) => void;
  activePersonType?: SearchPageFormPersonType | undefined;
  setStoreData?: SetZustandStoreType<SearchPageStoreType>;
}

function useSearchPage(
  {
    onSuccessHandler, activePersonType, setStoreData
  }: UseSearchPageProps = {}
) {

  const {getBodyData} = useSearchPageBodyData({
    customerType: Number(activePersonType ? getPersonTypeItem(activePersonType)?.id : 0)
  })

  const {
    mutate, data, error, isPending
  } = useMutateData<SearchFormResponseType, SearchFormRequestBodyData>({
    axiosConfig: {
      url: APIS.GET_CUSTOMERS, method: 'POST'
    }
  })

  const {
    getResultData
  } = useSearchPageResultData()

  const [isSubmittedSuccessful, setIsSubmittedSuccessful] = useState(false)

  function onSubmitHandler(formData: SearchPageFormDataType) {
    if (!checkFormHasAtLeastOneValue(formData))
      return toastPromise().then(toast => toast.error('تکمیل حداقل یک فیلد الزامی است'))

    setStoreData && setStoreData({formData})

    const bodyData = getBodyData(formData)

    mutate(bodyData, {
      onSuccess: (data, variables, onMutateResult, context) => {
        setStoreData && setStoreData({resultData: getResultData({data})})
        if (onSuccessHandler) return onSuccessHandler(data)

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

  return {
    formMethods, onSubmit, getResultData, isSubmittedSuccessful, error, isPending, data
  }
}

export default useSearchPage;
