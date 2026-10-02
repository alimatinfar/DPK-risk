import {useEffect, useState} from "react";
import useReactHookFormWrapper
  from "../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import type {AdminRiskTreeColumnProps} from "../components/AdminRiskTreeColumn.tsx";
import useMutateData from "../../../../request/hooks/useMutateData.ts";
import toastPromise from "../../../../utils/toastPromise.ts";
import fireResponseErrorToast from "../../../../request/utils/fireResponseErrorToast.ts";

const SUB_INDICATOR_MAX_VALUE = 5

type BodyDataType = {
  id: number;
  riskValue?: number;
  weight?: number;
}[]

function useAdminRiskTreeColumn(
  {
    previousSelectedId, apiAddress, refetch, isLast
  }: Pick<AdminRiskTreeColumnProps, 'previousSelectedId' | 'apiAddress' | 'refetch' | 'isLast'>
) {

  const [wasChanged, setWasChanged] = useState(false)
  const [hasError, setHasError] = useState(false)
  const errorMessage =
    isLast ? `ارزش هر زیرشاخص حداکثر می‌تواند ${SUB_INDICATOR_MAX_VALUE} باشد` : 'مجموع شاخص های اصلی باید 100 باشد'

  const {
    mutate, isPending
  } = useMutateData<any, BodyDataType>({
    axiosConfig: {
      url: apiAddress,
      method: 'POST'
    }
  })

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper({
    onSubmitHandler
  })

  function isWeightTotalValid(bodyData: BodyDataType): boolean{
    const expected = 100;
    const multiplier = 100;
    const weights = bodyData?.map(item => item.weight)

    const total = weights.reduce(
      (sum, weight) => Number(sum) + Math.round(Number(weight) * multiplier),
      0,
    );

    return total === expected * multiplier;
  }

  function checkMaxValue(bodyData: BodyDataType) {
    return bodyData?.every(item => Number(item?.riskValue) <= SUB_INDICATOR_MAX_VALUE)
  }

  function onSubmitHandler(formData: any) {
    const bodyData: BodyDataType = Object.entries(formData).map(([key, value]) => ({
      id: Number(key),
      [isLast ? 'riskValue' : 'weight']: Number(value)
    }))

    const conditionIsTrue = isLast ? checkMaxValue(bodyData) : isWeightTotalValid(bodyData)
    if (!conditionIsTrue) return setHasError(true)

    mutate(bodyData, {
      onSuccess: (data) => {
        toastPromise().then(toast => toast.success('اطلاعات با موفقیت ویرایش شد'))
        refetch()
      },
      ...fireResponseErrorToast()
    })
  }

  function cancelHandler() {
    setWasChanged(false)
    formMethods.reset()
  }

  useEffect(() => {
    cancelHandler()
  }, [previousSelectedId]);

  return {
    formMethods, onSubmit, setWasChanged, wasChanged, hasError, cancelHandler, loading: isPending, errorMessage
  }
}

export default useAdminRiskTreeColumn;
