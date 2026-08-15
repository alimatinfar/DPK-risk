import {useParams} from "react-router";
import useGetQueryParam from "../../../../../../hooks/useGetQueryParam.ts";
import QUERY_PARAMS from "../../../../../../constances/queryParams.ts";
import {letterNumberFieldName} from "../../../FormFields/LetterNumberField/index.constances.ts";
import {announceReferenceFieldName} from "../../../FormFields/AnnouncingReferenceField/index.constances.ts";
import {letterDateFieldName} from "../../../FormFields/LetterDateField/index.constances.ts";
import {expireDateFieldName} from "../../../FormFields/ExpireDateField/index.constances.ts";
import {descriptionFieldName} from "../../../FormFields/DescriptionField/index.constances.ts";
import AdminHighRiskIndividualsEntryReasonsTags
  from "../../../letters/detail/individuals/AdminHighRiskIndividualsEntryReasonsTags.tsx";
import type {
  AdminHighRiskIndividualRelatedLetterType,
  AdminHighRiskIndividualRelatedShareLetterType
} from "../index.types.ts";


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
        label: 'شماره نامه', value: item?.[letterNumberFieldName]
      },
      {
        label: 'مرجع', value: item?.[announceReferenceFieldName]
      },
      {
        label: 'تاریخ نامه', value: item?.[letterDateFieldName]
      },
      ...isExit ? [] : [{
        label: 'تاریخ اعتبار', value: item?.[expireDateFieldName]
      }],
    ]
  }

  function getBottomFields({item, isExit}: GetLetterFieldsType) {
    return [
      {
        label: 'توضیحات نامه', value: item?.[descriptionFieldName]
      },
      ...isExit ? [] : [{
        label: 'دلیل ورود', value: (
          <AdminHighRiskIndividualsEntryReasonsTags
            entryReasons={item.entryReasons}
          />
        )
      }],
    ]
  }

  return {
    getTopFields, getBottomFields
  }
}

export default useAdminHighRiskIndividualsDetailPageLetters;
