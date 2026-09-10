import type {CustomResponseType} from "../../../../../request/types/CustomResponseType.ts";

type DocumentResponseType = {
  id: number;
  documentType: number;
  documentTypeTitle: string;
  name: string;
  description: string;
  content: string;
  isDeleted: boolean;
  createdAt: string;
  fileTokenId: string;
}

type CustomerResponseType = {
  customerId: number;
  firstName: string;
  lastName: string;
  nationalID: number;
  id: number;
  phone: string;
  letterRef: number;
  letterRefTitle: string;
  riskListType: number;
  validityDate: number;
  letterNo: string;
  letterDate: number;
  description: string;
  isOut: boolean;
  isLegal: boolean;
  nationality: number;
  isOutValidityDate: boolean;
}

export type AdminHighRiskIndividualsLettersDetailPageResponseType = {
  letter: {
    id: number;
    letterRef: number;
    letterRefTitle: string;
    riskListType: number;
    riskListTypeTitle: string;
    letterNo: string;
    letterDate: number;
    description: string;
    documents: DocumentResponseType[];
    isOut: boolean;
    validityDate: number;
    isOutValidityDate: boolean;
    baseRiskLetterId: number;
  };
  customers: CustomerResponseType[];
  // outCustomers: CustomerResponseType[]
}

export type AdminHighRiskIndividualsLettersDetailPageProps = {
  responseData: CustomResponseType<AdminHighRiskIndividualsLettersDetailPageResponseType> | undefined
}
