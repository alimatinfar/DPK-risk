import React from "react";
import type {ColumnsRenderTypes} from "../TableExports";
import RENDER_TYPES from "../constances/renderTypes";
import TdActions from "./TdActions/TdActions";

export type TableTdProps = {
  tdData: any;
  renderType?: ColumnsRenderTypes;
  data?: any;
}

function TableTd({tdData, renderType, data}: TableTdProps) {
  const rendersObject: any = {
    [RENDER_TYPES.ACTIONS]: <TdActions list={tdData} />,

    default: <span className="text-sm">{tdData}</span>,
  }

  return rendersObject[renderType || "default"];
}

export default TableTd