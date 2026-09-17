import useGetQueryParam from "../../../../../hooks/useGetQueryParam.ts";
import QUERY_PARAMS from "../../../../../constances/queryParams.ts";
import useAdminInquiryHistoryDetailFetch from "../../detail/hooks/useAdminInquiryHistoryDetailFetch.ts";
import {useAdminInquiryHistoriesFormStore} from "../store/useAdminInquiryHistoriesFormStore.ts";
import {useEffect} from "react";
import {
  requestReasonFieldName,
  type RequestReasonFieldType
} from "../../FormFields/RequestReasonField/index.constances.ts";
import {
  responseSubmissionStatusFieldName,
  type ResponseSubmissionStatusFieldType
} from "../../FormFields/ResponseSubmissionStatusField/index.constances.ts";
import {
  announceReferenceFieldName,
  type AnnounceReferenceFieldType
} from "../../../high-risk-individuals/FormFields/AnnouncingReferenceField/index.constances.ts";
import {
  letterNumberFieldName,
  type LetterNumberFieldType
} from "../../../high-risk-individuals/FormFields/LetterNumberField/index.constances.ts";
import {
  letterDateFieldName,
  type LetterDateFieldType
} from "../../../high-risk-individuals/FormFields/LetterDateField/index.constances.ts";
import {
  descriptionFieldName,
  type DescriptionFieldType
} from "../../../high-risk-individuals/FormFields/DescriptionField/index.constances.ts";
import type {
  AdminHighRiskIndividualsDocumentFormDataType
} from "../../../high-risk-individuals/FormFields/AdminHighRiskIndividualsDocumentFormFields/index.types.ts";
import type {ResultPersonCardDataType} from "../../../../search/result/ResultCard.types.ts";
import {
  fileTypeFieldName,
  type FileTypeFieldType
} from "../../../high-risk-individuals/FormFields/FileTypeField/index.constances.ts";
import {
  uploadFileFieldName,
  type UploadFileFieldType
} from "../../../high-risk-individuals/FormFields/UploadFileField/index.constances.ts";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../search/form/SearchPageForm.constances.ts";
import {nationalCodeFieldName} from "../../../high-risk-individuals/FormFields/NationalCodeField/index.constances.ts";
import {
  birthCertificationNumberFieldName
} from "../../../../search/form/formFields/natural/BirthCertificateNumberField/BirthCertificateNumberField.constances.ts";
import {
  comprehensiveForeignNationalsIdFieldName
} from "../../../../search/form/formFields/foreignCitizen/ComprehensiveForeignNationalsIdField/ComprehensiveForeignNationalsIdField.constances.ts";
import {
  nationalityFieldName
} from "../../../../search/form/formFields/foreignCitizen/NationalityField/NationalityField.constances.ts";
import {
  citizenshipFieldName
} from "../../../../search/form/formFields/foreignCitizen/CitizenshipField/CitizenshipField.constances.ts";
import {
  legalBrandNameFieldName
} from "../../../../search/form/formFields/legal/LegalBrandNameField/LegalBrandNameField.constances.ts";
import {
  legalRegistrationNumberFieldName
} from "../../../../search/form/formFields/legal/LegalRegistrationNumberField/LegalRegistrationNumberField.constances.ts";
import {legalTypeFieldName} from "../../../../search/form/formFields/legal/LegalTypeField/LegalTypeField.constances.ts";
import parseJalaliDateToMomentFromResponse
  from "../../../../../utils/dateAndTIme/momentJalaliDateTime/parseJalaliDateToMomentFromResponse.ts";
import getPersonTypeByNationality from "../../../../search/form/utils/getPersonTypeByNationality.ts";

function useAdminInquiryHistoriesFormPageEdit() {

  const letterId = useGetQueryParam(QUERY_PARAMS.LETTER_ID)

  const {
    error, isFetching, responseData
  } = useAdminInquiryHistoryDetailFetch({
    letterId
  })

  const setFormData = useAdminInquiryHistoriesFormStore(state => state.setFormData)

  useEffect(() => {
    if (!responseData) return
    const letterData = responseData?.data?.letter

    setFormData({
      step1: {
        [requestReasonFieldName]: {
          id: letterData?.reson, name: letterData?.resonTitle
        },
        [responseSubmissionStatusFieldName]: {
          id: letterData?.status, name: letterData?.statusTitle
        },
        [announceReferenceFieldName]: {
          id: letterData?.letterRef, name: letterData?.letterRefTitle
        },
        [letterNumberFieldName]: letterData?.letterNo,
        [letterDateFieldName]: parseJalaliDateToMomentFromResponse(letterData?.letterDate) || '',
        [descriptionFieldName]: letterData?.description,
      },
      step2: {
        documentsList: letterData?.documents?.map(document => ({
          id: document?.id,
          [fileTypeFieldName]: {
            id: document?.documentType, name: document?.documentTypeTitle
          },
          [descriptionFieldName]: document?.description,
          [uploadFileFieldName]: {
            size: 0,
            name: document?.name,
            data: document?.content,
          }
        })),
      },
      step3: {
        individuals: responseData?.data?.customers?.map(item => ({
          type: getPersonTypeByNationality({
            isLegal: item?.isLegal, nationality: item?.nationality
          }),
          name: `${item?.firstName} ${item?.lastName}`.trim(),
          customerId: item?.customerId,
          [nationalCodeFieldName]: item?.nationalID,
          [birthCertificationNumberFieldName]: '1234567890',
        }))
        // individuals: [
        //   {
        //     type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
        //     name: 'حسین مبینی',
        //     customerId: '1234567890',
        //     [nationalCodeFieldName]: '1234567890',
        //     [birthCertificationNumberFieldName]: '1234567890',
        //   },
        //   {
        //     type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name,
        //     name: 'دوشنبه',
        //     customerId: '123456789012',
        //     [comprehensiveForeignNationalsIdFieldName]: '123456789012',
        //     [nationalityFieldName]: 'افغانستان',
        //     [citizenshipFieldName]: 'ایران',
        //   },
        //   {
        //     type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name,
        //     name: 'دیجی کالا',
        //     customerId: '12345678901',
        //     [legalBrandNameFieldName]: 'دیجی کالا',
        //     [legalRegistrationNumberFieldName]: '12345678901',
        //     [legalTypeFieldName]: 'نوع حقوقی',
        //   },
        // ]
      }
    })
  }, [responseData])

  console.log({responseData})

  return {}
}

export default useAdminInquiryHistoriesFormPageEdit;
