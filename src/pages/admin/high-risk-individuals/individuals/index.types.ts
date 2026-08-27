import {nationalCodeFieldName, type NationalCodeFieldType} from "../FormFields/NationalCodeField/index.constances.ts";
import {firstNameFieldName, type FirstNameFieldType} from "../FormFields/FirstNameField/index.constances.ts";
import {lastNameFieldName, type LastNameFieldType} from "../FormFields/LastNameField/index.constances.ts";

export type AdminHighRiskIndividualsFilterType = {
  [nationalCodeFieldName]: NationalCodeFieldType;
  [firstNameFieldName]: FirstNameFieldType;
  [lastNameFieldName]: LastNameFieldType;
}

export type AdminHighRiskIndividualsCustomerResponseItemType ={
  customerId: number;
  nationalID: number;
  firstName: string;
  lastName: string;
  phone: string;
  isLegal: boolean;
}
