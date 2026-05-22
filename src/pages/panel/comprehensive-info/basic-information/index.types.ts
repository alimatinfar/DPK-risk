import type {CustomResponseType} from "../../../../request/types/CustomResponseType.ts";

export type BasicInformationNaturalResponseType = {
  customerId: number;
  nationalID: number;
  nationalIDStr: string;
  firstName: string;
  lastName: string;
  shenasnameId: number;
  fathername: string;
  gender: number;
  genderTitle: string;
  shenasnameSeries: string;
  shenasnameSerial: string;
  countryOfBirth: string;
  cityOfBirth: string;
  birthDate: number;
  age: number;
  customerType: number;
  customerTypeTitle: string;
  customerSubType: string;

  educationLevel: number;
  educationLevelTitle: string;
  studyField: number;

  maritalStatus: number;
  maritalStatusTitle: string;
  maritalStatusChangeDate: number | null;

  mobile: string;
  homePhone: string;
  homeProvince: string;
  homeCity: string;
  homeAddress: string;
  homePlate: string;
  homeFloor: number;
  homeUnit: number;
  homeBuildingName: string;
  homePostalCode: number;
  homeMailbox: string;

  workPhone: string | null;
  workProvince: string | null;
  workCity: string | null;
  workAddress: string | null;
  workPlate: string | null;
  workFloor: number | null;
  workUnit: number | null;
  workBuildingName: string | null;
  workPostalCode: number | null;
  workMailbox: number | null;

  lifeStatus: number;
  deathDate: number | string | null;

  changeLastDate: number;
  changeLastReason: string | null;

  branchCode: number;
  branchName: string;

  areaCode: string;
  areaName: string;
};


export type BasicInformationForeignCitizenResponseType = {
  customer: BasicInformationNaturalResponseType;
  nonCitizenData: {
    customerId: number;
    nationalID: number;
    nationalIDStr: string;
    ancestorsName: string;
    nationality: number;
    nationalityTitle: string;
    citizenship: number;
    passportType: number;
    passportDate: number;
    identificationDocumentType: number;
    identificationDocumentTypeTitle: string;
    identificationDocumentNumber: number;
    residencePermitOrVisaNumber: number;
    licenseIssuanceDate: number;
    licenseExpirationDate: number;
    issueDateOfCertificate: number;
    expirationDateOfCertificate: number;
    dateOfLastEntryIntoTheCountry: number
  }
}

export type BasicInformationLegalResponseType = {
  customerId: number;
  nationalID: number;
  nationalIDStr: string;
  legalName: string;
  tradeName: string;
  abbreviationName: string;
  legalType: number;
  registrationUnit: string;
  registrationNumber: number;
  registrationDate: number;
  registrationProvince: string;
  registrationCity: string;
  registeringAuthority: string;
  licenseNumber: number;
  licenseDate: number;
  establishmentDate: number;
  nationalIdStatus: number;
  legalEntityStatus: number;
  eNamadStatus: string;

  dissolutionDate: number | string | null;
  completionDate: number | string | null;
  suspensionDate: number | string | null;

  emailAddress: string;
  webSite: string;

  workPhone: string;
  workFax: string;
  workProvince: string;
  workCity: string;
  workAddress: string;
  workPlate: string;
  workFloor: number;
  workUnit: number;
  workBuildingName: string;
  workPostalCode: number;
  workMailbox: string | number;

  officePhone: string;
  officeFax: string;
  officeProvince: string;
  officeCity: string;
  officeAddress: string;
  officePlate: string;
  officeFloor: number;
  officeUnit: number;
  officeBuildingName: string;
  officePostalCode: number;
  officeMailbox: string | number;

  changeLastDate: number;

  customerSubType: string;
  branchCode: number;
  branchName: string;
  areaCode: string;
  areaName: string;
};


export type BasicInfoDataTypeForEachPersonType = {
  naturalData: CustomResponseType<BasicInformationNaturalResponseType> | undefined;
  legalData: CustomResponseType<BasicInformationLegalResponseType> | undefined;
  foreignCitizenData: CustomResponseType<BasicInformationForeignCitizenResponseType> | undefined;
}

export type HistoryDataType = {
  id: string | number;
  date: string;
  location: string;
  isLasted: boolean;
}

export type PanelBasicInfoHistoriesResponseType = {
  changeLastDate: number;
  changeLastReason: string;
  id: number;
}[]
