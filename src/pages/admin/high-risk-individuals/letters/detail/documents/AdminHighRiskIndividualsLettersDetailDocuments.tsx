import {
  DetailInfoSection
} from "../../../../../../components/others/DetailInfo/DetailInfoSection";
import useAdminHighRiskIndividualsLettersDetailDocuments
  from "./hooks/useAdminHighRiskIndividualsLettersDetailDocuments.ts";

function AdminHighRiskIndividualsLettersDetailDocuments() {

  const {
    descriptionItems
  } = useAdminHighRiskIndividualsLettersDetailDocuments()

  return (
    <div className='flex flex-col gap-y-4'>
      <DetailInfoSection
        title={'توضیحات'} customGridColsClass='grid-cols-3'
        infoList={descriptionItems}
      />
    </div>
  );
}

export default AdminHighRiskIndividualsLettersDetailDocuments;
