import DescriptionField from "../../../../FormFields/DescriptionField/DescriptionField.tsx";
import {exitByUserMistakeDescriptionFieldName, exitCitingTheLetterDescriptionFieldName} from "./index.constances.ts";
import Message from "../../../../../../../components/others/Message/Message.tsx";
import AdminHighRiskIndividualsBaseFormFields from "../../../../FormFields/AdminHighRiskIndividualsBaseFormFields/AdminHighRiskIndividualsBaseFormFields.tsx";


type Props = {
  reasonIsUserMistake: boolean;
}

function AdminHighRiskIndividualsLettersDetailIndividualsExitModalStep2(
  {reasonIsUserMistake}: Props
) {
  return reasonIsUserMistake ? (
    <div className='flex flex-col gap-y-4'>
      <Message
        title='خروج به دلیل خطای کاربر؛ مسئولیت خروج فرد بر عهده کاربر است'
        color='error'
      />

      <DescriptionField customFieldName={exitByUserMistakeDescriptionFieldName} />
    </div>
  ) : (
    <AdminHighRiskIndividualsBaseFormFields descriptionCustomFieldName={exitCitingTheLetterDescriptionFieldName} />
  )
}

export default AdminHighRiskIndividualsLettersDetailIndividualsExitModalStep2;
