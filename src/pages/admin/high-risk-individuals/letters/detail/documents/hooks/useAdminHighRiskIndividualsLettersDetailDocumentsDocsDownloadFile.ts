import WhiteAddButton from "../../../../../../../components/Form/Button/inheritedButtons/WhiteAddButton.tsx";
import useMutateData from "../../../../../../../request/hooks/useMutateData.ts";

type BodyDataType = {
  fileTokenId: string;
}

function useAdminHighRiskIndividualsLettersDetailDocumentsDocsDownloadFile() {

  // const {
  //   mutate, isPending
  // } = useMutateData<any, BodyDataType>({
  //   axiosConfig: {
  //     url: APIS.ADMIN_HIGH_RISK_INDIVIDUAL_GET_FILE_CONTENT, method: 'GET'
  //   }
  // })
  //
  // async function onSubmitHandler(fileTokenId: string) {
  //
  //   const bodyData: BodyDataType = {
  //     fileTokenId
  //   }
  //
  //   mutate(bodyData, {
  //     onSuccess: (data, variables, onMutateResult, context) => {
  //       setFormData({formSubmitted: true})
  //     },
  //     ...fireResponseErrorToast()
  //   })
  // }

  return {}
}

export default useAdminHighRiskIndividualsLettersDetailDocumentsDocsDownloadFile;
