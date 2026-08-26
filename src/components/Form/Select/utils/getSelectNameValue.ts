import type {SelectOptionType} from "../select-exports.ts";

function getSelectNameValue(value: SelectOptionType | '') {
  return value ? value.name : ''
}

export default getSelectNameValue;
