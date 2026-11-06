import {useEffect, useState} from "react";
import useReactHookFormWrapper
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import type {UploadFileDataType} from "../../../../../components/others/FileDataCard/hooks/useFileDataCard.ts";
import type {RiskGroupReportFileErrorType} from "../index.types.ts";
import {RISK_GROUP_REPORT_MODAL_STEPS, type RiskGroupReportModalStepType} from "../index.constances.ts";


export type AdminRiskGroupReportNewReportFormDataType = {
  documents: UploadFileDataType
}

type Props = {
  open: boolean;
  onClose: () => void;
}

// TODO: fake errors, remove this constant and fill the errors from the "pre-process" api response
const MOCK_FILE_ERRORS: RiskGroupReportFileErrorType[] = [
  {rowNumber: 2, message: 'کد ملی وارد شده در این ردیف معتبر نیست'},
  {rowNumber: 5, message: 'تاریخ تولد خالی است'},
  {rowNumber: 9, message: 'شماره حساب تکراری است'},
]

function useAdminRiskGroupReportNewReportModal(
  {open, onClose}: Props
) {

  const [step, setStep] = useState<RiskGroupReportModalStepType>(RISK_GROUP_REPORT_MODAL_STEPS.UPLOAD)
  const [errors, setErrors] = useState<RiskGroupReportFileErrorType[]>([])

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper<AdminRiskGroupReportNewReportFormDataType>({
    onSubmitHandler
  })

  // the modal may stay mounted for a while after closing, so it starts over on every open
  useEffect(function () {
    if (!open) return

    setStep(RISK_GROUP_REPORT_MODAL_STEPS.UPLOAD)
    setErrors([])
    formMethods.reset()
  }, [open])

  function onSubmitHandler(formData: AdminRiskGroupReportNewReportFormDataType) {
    // TODO: call the "pre-process and register new report" api with the uploaded file,
    //       and use its response instead of MOCK_FILE_ERRORS
    void formData

    const fileErrors = MOCK_FILE_ERRORS

    if (!fileErrors.length) {
      onClose()
      return
    }

    setErrors(fileErrors)
    setStep(RISK_GROUP_REPORT_MODAL_STEPS.UPLOAD_ERROR)
  }

  function goToUploadStep() {
    setStep(RISK_GROUP_REPORT_MODAL_STEPS.UPLOAD)
  }

  function goToUploadErrorStep() {
    setStep(RISK_GROUP_REPORT_MODAL_STEPS.UPLOAD_ERROR)
  }

  function goToErrorsListStep() {
    setStep(RISK_GROUP_REPORT_MODAL_STEPS.ERRORS_LIST)
  }

  function reloadUpload() {
    formMethods.reset() // removes the previous file
    setErrors([])
    goToUploadStep()
  }

  function downloadErrorsFile() {
    //TODO download error files
  }

  const pageTitle =
    step === RISK_GROUP_REPORT_MODAL_STEPS.UPLOAD_ERROR ? 'خطای درخواست' :
      step === RISK_GROUP_REPORT_MODAL_STEPS.ERRORS_LIST ? 'خطاهای فایل' :
        'گزارش جدید'

  const backAction =
    step === RISK_GROUP_REPORT_MODAL_STEPS.UPLOAD_ERROR ? goToUploadStep :
      step === RISK_GROUP_REPORT_MODAL_STEPS.ERRORS_LIST ? goToUploadErrorStep :
        undefined

  return {
    step, pageTitle, backAction, formMethods, onSubmit, errors,
    goToErrorsListStep, reloadUpload, downloadErrorsFile
  }
}

export default useAdminRiskGroupReportNewReportModal
