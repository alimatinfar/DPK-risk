import Modal, {type ModalProps} from "../../../../components/others/Modal/Modal.tsx";
import useAdminRiskGroupReportNewReportModal from "./hooks/useAdminRiskGroupReportNewReportModal.ts";
import ReactHookFormWrapper from "../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import AdminRiskGroupReportDocumentField from "./AdminRiskGroupReportDocumentField.tsx";
import Button from "../../../../components/Form/Button/Button.tsx";
import AdminRiskGroupReportUploadErrorContent from "./AdminRiskGroupReportUploadErrorContent.tsx";
import AdminRiskGroupReportErrorsList from "./AdminRiskGroupReportErrorsList.tsx";
import {RISK_GROUP_REPORT_MODAL_STEPS} from "./index.constances.ts";

export type AdminRiskGroupReportNewReportModalProps = Pick<ModalProps, 'open' | 'onClose'>

function AdminRiskGroupReportNewReportModal(
  {open, onClose}: AdminRiskGroupReportNewReportModalProps
) {

  const {
    step, pageTitle, backAction, formMethods, onSubmit, errors, goToErrorsListStep, reloadUpload, downloadErrorsFile
  } = useAdminRiskGroupReportNewReportModal({open, onClose})

  return (
    <Modal
      open={open} onClose={onClose} title={pageTitle}
      {...backAction && {backAction}}
    >
      {step === RISK_GROUP_REPORT_MODAL_STEPS.UPLOAD && (
        <ReactHookFormWrapper
          formMethods={formMethods} onSubmit={onSubmit}
        >
          <AdminRiskGroupReportDocumentField/>

          <div className='grid grid-cols-2 gap-x-4 mt-4'>
            <Button
              fullWidth variant='default' color='white' onClick={onClose}
            >
              انصراف
            </Button>

            <Button fullWidth type='submit'>
              پیش‌پردازش و ثبت
            </Button>
          </div>
        </ReactHookFormWrapper>
      )}

      {step === RISK_GROUP_REPORT_MODAL_STEPS.UPLOAD_ERROR && (
        <AdminRiskGroupReportUploadErrorContent
          onShowErrors={goToErrorsListStep} onReload={reloadUpload}
        />
      )}

      {step === RISK_GROUP_REPORT_MODAL_STEPS.ERRORS_LIST && (
        <AdminRiskGroupReportErrorsList
          onReload={reloadUpload} errors={errors} downloadErrorsFile={downloadErrorsFile}
        />
      )}
    </Modal>
  );
}

export default AdminRiskGroupReportNewReportModal;
