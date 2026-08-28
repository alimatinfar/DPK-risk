import {useMemo} from "react";

import type {AdminHighRiskIndividualsLettersResponseItemType} from ".././index.types.ts";
import {letterNumberFieldName} from "../../FormFields/LetterNumberField/index.constances.ts";
import getSelectIdValue from "../../../../../components/Form/Select/utils/getSelectIdValue.ts";
import {announceReferenceFieldName} from "../../FormFields/AnnouncingReferenceField/index.constances.ts";
import getBodyDataDateField from "../../../../../request/utils/getBodyDataDateField.ts";
import {letterFromDateFieldName} from "../../FormFields/LetterFromDateField/index.constances.ts";
import {letterToDateFieldName} from "../../FormFields/LetterToDateField/index.constances.ts";
import displayDate from "../../../../../utils/display/displayDate.ts";
import TABLE_ACCESSORS from "../../../../../components/others/Table/constances/tableAccessors.ts";
import {TableDetailAction} from "../../../../../components/others/Table/constances/actions/TableDetailAction.tsx";
import {useNavigate} from "react-router";
import ROUTER_LINKS from "../../../../../constances/routerLinks.ts";
import useFetchData from "../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../request/constances/apis.ts";
import {ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS_KEYS} from "../index.constances.tsx";
import type {AdminHighRiskIndividualsLettersTableProps} from "../AdminHighRiskIndividualsLettersTable.tsx";
import QUERY_PARAMS from "../../../../../constances/queryParams.ts";
import getUrlWithParams from "../../../../../utils/getUrlWithParams.ts";
import getCleanBodyDataObject from "../../../../../request/utils/getCleanBodyDataObject.ts";

function useAdminHighRiskIndividualsLettersTable(
  {filters}: Pick<AdminHighRiskIndividualsLettersTableProps, 'filters'>
) {

  const filtersData = filters?.data

  const {
    data, isFetching, error
  } = useFetchData<AdminHighRiskIndividualsLettersResponseItemType[]>({
    queryKey: [filters],
    axiosConfig: {
      url: APIS.ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS,
      params: getCleanBodyDataObject({
        LetterNo: filtersData?.[letterNumberFieldName],
        LetterRef: getSelectIdValue(filtersData?.[announceReferenceFieldName]),
        FromDate: getBodyDataDateField(filtersData?.[letterFromDateFieldName]),
        ToDate: getBodyDataDateField(filtersData?.[letterToDateFieldName]),
      })
    }
  })

  const navigate = useNavigate()

  const tableData = useMemo(function () {
    if (!data?.data) return []

    return data?.data?.map((item) => ({
      id: item.id,
      [ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS_KEYS.LETTER_NUMBER]: item?.letterNo,
      [ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS_KEYS.ANNOUNCER_REFERENCE]: item?.letterRefTitle,
      [ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS_KEYS.LETTER_DATE]: displayDate(item.letterDate),
      [TABLE_ACCESSORS.TD_ACTIONS_ACCESSOR]: [
        TableDetailAction(() => {
          const url = ROUTER_LINKS.ADMIN_HIGH_RISK_INDIVIDUAL_LETTER_DETAIL(item.id)
          const params = {
            [QUERY_PARAMS.LETTER_NUMBER]: item?.letterNo
          }
          navigate(getUrlWithParams(url, params))
        })
      ],
    }))
  }, [data?.data, navigate])

  return {
    error, isFetching, tableData
  }
}

export default useAdminHighRiskIndividualsLettersTable;
