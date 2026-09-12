import ROUTER_LINKS from "../../../../constances/routerLinks.ts";
import type {AdminInquiryHistoriesFilterType, AdminInquiryHistoriesResponseItemType} from "../index.types.ts";
import {useMemo} from "react";
import TABLE_ACCESSORS from "../../../../components/others/Table/constances/tableAccessors.ts";
import {TableDetailAction} from "../../../../components/others/Table/constances/actions/TableDetailAction.tsx";
import EditIcon from "../../../../components/svg/EditIcon.tsx";
import DeleteIcon from "../../../../components/svg/DeleteIcon.tsx";
import useFilter from "../../../../components/Form/FilterForm/hooks/useFilter.ts";
import {useNavigate} from "react-router";
import {
  ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS,
  ADMIN_INQUIRY_HISTORIES_FAKE_DATA,
  adminInquiryHistoriesDefaultFilters
} from "../index.constances.tsx";
import useModalOpen from "../../../../hooks/modal/useModalOpen.tsx";
import QUERY_PARAMS from "../../../../constances/queryParams.ts";
import getUrlWithParams from "../../../../utils/getUrlWithParams.ts";
import useFetchData from "../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../request/constances/apis.ts";
import getCleanBodyDataObject from "../../../../request/utils/getCleanBodyDataObject.ts";
import {
  announceReferenceFieldName
} from "../../high-risk-individuals/FormFields/AnnouncingReferenceField/index.constances.ts";
import getSelectIdValue from "../../../../components/Form/Select/utils/getSelectIdValue.ts";
import {requestReasonFieldName} from "../FormFields/RequestReasonField/index.constances.ts";
import {responseSubmissionStatusFieldName} from "../FormFields/ResponseSubmissionStatusField/index.constances.ts";
import {letterNumberFieldName} from "../../high-risk-individuals/FormFields/LetterNumberField/index.constances.ts";
import {nationalCodeFieldName} from "../../high-risk-individuals/FormFields/NationalCodeField/index.constances.ts";
import getBodyDataDateField from "../../../../request/utils/getBodyDataDateField.ts";
import {letterToDateFieldName} from "../../high-risk-individuals/FormFields/LetterToDateField/index.constances.ts";
import {letterFromDateFieldName} from "../../high-risk-individuals/FormFields/LetterFromDateField/index.constances.ts";


function useAdminInquiryHistories() {

  const navigate = useNavigate()

  const {
    open: deleteModalOpen, modalState: deleteModalState,
    setModalState: setDeleteModalState, closeModal: closeDeleteModal,
    shouldBeRemoved: deleteModalShouldBeRemoved
  } = useModalOpen<number | null>(null)

  const {
    filters, setFilters
  } = useFilter<AdminInquiryHistoriesFilterType>({
    defaultFilterFormData: adminInquiryHistoriesDefaultFilters,
  })

  const filtersData = filters?.data

  const {
    data, isFetching, error
  } = useFetchData<AdminInquiryHistoriesResponseItemType[]>({
    queryKey: [filters],
    axiosConfig: {
      url: APIS.ADMIN_INQUIRY_HISTORIES,
      params: getCleanBodyDataObject({
        LetterRef: getSelectIdValue(filtersData?.[announceReferenceFieldName]),
        Reson: getSelectIdValue(filtersData?.[requestReasonFieldName]),
        LetterNo: filtersData?.[letterNumberFieldName],
        FromLetterDate: getBodyDataDateField(filtersData?.[letterFromDateFieldName]),
        ToLetterDate: getBodyDataDateField(filtersData?.[letterToDateFieldName]),
        Status: getSelectIdValue(filtersData?.[responseSubmissionStatusFieldName]),
        NationalId: filtersData?.[nationalCodeFieldName],
        // Name: filtersData?.[customerNameFieldName],
      })
    }
  })

  const tableData = useMemo(function () {
    // const finalData = data?.data
    const finalData = ADMIN_INQUIRY_HISTORIES_FAKE_DATA
    if (!finalData) return []

    return finalData?.map((item) => ({
      ...item,
      [TABLE_ACCESSORS.TD_ACTIONS_ACCESSOR]: [
        TableDetailAction(() => {
          const url = ROUTER_LINKS.ADMIN_INQUIRY_HISTORIES_DETAIL(item.id)
          const params = {
            [QUERY_PARAMS.LETTER_NUMBER]: item?.[ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.LETTER_NUMBER]
          }
          navigate(getUrlWithParams(url, params))
        }),
        {
          onClick: () => null,
          icon: <EditIcon width='100%' height='100%'/>,
          title: 'ویرایش',
        },
        {
          onClick: () => setDeleteModalState(item?.id),
          icon: <DeleteIcon width='100%' height='100%'/>,
          title: 'حذف سابقه استعلام',
        }
      ],
    }))
  }, [navigate])

  return {
    filters, setFilters, tableData,
    deleteModalOpen, deleteModalState, closeDeleteModal, deleteModalShouldBeRemoved
  }
}

export default useAdminInquiryHistories;
