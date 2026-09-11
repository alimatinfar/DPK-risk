import getSelectNameValue from "../../../../../../components/Form/Select/utils/getSelectNameValue.ts";
import getFormattedMomentJalaliDateTime
  from "../../../../../../utils/dateAndTIme/momentJalaliDateTime/getFormattedMomentJalaliDateTime.ts";
import AdminHighRiskIndividualsFormButtons from "../../AdminHighRiskIndividualsFormButtons.tsx";
import {expireDateFieldName} from "../../../FormFields/ExpireDateField/index.constances.ts";
import {riskListTypeFieldName} from "../../../FormFields/RiskListTypeField/index.constances.ts";
import AdminHighRiskFormStep4Share from "./AdminHighRiskFormStep4Share.tsx";
import useAdminHighRiskFormStep4 from "./hooks/useAdminHighRiskFormStep4.ts";

function AdminHighRiskFormStep4() {

  const {
    onSubmitHandler, loading, formStep1Data, individuals, setFormData
  } = useAdminHighRiskFormStep4()

  return (
    <AdminHighRiskFormStep4Share
      individuals={individuals} formStep1Data={formStep1Data}
      expireDate={formStep1Data?.[expireDateFieldName] ? getFormattedMomentJalaliDateTime({
        date: formStep1Data?.[expireDateFieldName],
        mode: 'jDate'
      }) : ''}
      riskListType={getSelectNameValue(formStep1Data?.[riskListTypeFieldName])}
      ButtonsSection={AdminHighRiskIndividualsFormButtons} loading={loading} onSubmitHandler={onSubmitHandler}
    />
  );
}

export default AdminHighRiskFormStep4;
