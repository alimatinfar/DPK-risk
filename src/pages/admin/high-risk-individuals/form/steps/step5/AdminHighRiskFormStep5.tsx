import AdminHighRiskLetterDetailDescriptionSection
  from "../../../letters/detail/documents/AdminHighRiskLetterDetailDescriptionSection.tsx";
import {useAdminHighRiskIndividualsFormStore} from "../../store/useAdminHighRiskIndividualsFormStore.ts";
import {descriptionFieldName} from "../../../FormFields/DescriptionField/index.constances.ts";
import {announceReferenceFieldName} from "../../../FormFields/AnnouncingReferenceField/index.constances.ts";
import getSelectNameValue from "../../../../../../components/Form/Select/utils/getSelectNameValue.ts";
import {letterNumberFieldName} from "../../../FormFields/LetterNumberField/index.constances.ts";
import {letterDateFieldName} from "../../../FormFields/LetterDateField/index.constances.ts";
import getFormattedMomentJalaliDateTime
  from "../../../../../../utils/dateAndTIme/momentJalaliDateTime/getFormattedMomentJalaliDateTime.ts";
import AdminHighRiskIndividualsFormButtons from "../../AdminHighRiskIndividualsFormButtons.tsx";

function AdminHighRiskFormStep5() {

  const formStep1Data = useAdminHighRiskIndividualsFormStore(state => state.formData.step1)

  function onSubmitHandler() {

  }

  return (
    <div className='flex flex-col gap-y-4'>
      <AdminHighRiskLetterDetailDescriptionSection
        description={formStep1Data?.[descriptionFieldName]}
        letterDate={formStep1Data?.[letterDateFieldName] ? getFormattedMomentJalaliDateTime({date: formStep1Data?.[letterDateFieldName], mode: 'jDate'}) : ''}
        letterNumber={formStep1Data?.[letterNumberFieldName]}
        reference={getSelectNameValue(formStep1Data?.[announceReferenceFieldName])}
      />

      <AdminHighRiskIndividualsFormButtons
        onClick={onSubmitHandler}
      />
    </div>
  );
}

export default AdminHighRiskFormStep5;
