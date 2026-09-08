import {nationalCodeFieldName, type NationalCodeFieldType} from "../FormFields/NationalCodeField/index.constances.ts";
import {firstNameFieldName, type FirstNameFieldType} from "../FormFields/FirstNameField/index.constances.ts";
import {lastNameFieldName, type LastNameFieldType} from "../FormFields/LastNameField/index.constances.ts";
import {riskListTypeFieldName, type RiskListTypeFieldType} from "../FormFields/RiskListTypeField/index.constances.ts";

export type AdminHighRiskIndividualsFilterType = {
  [nationalCodeFieldName]: NationalCodeFieldType;
  [firstNameFieldName]: FirstNameFieldType;
  [lastNameFieldName]: LastNameFieldType;
  [riskListTypeFieldName]: RiskListTypeFieldType;
}


type CustomerResponseType = {
  customerId: number
  nationalID: number
  firstName: string;
  lastName: string;
  phone: string;
  isLegal: boolean;
  nationality: number
  isIranian: boolean;
}

export type AdminHighRiskIndividualsCustomerResponseItemType = {
  "realCustomer": CustomerResponseType[],
  "nonCitizenCustomer": CustomerResponseType[],
  "legalCustomer": CustomerResponseType[],
  "nationalIdsError": null
}
