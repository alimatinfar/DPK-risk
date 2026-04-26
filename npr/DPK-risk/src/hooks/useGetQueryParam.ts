import {useSearchParams} from "react-router";

function useGetQueryParam(queryParamKey: string) {
  const [searchParams, ] = useSearchParams()

  return searchParams.get(queryParamKey)
}

export default useGetQueryParam;