import UploadFileField from "../../../FormFields/UploadFileField/UploadFileField.tsx";
import ReactHookFormWrapper
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import FILE_TYPES from "../../../../../../constances/fileTypes.ts";
import AdminHighRiskFormStep3FileUploadModal from "./AdminHighRiskFormStep3FileUploadModal.tsx";
import useAdminHighRiskFormStep3FileUpload from "./hooks/useAdminHighRiskFormStep3FileUpload.ts";
import Loading from "../../../../../../components/others/Loading/Loading.tsx";
import type {AdminHighRiskFormStep3ShareProps} from "./AdminHighRiskFormStep3Share.tsx";
import type {AdminHighRiskFormStep3FoundedIndividualsProps} from "./AdminHighRiskFormStep3FoundedIndividuals.tsx";


export type AdminHighRiskFormStep3FileUploadProps =
  Pick<AdminHighRiskFormStep3FoundedIndividualsProps, 'setUserDuplicateModalState' | 'closeUserDuplicateModalHandler'>
  & Pick<AdminHighRiskFormStep3ShareProps, 'setFormData' | 'individuals' | 'isInquiryHistory' | 'formDataStep1'>

function AdminHighRiskFormStep3FileUpload(
  {
    setFormData, individuals, isInquiryHistory,
    setUserDuplicateModalState, closeUserDuplicateModalHandler, formDataStep1
  }: AdminHighRiskFormStep3FileUploadProps
) {

  const {
    formMethods, onSubmit, modalOpen, closeUploadModalHandler, error, cancelRequestHandler, uploadLoading,
    getTemplateFileHandler, templateFileLoading, checkExistCustomerLoading
  } = useAdminHighRiskFormStep3FileUpload({
    setFormData, individuals, isInquiryHistory,
    setUserDuplicateModalState, closeUserDuplicateModalHandler, formDataStep1
  })

  return (
    <>
      <ReactHookFormWrapper
        formMethods={formMethods} onSubmit={onSubmit}
      >
        <div className='flex flex-col gap-y-2'>
          <p className='text-slate-400'>
            اضافه کردن مشتریان از طریق فایل اکسل
          </p>

          <UploadFileField
            uploadBoxProps={{
              hiddenErrorMessage: true,
              fileTypes: FILE_TYPES.EXCEL,
              accept: '.xlsx,.csv',
              formatEndAdornment: (
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
              )
            }}
          />
        </div>
      </ReactHookFormWrapper>

      <div className='h-6 relative w-full flex items-center justify-center'>
        <span className='absolute m-auto z-10 bg-white px-2  text-slate-400'>
          یا جستجو مشتری
        </span>

        <div className='h-[1px] w-full bg-slate-200'>

        </div>
      </div>

      <AdminHighRiskFormStep3FileUploadModal
        open={modalOpen} onClose={closeUploadModalHandler} error={error} cancelRequestHandler={cancelRequestHandler}
        uploadLoading={uploadLoading} checkExistCustomerLoading={checkExistCustomerLoading}
      />
    </>
  );
}

export default AdminHighRiskFormStep3FileUpload;
