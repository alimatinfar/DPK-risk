import {useSearchParams} from "react-router";
import {useMemo, useCallback} from "react";

type Props<T> = {
  initialState: T;
  queryParamKey: string;
};

function useStateQueryParams<T>(
  {
    initialState,
    queryParamKey,
  }: Props<T>): [T, (value: T) => void] {

  const [searchParams, setSearchParams] = useSearchParams();

  const state = useMemo<T>(() => {
    const value = searchParams.get(queryParamKey);

    if (!value) return initialState;

    try {
      return JSON.parse(value) as T;
    } catch {
      return initialState;
    }
  }, [searchParams, queryParamKey, initialState]);

  const setState = useCallback(
    (value: T) => {
      setSearchParams(prev => {
        const updated = new URLSearchParams(prev);

        updated.set(
          queryParamKey,
          JSON.stringify(value)
        );

        return updated;
      }, {replace: true});
    },
    [setSearchParams, queryParamKey]
  );

  return [state, setState] as const;
}

export default useStateQueryParams;
