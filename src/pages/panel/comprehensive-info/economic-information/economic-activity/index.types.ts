export type PanelEconomicInformationActivityNaturalResponseType = {
  nationalID: number;
  employmentStatusType: number;
  employmentStatus: number;
  jobCode: number;
  jobTitle: string;
  jobActivityCode: number;
  jobActivityTitle: string;
  workStartDate: string;
  insuranceType: string;
  insuranceNumber: number;
  employerType: number;
  employerId: number;
  employerName: string;
  employerFieldOfWorkCode: number;
  employerFieldOfWorkTitle: string;
  economicCode: number;
  commercialCardNumber: null,
  businessLicense: null,
  activityLicenseNumber: null,
  licensingAuthority: null,
  licenseIssuanceDate: number,
  licenseExpirationDate: number,
  announcementDate: number;
  fromDate: number;
  registrationDate: number;
}[]

export type PanelEconomicInformationActivityLegalResponseType = {
  nationalID: number;
  companyType: number;
  activatyType: number;
  activityClassification: string;
  economicCode: number;
  commercialCardNumber: null,
  announcementDate: number;
  validityStartDate: number;
  validityEndDate: number;
  registrationDate: number;
}[]