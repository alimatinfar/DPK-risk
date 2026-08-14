import DescriptionField from "../../../../FormFields/DescriptionField/DescriptionField.tsx";
import {exitByUserMistakeDescriptionFieldName, exitCitingTheLetterDescriptionFieldName} from "./index.constances.ts";
import Message from "../../../../../../../components/others/Message/Message.tsx";
import AnnouncingReferenceField from "../../../../FormFields/AnnouncingReferenceField/AnnouncingReferenceField.tsx";
import LetterNumberField from "../../../../FormFields/LetterNumberField/LetterNumberField.tsx";
import LetterDateField from "../../../../FormFields/LetterDateField/LetterDateField.tsx";


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
    <>
      <AnnouncingReferenceField customLabel='مرجع' isRequired />

      <LetterNumberField isRequired />

      <LetterDateField isRequired />

      <DescriptionField customFieldName={exitCitingTheLetterDescriptionFieldName} />
    </>
  )
}

export default AdminHighRiskIndividualsLettersDetailIndividualsExitModalStep2;
