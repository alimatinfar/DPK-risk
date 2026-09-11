import AdminHighRiskFormStep4Share
  from "../../../../high-risk-individuals/form/steps/step4/AdminHighRiskFormStep4Share.tsx";
import getSelectNameValue from "../../../../../../components/Form/Select/utils/getSelectNameValue.ts";
import useAdminInquiryHistoryFormStep4 from "./hooks/useAdminInquiryHistoryFormStep4.ts";
import {requestReasonFieldName} from "../../../FormFields/RequestReasonField/index.constances.ts";
import {responseSubmissionStatusFieldName} from "../../../FormFields/ResponseSubmissionStatusField/index.constances.ts";
import AdminInquiryHistoriesFormButtons from "../../AdminInquiryHistoriesFormButtons.tsx";


function AdminInquiryHistoryFormStep4() {

  const {
    individuals, formStep1Data, loading, onSubmitHandler
  } = useAdminInquiryHistoryFormStep4()

  return (
    <AdminHighRiskFormStep4Share
      individuals={individuals} formStep1Data={formStep1Data}
      requestReason={getSelectNameValue(formStep1Data?.[requestReasonFieldName])}
      responseSubmissionStatus={getSelectNameValue(formStep1Data?.[responseSubmissionStatusFieldName])}
      ButtonsSection={AdminInquiryHistoriesFormButtons} loading={loading} onSubmitHandler={onSubmitHandler}
    />
  );
}

export default AdminInquiryHistoryFormStep4;
