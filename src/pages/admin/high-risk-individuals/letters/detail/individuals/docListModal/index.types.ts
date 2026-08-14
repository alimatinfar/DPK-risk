import {ADMIN_HIGH_RISK_INDIVIDUALS_DOC_LIST_RENDER_STATE_KEYS} from "./index.constances.ts";
import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "../../documents/index.types.ts";

export type AdminHighRiskIndividualsDocListStateType = typeof ADMIN_HIGH_RISK_INDIVIDUALS_DOC_LIST_RENDER_STATE_KEYS[keyof typeof ADMIN_HIGH_RISK_INDIVIDUALS_DOC_LIST_RENDER_STATE_KEYS]

export type AdminHighRiskIndividualsDocListRenderStateType = {
  state: AdminHighRiskIndividualsDocListStateType,
  data: AdminHighRiskIndividualsLettersDetailDocumentType
}
