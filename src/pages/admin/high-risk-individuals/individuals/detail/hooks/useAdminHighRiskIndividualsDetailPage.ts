import {useParams} from "react-router";
import useGetQueryParam from "../../../../../../hooks/useGetQueryParam.ts";
import QUERY_PARAMS from "../../../../../../constances/queryParams.ts";
import useAdminHighRiskIndividualsDocumentListModalStates
  from "../../../letters/detail/individuals/docListModal/hooks/useAdminHighRiskIndividualsDocumentListModalStates.ts";
import useAdminHighRiskIndividualsExitModalStates
  from "../../../letters/detail/individuals/exitModal/hooks/useAdminHighRiskIndividualsExitModalStates.ts";
import useAdminHighRiskIndividualsLettersDetailIndividualsTimeLine
  from "../../../letters/detail/individuals/hooks/useAdminHighRiskIndividualsLettersDetailIndividualsTimeLine.ts";
import useFetchData from "../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../request/constances/apis.ts";
import type {AdminHighRiskIndividualsDetailItemResponseType} from "../index.types.ts";

function useAdminHighRiskIndividualsDetailPage() {

  const {id: customerId} = useParams()
  const name = useGetQueryParam(QUERY_PARAMS.NAME)

  const {
    data: responseData, isFetching: responseLoading, error: responseError, refetch
  } = useFetchData<AdminHighRiskIndividualsDetailItemResponseType[]>({
    axiosConfig: {
      url: APIS.ADMIN_HIGH_RISK_INDIVIDUAL_CUSTOMER_DETAIL,
      params: {
        customerId
      }
    }
  })

  const {
    docListModalOpen, docListModalShouldBeRemoved, closeDocListModalHandler, docListModalState, setDocListModalState
  } = useAdminHighRiskIndividualsDocumentListModalStates()

  const {
    exitPersonModalOpen, exitPersonModalShouldBeRemoved, closeExitPersonModalHandler,
    exitPersonModalState, setExitPersonModalState
  } = useAdminHighRiskIndividualsExitModalStates<(string | number) | boolean>(false)

  const {
    timeLineHistories
  } = useAdminHighRiskIndividualsLettersDetailIndividualsTimeLine()

  return {
    setDocListModalState, setExitPersonModalState, timeLineHistories, docListModalShouldBeRemoved, docListModalOpen,
    closeDocListModalHandler, docListModalState, exitPersonModalShouldBeRemoved, exitPersonModalOpen,
    closeExitPersonModalHandler, exitPersonModalState, name, responseData, responseError, responseLoading, refetch
  }
}

export default useAdminHighRiskIndividualsDetailPage;
