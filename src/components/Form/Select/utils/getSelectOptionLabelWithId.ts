import type {SelectOptionType} from "../select-exports.ts";
import getSelectOptionWithId from "./getSelectOptionWithId.ts";


type Props = {
  options: SelectOptionType[]
  id: SelectOptionType['id']
}

function getSelectOptionLabelWithId(
  {options, id}: Props
) {
  return getSelectOptionWithId({options, id})?.name || ''
}

export default getSelectOptionLabelWithId