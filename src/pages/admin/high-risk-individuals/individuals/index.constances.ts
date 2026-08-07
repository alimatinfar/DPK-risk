import type {AdminHighRiskIndividualsFilterType} from "./index.types.ts";
import {nationalCodeFieldName} from "../FormFields/NationalCodeField/index.constances.ts";
import {firstNameFieldName} from "../FormFields/FirstNameField/index.constances.ts";
import {lastNameFieldName} from "../FormFields/LastNameField/index.constances.ts";

export const adminHighRiskIndividualsDefaultFilters: AdminHighRiskIndividualsFilterType = {
  [nationalCodeFieldName]: '',
  [firstNameFieldName]: '',
  [lastNameFieldName]: '',
}
