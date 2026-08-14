import DetailInfoSectionLabelValue
  , {
  type DetailInfoSectionLabelValueProps
} from "../../../../../../components/others/DetailInfo/DetailInfoSection/DetailInfoSectionLabelValue.tsx";
import type {ReactNode} from "react";


type Props = {
  fields: DetailInfoSectionLabelValueProps[];
  actions: ReactNode;
  bottomField: DetailInfoSectionLabelValueProps;
}

function AdminHighRiskIndividualsLettersDetailIndividualsFieldsWithActions(
  {fields, actions, bottomField}: Props
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

      <DetailInfoSectionLabelValue
        {...bottomField}
      />
    </div>
  );
}

export default AdminHighRiskIndividualsLettersDetailIndividualsFieldsWithActions;
