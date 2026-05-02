import type {SelectOptionType} from "../select-exports.ts";

function getSelectIdValue(value: SelectOptionType | '') {
  return value ? value.id : null
}

export default getSelectIdValue;