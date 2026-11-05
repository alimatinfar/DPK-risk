import useReactHookFormWrapper
  from "../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import type {RiskGroupReportDocumentType} from "./useAdminRiskGroupReportDocuments.ts";


export type AdminRiskGroupReportNewReportFormDataType = {
  documents: RiskGroupReportDocumentType[];
}

type Props = {
  onClose: () => void;
}

function useAdminRiskGroupReportNewReportModal(
  {onClose}: Props
) {

  function onSubmitHandler(formData: AdminRiskGroupReportNewReportFormDataType) {
    // TODO: pass the documents to the "pre-process and register new report" api
    void formData

    onClose()
  }

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper<AdminRiskGroupReportNewReportFormDataType>({
    onSubmitHandler
  })

  return {
    formMethods, onSubmit
  }
}

export default useAdminRiskGroupReportNewReportModal
