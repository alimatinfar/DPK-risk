import type {CustomResponseType} from "../../../../request/types/CustomResponseType.ts";

export type AdminInquiryHistoryLetterDetailItemResponseType = {
  letter: {
    id: number;
    letterRef: number;
    letterRefTitle: string;
    reson: number;
    resonTitle: string;
    letterNo: string;
    letterDate: number;
    description: string;
    status: number;
    statusTitle: string;
    documents: {
      id: number;
      documentType: number;
      documentTypeTitle: string;
      name: string;
      description: string;
      content: null,
      isDeleted: false,
      createdAt: string;
      fileTokenId: string;
    }[]
  };
  customers: {
    customerId: number;
    nationalID: number;
    firstName: string;
    lastName: string;
    phone: string;
    isLegal: false,
    nationality: number;
    isIranian: true
  }[]
}

export type AdminInquiryHistoryLetterDetailProps = {
  responseData: CustomResponseType<AdminInquiryHistoryLetterDetailItemResponseType> | undefined;
  refetch: () => void;
}
