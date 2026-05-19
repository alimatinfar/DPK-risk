import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../search/form/SearchPageForm.constances.ts";
import type {CustomResponseType} from "../../../../request/types/CustomResponseType.ts";

export type BasicInformationNaturalResponseType = {
  customerId: number;
  nationalID: number;
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
  educationLevel: number;
  educationLevelTitle: string;
  studyField: number;
  maritalStatus: number;
  maritalStatusTitle: string;
  maritalStatusChangeDate: number;
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
  workPhone: string;
  workProvince: string;
  workCity: string;
  workAddress: string;
  workPlate: string;
  workFloor: number;
  workUnit: number;
  workBuildingName: string;
  workPostalCode: number;
  workMailbox: number;
  lifeStatus: number;
  deathDate: number | string;
}

export type BasicInformationForeignCitizenResponseType = {
  customer: BasicInformationNaturalResponseType;
  nonCitizenData: {
    customerId: number;
    nationalID: number;
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
  dissolutionDate: number | string,
  completionDate: number | string,
  suspensionDate: number | string,
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
  workMailbox: number;
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
  officeMailbox: 101
}

export type BasicInfoDataTypeForEachPersonType = {
  naturalData: CustomResponseType<BasicInformationNaturalResponseType> | undefined;
  legalData: CustomResponseType<BasicInformationLegalResponseType> | undefined;
  foreignCitizenData: CustomResponseType<BasicInformationForeignCitizenResponseType> | undefined;
}

export type HistoryDataType = {
  id: string
  date: string
  location: string
  isLasted: boolean
}