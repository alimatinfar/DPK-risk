import useFetchData from "../../../request/hooks/useFetchData.ts";
import APIS from "../../../request/constances/apis.ts";
import getTokenInfo from "../../../utils/authentication/getTokenInfo.ts";
import type {ProfileResponseType} from "../index.types.ts";

function useMainLayoutProfileSection() {

  const tokenInfo = getTokenInfo()

  const {
    data, isFetching, error
  } = useFetchData<ProfileResponseType>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_BRANCH,
      params: {
        branchCode: tokenInfo?.["dpk/AdditionalInfo/BranchCode"]
      }
    }
  })

  return {
    profileData: data?.data, profileLoading: isFetching
  }
}

export default useMainLayoutProfileSection;
