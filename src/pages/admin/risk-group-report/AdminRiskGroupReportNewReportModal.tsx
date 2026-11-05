import Modal, {type ModalProps} from "../../../components/others/Modal/Modal.tsx";
import useAdminRiskGroupReportNewReportModal from "./hooks/useAdminRiskGroupReportNewReportModal.ts";
import ReactHookFormWrapper from "../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import AdminRiskGroupReportDocumentsField from "./AdminRiskGroupReportDocumentsField.tsx";
import Button from "../../../components/Form/Button/Button.tsx";

export type AdminRiskGroupReportNewReportModalProps = Pick<ModalProps, 'open' | 'onClose'>

function AdminRiskGroupReportNewReportModal(
  {open, onClose}: AdminRiskGroupReportNewReportModalProps
) {

  const {
    formMethods, onSubmit
  } = useAdminRiskGroupReportNewReportModal({onClose})

  return (
    <Modal open={open} onClose={onClose} title='گزارش جدید'>
      <ReactHookFormWrapper
        formMethods={formMethods} onSubmit={onSubmit}
      >
        <AdminRiskGroupReportDocumentsField/>

        <div className={`
        sticky bottom-0 grid grid-cols-2 gap-x-4
      `}>
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
    </Modal>
  );
}

export default AdminRiskGroupReportNewReportModal;
