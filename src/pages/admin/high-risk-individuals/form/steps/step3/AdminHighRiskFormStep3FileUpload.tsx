import UploadFileField from "../../../FormFields/UploadFileField/UploadFileField.tsx";
import ReactHookFormWrapper
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import FILE_TYPES from "../../../../../../constances/fileTypes.ts";
import AdminHighRiskFormStep3FileUploadModal from "./AdminHighRiskFormStep3FileUploadModal.tsx";
import useAdminHighRiskFormStep3FileUpload from "./hooks/useAdminHighRiskFormStep3FileUpload.ts";
import Loading from "../../../../../../components/others/Loading/Loading.tsx";


export type AdminHighRiskFormStep3FileUploadProps = {
  uploadApiUrl: string
}

function AdminHighRiskFormStep3FileUpload(
  {
    uploadApiUrl
  }: AdminHighRiskFormStep3FileUploadProps
) {

  const {
    formMethods, onSubmit, modalOpen, closeUploadModalHandler, error, cancelRequestHandler, uploadLoading,
    getTemplateFileHandler, templateFileLoading
  } = useAdminHighRiskFormStep3FileUpload({
    uploadApiUrl
  })

  return (
    <>
      <ReactHookFormWrapper
        formMethods={formMethods} onSubmit={onSubmit}
      >
        <div className='flex flex-col gap-y-2'>
          <p className='text-gray-400'>
            اضافه کردن مشتریان از طریق فایل اکسل
          </p>

          <UploadFileField
            uploadBoxProps={{
              hiddenErrorMessage: true,
              fileTypes: FILE_TYPES.EXCEL,
              accept: '.xlsx,.csv'
            }}
          />

          <div className='flex items-center justify-between'>
            <p className='text-gray-700'>
              فایل اکسل با پسوند xlsx.
            </p>

            <div className='h-8 flex items-center'>
              {templateFileLoading ? (
                <Loading size='sm'/>
              ) : (
                <span
                  onClick={getTemplateFileHandler}
                  className='text-primary underline cursor-pointer hover:text-primary-text hover:bg-primary/5 p-1 rounded-md duration-200'>
                دریافت فایل نمونه
              </span>
              )}
            </div>
          </div>
        </div>
      </ReactHookFormWrapper>

      <div className='h-6 relative w-full flex items-center justify-center'>
        <span className='absolute m-auto z-10 bg-white px-2  text-gray-400'>
          یا جستجو مشتری
        </span>

        <div className='h-[1px] w-full bg-gray-200'>

        </div>
      </div>

      <AdminHighRiskFormStep3FileUploadModal
        open={modalOpen} onClose={closeUploadModalHandler} error={error} cancelRequestHandler={cancelRequestHandler}
        uploadLoading={uploadLoading}
      />
    </>
  );
}

export default AdminHighRiskFormStep3FileUpload;
