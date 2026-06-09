import TABLE_ACCESSORS from "../tableAccessors.ts";
import TABLE_RENDER_TYPES from "../renderTypes.ts";
import type {TableColumnType} from "../../TableExports.ts";

export

const ACTIONS_COLUMN:TableColumnType = {
  label: "عملیات",
  accessor: TABLE_ACCESSORS.TD_ACTIONS_ACCESSOR,
  renderType: TABLE_RENDER_TYPES.ACTIONS,
  textAlign: 'text-left'
}

export default ACTIONS_COLUMN
