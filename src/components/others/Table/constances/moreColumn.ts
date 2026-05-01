import {TD_MORE_ACCCESSOR} from "../TableBody/TdActions/TdMore/tdMoreExports.ts";
import TABLE_RENDER_TYPES from "./renderTypes.ts";
import type {ColumnsType} from "../TableExports.ts";

const MORE_COLUMN:ColumnsType = {
  label: "",
  accessor: TD_MORE_ACCCESSOR,
  renderType: TABLE_RENDER_TYPES.MORE,
  tdWidth: 'w-[60px]'
}

export default MORE_COLUMN