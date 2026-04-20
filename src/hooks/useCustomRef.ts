import {useRef} from 'react';


function useCustomRef<T>(defaultValue?:T) {
  return useRef<T>(defaultValue ?? null as unknown as T);
}

export default useCustomRef;