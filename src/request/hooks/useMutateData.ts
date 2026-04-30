import {useMutation, type UseMutationOptions, type UseMutationResult} from "@tanstack/react-query";
import type {AxiosRequestConfig} from "axios";
import type {CustomResponseType} from "../types/CustomResponseType.ts";


type Props<T, V> = {
  axiosConfig: AxiosRequestConfig;
  options?: UseMutationOptions<CustomResponseType<T>, Error, V>;
  dataInParams?: boolean;
};

const useMutateData = <T, V>(
  {
    axiosConfig, options, dataInParams,
  }: Props<T, V>
): UseMutationResult<CustomResponseType<T>, Error, V> => {

  // تعریف تابع mutationFn
  const mutationFn = async (variables: V): Promise<CustomResponseType<T>> => {
    const axiosInstance = (await import("../axiosInstance")).default;

    const {data} = await axiosInstance({
      ...axiosConfig,
      [dataInParams ? 'params' : 'data']: variables,
    });

    return data;
  };

  return useMutation<CustomResponseType<T>, Error, V>({
    mutationFn,
    retry: false,
    ...options,
  });
}

export default useMutateData;
