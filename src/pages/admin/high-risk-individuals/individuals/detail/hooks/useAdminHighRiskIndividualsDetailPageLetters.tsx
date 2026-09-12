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
import type {AdminHighRiskIndividualsDetailPageLettersProps} from "../AdminHighRiskIndividualsDetailPageLetters.tsx";
import {useMemo} from "react";
import {EXIT_PERSON_FROM_LETTER_KEYS} from "../../../letters/detail/individuals/index.constances.ts";
import displayDate from "../../../../../../utils/display/displayDate.ts";
import {ADMIN_HIGH_RISK_INDIVIDUAL_RELATED_LETTERS_FAKE_DATE} from "../index.constances.ts";


type GetFieldsIsExitLetter = {
  isExit: true;
  item: AdminHighRiskIndividualRelatedShareLetterType;
}

type GetFieldsIsMainLetter = {
  isExit: false;
  item: AdminHighRiskIndividualRelatedLetterType;
}

type GetLetterFieldsType = GetFieldsIsExitLetter | GetFieldsIsMainLetter

function useAdminHighRiskIndividualsDetailPageLetters(
  {responseData}: Pick<AdminHighRiskIndividualsDetailPageLettersProps, 'responseData'>
) {

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

  const outLetters = useMemo(function () {
    return responseData?.data?.filter(item => item.isOut)
  }, [responseData])

  const lettersData: AdminHighRiskIndividualRelatedLetterType[] = useMemo(function () {
    // const finalData = ADMIN_HIGH_RISK_INDIVIDUAL_RELATED_LETTERS_FAKE_DATE
    const finalData = responseData?.data || []

    return finalData?.filter(item => !item.isOut).map(item => {

      const outLetterForThisItem = outLetters?.find(outLetter => outLetter.baseRiskLetterId === item.id)

      const exitType = outLetterForThisItem ?
        EXIT_PERSON_FROM_LETTER_KEYS.WITH_LETTER : item?.isOutValidityDate ?
          EXIT_PERSON_FROM_LETTER_KEYS.WITH_EXPIRE_DATE : undefined

      return {
        id: item?.id,
        [letterNumberFieldName]: item?.letterNo,
        [announceReferenceFieldName]: item?.letterRefTitle,
        [letterDateFieldName]: displayDate(item?.letterDate),
        [descriptionFieldName]: item?.description,
        [expireDateFieldName]: displayDate(item?.validityDate),
        [riskListTypeFieldName]: item?.riskListTypeTitle,
        ...outLetterForThisItem ? {
          exitLetter: {
            id: outLetterForThisItem?.id,
            letterDate: displayDate(outLetterForThisItem?.letterDate),
            letterNumber: outLetterForThisItem?.letterNo,
            description: outLetterForThisItem?.description,
            [announceReferenceFieldName]: outLetterForThisItem?.letterRefTitle
          }
        } : {},
        exitType
      }
    })
  }, [responseData, outLetters])

  return {
    getTopFields, lettersData
  }
}

export default useAdminHighRiskIndividualsDetailPageLetters;
