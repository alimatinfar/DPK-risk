import {inquiryNumberFieldName, type InquiryNumberFieldType} from "./FormFields/InquiryNumberField/index.constances.ts";
import {
  announceReferenceFieldName, type AnnounceReferenceFieldType
} from "../high-risk-individuals/FormFields/AnnouncingReferenceField/index.constances.ts";
import {
  letterNumberFieldName,
  type LetterNumberFieldType
} from "../high-risk-individuals/FormFields/LetterNumberField/index.constances.ts";
import {requestReasonFieldName, type RequestReasonFieldType} from "./FormFields/RequestReasonField/index.constances.ts";
import {
  nationalCodeFieldName,
  type NationalCodeFieldType
} from "../high-risk-individuals/FormFields/NationalCodeField/index.constances.ts";
import {
  letterFromDateFieldName,
  type LetterFromDateFieldType
} from "../high-risk-individuals/FormFields/LetterFromDateField/index.constances.ts";
import {
  letterToDateFieldName,
  type LetterToDateFieldType
} from "../high-risk-individuals/FormFields/LetterToDateField/index.constances.ts";
import {
  responseSubmissionStatusFieldName,
  type ResponseSubmissionStatusFieldType
} from "./FormFields/ResponseSubmissionStatusField/index.constances.ts";
import {
  firstNameFieldName,
  type FirstNameFieldType
} from "../high-risk-individuals/FormFields/FirstNameField/index.constances.ts";
import {
  lastNameFieldName,
  type LastNameFieldType
} from "../high-risk-individuals/FormFields/LastNameField/index.constances.ts";

export type AdminInquiryHistoriesFilterType = {
  [inquiryNumberFieldName]: InquiryNumberFieldType;
  [announceReferenceFieldName]: AnnounceReferenceFieldType;
  [letterNumberFieldName]: LetterNumberFieldType;
  [requestReasonFieldName]: RequestReasonFieldType;
  [firstNameFieldName]: FirstNameFieldType;
  [lastNameFieldName]: LastNameFieldType;
  [nationalCodeFieldName]: NationalCodeFieldType;
  [letterFromDateFieldName]: LetterFromDateFieldType;
  [letterToDateFieldName]: LetterToDateFieldType;
  [responseSubmissionStatusFieldName]: ResponseSubmissionStatusFieldType;
}

export type AdminInquiryHistoriesResponseItemType = {
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
  documents: null
}
