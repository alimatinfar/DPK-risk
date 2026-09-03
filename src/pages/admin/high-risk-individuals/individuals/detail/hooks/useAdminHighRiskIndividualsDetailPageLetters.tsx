import {useParams} from "react-router";
import useGetQueryParam from "../../../../../../hooks/useGetQueryParam.ts";
import QUERY_PARAMS from "../../../../../../constances/queryParams.ts";
import {letterNumberFieldLabel, letterNumberFieldName} from "../../../FormFields/LetterNumberField/index.constances.ts";
import {
  announceReferenceFieldLabel,
  announceReferenceFieldName
} from "../../../FormFields/AnnouncingReferenceField/index.constances.ts";
import {letterDateFieldLabel, letterDateFieldName} from "../../../FormFields/LetterDateField/index.constances.ts";
import {expireDateFieldLabel, expireDateFieldName} from "../../../FormFields/ExpireDateField/index.constances.ts";
import {descriptionFieldName} from "../../../FormFields/DescriptionField/index.constances.ts";
import AdminHighRiskIndividualsEntryReasonsTags
  from "../../../letters/detail/individuals/AdminHighRiskIndividualsEntryReasonsTags.tsx";
import type {
  AdminHighRiskIndividualRelatedLetterType,
  AdminHighRiskIndividualRelatedShareLetterType
} from "../index.types.ts";
import {riskListTypeFieldLabel, riskListTypeFieldName} from "../../../FormFields/RiskListTypeField/index.constances.ts";


type GetFieldsIsExitLetter = {
  isExit: true;
  item: AdminHighRiskIndividualRelatedShareLetterType;
}

type GetFieldsIsMainLetter = {
  isExit: false;
  item: AdminHighRiskIndividualRelatedLetterType;
}

type GetLetterFieldsType = GetFieldsIsExitLetter | GetFieldsIsMainLetter

function useAdminHighRiskIndividualsDetailPageLetters() {

  function getTopFields({item, isExit}: GetLetterFieldsType) {
    return [
      {
        label: letterNumberFieldLabel, value: item?.[letterNumberFieldName]
      },
      {
        label: announceReferenceFieldLabel, value: item?.[announceReferenceFieldName]
      },
      {
        label: letterDateFieldLabel, value: item?.[letterDateFieldName]
      },
      ...isExit ? [] : [
        {
          label: riskListTypeFieldLabel, value: item?.[riskListTypeFieldName]
        },
        {
          label: expireDateFieldLabel, value: item?.[expireDateFieldName]
        }
      ],
      {
        label: 'توضیحات نامه', value: item?.[descriptionFieldName], className: 'col-span-3'
      }
    ]
  }

  return {
    getTopFields
  }
}

export default useAdminHighRiskIndividualsDetailPageLetters;
