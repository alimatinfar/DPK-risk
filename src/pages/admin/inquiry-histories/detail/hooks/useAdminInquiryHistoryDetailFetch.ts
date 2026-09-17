import type {AdminInquiryHistoryLetterDetailItemResponseType} from "../index.types.ts";
import useFetchData from "../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../request/constances/apis.ts";


type Props = {
  letterId: string | number | null;
}

function useAdminInquiryHistoryDetailFetch(
  {letterId}: Props
) {

  const {
    data: responseData, isFetching, error
  } = useFetchData<AdminInquiryHistoryLetterDetailItemResponseType>({
    axiosConfig: {
      url: APIS.ADMIN_INQUIRY_HISTORIES_DETAIL,
      params: {
        letterId
      }
    },
    options: {
      enabled: !!letterId
    }
  })

  return {
    responseData, isFetching, error
  }
}

export default useAdminInquiryHistoryDetailFetch;
