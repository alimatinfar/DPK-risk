import ROUTER_LINKS from "../../../../constances/routerLinks.ts";
import type {AdminInquiryHistoriesFilterType, AdminInquiryHistoriesResponseItemType} from "../index.types.ts";
import useFetchData from "../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../request/constances/apis.ts";
import getCleanBodyDataObject from "../../../../request/utils/getCleanBodyDataObject.ts";
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

  const {
    data, isFetching, error
  } = useFetchData<AdminInquiryHistoriesResponseItemType[]>({
    queryKey: [filters],
    axiosConfig: {
      url: APIS.ADMIN_INQUIRY_HISTORIES,
      params: getCleanBodyDataObject({})
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
  }, [data?.data, navigate])

  return {
    filters, setFilters, tableData, isFetching, error,
    deleteModalOpen, deleteModalState, closeDeleteModal, deleteModalShouldBeRemoved
  }
}

export default useAdminInquiryHistories;
