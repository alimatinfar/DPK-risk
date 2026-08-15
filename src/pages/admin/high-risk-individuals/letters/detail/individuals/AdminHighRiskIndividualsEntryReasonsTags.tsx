import Tag from "../../../../../../components/others/Tag/Tag.tsx";


type Props = {
  entryReasons: string[];
}

function AdminHighRiskIndividualsEntryReasonsTags(
  {entryReasons}: Props
) {
  return (
    <div className='flex flex-wrap gap-x-2'>
      {entryReasons?.map((reason, reasonIndex) => (
        <Tag key={reasonIndex} text={reason} color='gray' variant='fade'/>
      ))}
    </div>
  );
}

export default AdminHighRiskIndividualsEntryReasonsTags;
