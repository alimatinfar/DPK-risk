import TABLE_ACCESSORS from "./tableAccessors";
import TABLE_RENDER_TYPES from "./renderTypes";
import type {TableColumnType} from "../TableExports";

const ACTIONS_COLUMN:TableColumnType = {
  label: "",
  accessor: TABLE_ACCESSORS.TD_ACTIONS_ACCESSOR,
  renderType: TABLE_RENDER_TYPES.ACTIONS,
}

export default ACTIONS_COLUMN