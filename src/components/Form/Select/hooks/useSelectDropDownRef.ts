import {useRef} from "react";
import type {SelectDropDownRefType} from "../SelectDropDown";

function useSelectDropDownRef() {
  const selectDropDownRef = useRef<SelectDropDownRefType>(null);

  return selectDropDownRef
}

export default useSelectDropDownRef