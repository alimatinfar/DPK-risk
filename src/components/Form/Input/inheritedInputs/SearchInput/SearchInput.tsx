import type {InputProps} from "../../types/InputProps.ts";
import useCallFuncWithDelayAfterOnChange from "../../../../../hooks/useCallFuncByDelayAfterOnChange.ts";
import SearchInputRender from "./SearchInputRender.tsx";


type Props = {
  inputProps?: InputProps;
  searchHandler: (value:string) => void;
  minLength?: number;
}

function SearchInput({inputProps = {}, searchHandler, minLength}: Props) {

  const onQuery = useCallFuncWithDelayAfterOnChange({
    callAfterTypingHandler: searchHandler, minLength
  })

  function onChangeHandler(e:any) {
    onQuery(e.target.value)
    inputProps?.onChange && inputProps?.onChange(e)
  }

  return (
    <SearchInputRender
      onChange={onChangeHandler}
      {...inputProps}
    />
  )
}

export default SearchInput