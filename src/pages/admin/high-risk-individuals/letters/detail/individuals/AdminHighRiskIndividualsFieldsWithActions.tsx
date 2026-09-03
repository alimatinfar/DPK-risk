import DetailInfoSectionLabelValue
  , {
  type DetailInfoSectionLabelValueProps
} from "../../../../../../components/others/DetailInfo/DetailInfoSection/DetailInfoSectionLabelValue.tsx";
import type {ReactNode} from "react";


type Props = {
  fields: DetailInfoSectionLabelValueProps[];
  actions: ReactNode;
  bottomFields?: DetailInfoSectionLabelValueProps[];
}

function AdminHighRiskIndividualsFieldsWithActions(
  {fields, actions, bottomFields}: Props
) {
  return (
    <div className={`flex flex-col gap-y-4`}>
      <div className='flex items-center gap-x-4'>
        <div className='grid grid-cols-4 gap-x-4 flex-1'>
          {fields.map((field, fieldIndex) => (
            <DetailInfoSectionLabelValue key={fieldIndex} {...field}/>
          ))}
        </div>

        <div className='flex items-center gap-x-4'>
          {actions}
        </div>
      </div>

      {bottomFields?.map((field, fieldIndex) => (
        <DetailInfoSectionLabelValue key={fieldIndex} {...field}/>
      ))}
    </div>
  );
}

export default AdminHighRiskIndividualsFieldsWithActions;
