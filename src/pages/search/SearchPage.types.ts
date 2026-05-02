export type SearchFormResponseType = {
  actualCustomers: {
    customerId: number;
    nationalID: number;
    firstName: string;
    lastName: string;
    shenasnameId: number;
  }[];
  nonCitizenCustomers: null;
  legalCustomers: null;
}

export type SearchFormRequestBodyData = {
  customerType: number;
  accountNumber: number;
  customerId: number;
  shahabId: number;
  cardNumber: number;
  nationalID: number;
  firstName: string;
  lastName: string;
  shenasnameId: number;
}