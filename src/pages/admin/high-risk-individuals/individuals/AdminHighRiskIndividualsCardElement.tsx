import type {ResultCardDataType} from "../../../search/result/ResultCard.types.ts";
import useResultPersonCategoryFields from "../../../search/result/hooks/useResultPersonCategoryFields.ts";
import {adminHighRiskIndividualsCardSeparatedFieldsNameLabel} from "./index.constances.ts";
import DeleteIcon from "../../../../components/svg/DeleteIcon.tsx";
import IconClickable from "../../../../components/others/Icon/IconClickable.tsx";
import Button from "../../../../components/Form/Button/Button.tsx";
import DownloadIcon from "../../../../components/svg/DownloadIcon.tsx";


type Props = {
  data: ResultCardDataType
}

function AdminHighRiskIndividualsCardElement(
  {data}: Props
) {

  const {fields} = useResultPersonCategoryFields({
    separatedFieldsName: adminHighRiskIndividualsCardSeparatedFieldsNameLabel, data
  })

  console.log({fields})

  return (
    <div className='rounded-lg border border-gray-200 flex flex-col overflow-hidden'>
      <div className='bg-gray-100 flex items-center justify-between px-2 py-1.5'>
        <p>
          {data.name}
        </p>

        <IconClickable
          onClick={() => console.log('salam')}
          hoverClass='hover:bg-red-100'
        >
          <DeleteIcon strokeClass='stroke-[1.5]' textColor='text-red-500'/>
        </IconClickable>
      </div>

      <div className='p-2 flex flex-col'>
        <div className='flex flex-col gap-y-2 py-2'>
          {fields.map((field, index) => {
            return (
              <div
                key={index}
                className='flex items-center justify-between text-sm text-secondary-text'
              >
                <span>{field.label}</span>
                <span>{field.value}</span>
              </div>
            )
          })}
        </div>

        <div className='pt-2 border-t border-gray-200'>
          <Button
            variant='link' fullWidth size='sm'
            rightIcon={<DownloadIcon />}
          >
            دریافت مستندات
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AdminHighRiskIndividualsCardElement;
