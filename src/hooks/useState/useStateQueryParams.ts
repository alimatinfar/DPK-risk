import {useSearchParams} from "react-router";
import {useEffect, useState} from "react";
import type {SetStateType} from "../../types/SetStateType";


type Props<T> = {
  initialState: T,
  queryParamKey: string
}

function useStateQueryParams<T>({initialState, queryParamKey}: Props<T>): [state:T, setState: SetStateType<T>] {

  const [searchParams, setSearchParams] = useSearchParams();

  function updateSearchParams(key:string, value: string, options: any){
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set(key, value);
    setSearchParams(updatedParams, options);
  };

  const queryParamsValue = searchParams.get(queryParamKey)

  const [state, setState] = useState<T>(
    queryParamsValue ? (JSON.parse(queryParamsValue) as T) : initialState
  )

  useEffect(() => {
    updateSearchParams(queryParamKey, JSON.stringify(state), {replace: true})
  }, [state]);

  return [state, setState]
}

export default useStateQueryParams;