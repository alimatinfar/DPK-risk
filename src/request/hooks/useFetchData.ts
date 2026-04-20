import {useQuery, type UseQueryOptions} from "@tanstack/react-query";
import type {AxiosRequestConfig} from "axios";
import type {CustomResponseType} from "../types/CustomResponseType.ts";


type Props<T> = {
  queryKey?: string | any[];
  axiosConfig: AxiosRequestConfig;
  options?: Partial<UseQueryOptions<CustomResponseType<T>, Error>>;
};

const useFetchData = <T>(
  {queryKey, axiosConfig, options}: Props<T>
) => {

  const fetchData = async (): Promise<CustomResponseType<T>> => {
    const axiosInstance = (await import("../axiosInstance.ts")).default;

    const {data} = await axiosInstance(axiosConfig);
    return data;
  };

  const queryData = useQuery<CustomResponseType<T>, Error>({
    queryKey: queryKey ? (Array.isArray(queryKey) ? queryKey : [queryKey]) : [axiosConfig.url],
    queryFn: fetchData,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 0,
    ...options,
  });

  return queryData
}

export default useFetchData
