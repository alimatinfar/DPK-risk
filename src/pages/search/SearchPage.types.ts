export type SearchFormResponseType = {
  actualCustomers: {
    customerId: number;
    nationalID: number;
    firstName: string;
    lastName: string;
    shenasnameId: number;
  }[];
  nonCitizenCustomers: {
    customerId: number;
    nationalID: number;
    nationalityTitle: string;
    citizenshipTitle: string;
  }[];
  legalCustomers: {
    customerId: string;
    legalNationalID: number;
    legalName: string;
    tradeName: string;
    abbreviationName: string;
    legalType: string;
  }[];
}

export type SearchFormRequestBodyData = {
  customerType: number;
  accountNumber?: number;
  customerId?: number;
  shahabId?: number;
  cardNumber?: number;
  nationalID?: number;
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