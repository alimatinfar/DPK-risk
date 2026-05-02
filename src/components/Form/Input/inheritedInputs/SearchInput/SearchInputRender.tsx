import SearchIcon from "../../../../svg/SearchIcon.tsx";
import Input from "../../Input.tsx";
import type {InputProps} from "../../types/InputProps.ts";

function SearchInputRender(props: InputProps) {
  return (
    <Input
      hiddenErrorMessage
      startAdornment={<SearchIcon />}
      placeholder='جستجو...'
      {...props}
    />
  )
}

export default SearchInputRender