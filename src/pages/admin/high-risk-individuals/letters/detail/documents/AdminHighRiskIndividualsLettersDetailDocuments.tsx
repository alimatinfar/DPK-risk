import {
  DetailInfoSection
} from "../../../../../../components/others/DetailInfo/DetailInfoSection";
import useAdminHighRiskIndividualsLettersDetailDocuments
  from "./hooks/useAdminHighRiskIndividualsLettersDetailDocuments.ts";
import CardWithHeader from "../../../../../../components/others/Card/CardWithHeader/CardWithHeader.tsx";

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

      <CardWithHeader
        title='تایم لاین تغییرات'
        headerEndAdornment={<div>salam</div>}
      >
        محتوای تایم لاین
      </CardWithHeader>
    </div>
  );
}

export default AdminHighRiskIndividualsLettersDetailDocuments;
