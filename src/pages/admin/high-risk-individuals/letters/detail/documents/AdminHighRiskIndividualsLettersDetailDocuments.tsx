import {
  DetailInfoSection
} from "../../../../../../components/others/DetailInfo/DetailInfoSection";
import useAdminHighRiskIndividualsLettersDetailDocuments
  from "./hooks/useAdminHighRiskIndividualsLettersDetailDocuments.ts";
import CardWithHeader from "../../../../../../components/others/Card/CardWithHeader/CardWithHeader.tsx";
import WhiteAddButton from "../../../../../../components/Form/Button/inheritedButtons/WhiteAddButton.tsx";
import DetailInfoSectionLabelValue
  from "../../../../../../components/others/DetailInfo/DetailInfoSection/DetailInfoSectionLabelValue.tsx";
import Button from "../../../../../../components/Form/Button/Button.tsx";
import DeleteIcon from "../../../../../../components/svg/DeleteIcon.tsx";
import DownloadIcon from "../../../../../../components/svg/DownloadIcon.tsx";
import EditIcon from "../../../../../../components/svg/EditIcon.tsx";


function AdminHighRiskIndividualsLettersDetailDocuments() {

  const {
    descriptionItems, documents
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

      <CardWithHeader
        title='مستندات'
        headerEndAdornment={(
          <WhiteAddButton>
            افزودن مستند
          </WhiteAddButton>
        )}
      >
        {documents.map((document, index) => (
          <div
            key={document?.id}
            className={`flex flex-col gap-y-4 ${index === 0 ? '' : 'pt-4 mt-4 border-t border-gray-200'}`}
          >
            <div className='flex items-center justify-between'>
              <DetailInfoSectionLabelValue
                label='نوع فایل' value={document?.fileType}
              />

              <div className='flex items-center gap-x-4'>
                <Button
                  justIcon variant='default' color='red'
                >
                  <DeleteIcon textColor='text-red-500'/>
                </Button>

                <Button
                  justIcon variant='default' color='white'
                >
                  <EditIcon/>
                </Button>

                <Button
                  rightIcon={<DownloadIcon/>} variant='outlined'
                >
                  دریافت فایل
                </Button>
              </div>
            </div>

            <DetailInfoSectionLabelValue
              label='توضیحات' value={document?.description}
            />
          </div>
        ))}
      </CardWithHeader>
    </div>
  );
}

export default AdminHighRiskIndividualsLettersDetailDocuments;
