import getSelectNameValue from "../../../../../../components/Form/Select/utils/getSelectNameValue.ts";
import getFormattedMomentJalaliDateTime
  from "../../../../../../utils/dateAndTIme/momentJalaliDateTime/getFormattedMomentJalaliDateTime.ts";
import AdminHighRiskIndividualsFormButtons from "../../AdminHighRiskIndividualsFormButtons.tsx";
import {expireDateFieldName} from "../../../FormFields/ExpireDateField/index.constances.ts";
import {riskListTypeFieldName} from "../../../FormFields/RiskListTypeField/index.constances.ts";
import {useAdminHighRiskIndividualsFormStore} from "../../store/useAdminHighRiskIndividualsFormStore.ts";
import AdminHighRiskFormStep4Share from "./AdminHighRiskFormStep4Share.tsx";

function AdminHighRiskFormStep4() {

  const formStep1Data = useAdminHighRiskIndividualsFormStore(state => state.formData.step1)
  const individuals = useAdminHighRiskIndividualsFormStore(state => state.formData.step3.individuals)
  const setFormData = useAdminHighRiskIndividualsFormStore(state => state.setFormData)

  return (
    <AdminHighRiskFormStep4Share
      setFormData={setFormData} individuals={individuals} formStep1Data={formStep1Data}
      expireDate={formStep1Data?.[expireDateFieldName] ? getFormattedMomentJalaliDateTime({date: formStep1Data?.[expireDateFieldName], mode: 'jDate'}) : ''}
      riskListType={getSelectNameValue(formStep1Data?.[riskListTypeFieldName])}
      ButtonsSection={AdminHighRiskIndividualsFormButtons}
    />
  );
}

export default AdminHighRiskFormStep4;
