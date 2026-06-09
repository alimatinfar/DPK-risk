export type SearchFormResponseType = {
  actualCustomers: {
    customerId: number;
    customerIdStr: string;
    nationalID: number;
    nationalIDStr: string;
    firstName: string;
    lastName: string;
    shenasnameId: number;
  }[];
  nonCitizenCustomers: {
    firstName: string;
    lastName: string;
    customerId: number;
    customerIdStr: string;
    nationalID: number;
    nationalIDStr: string;
    nationalityTitle: string;
    citizenshipTitle: string;
  }[];
  legalCustomers: {
    customerId: string;
    customerIdStr: string;
    legalNationalID: number;
    legalNationalIDStr: string;
    legalName: string;
    tradeName: string;
    abbreviationName: string;
    legalType: string;
    legalTypeTitle: string;
  }[];
}

export type SearchFormRequestBodyData = {
  customerType: number;
  accountNumber?: number;
  accountNumberStr?: string;
  customerId?: number;
  customerIdStr?: string;
  shahabId?: number;
  cardNumber?: number;
  nationalID?: number;
  nationalIDStr?: string;
  firstName?: string;
  lastName?: string;
  shenasnameId?: number;
  nationality?: number;
  citizenship?: number;
  legalName?: string;
  tradeName?: string;
  abbreviationName?: string;
  legalType?: number;
  fromRegistrationDate?: number;
  toRegistrationDate?: number;
}
