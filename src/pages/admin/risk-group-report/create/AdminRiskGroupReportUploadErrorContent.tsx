import Button from "../../../../components/Form/Button/Button.tsx";
import {UPLOAD_ERROR_MESSAGE} from "./index.constances.ts";
import ListIcon from "../../../../components/svg/ListIcon.tsx";


export type AdminRiskGroupReportUploadErrorContentProps = {
  onShowErrors: () => void;
  onReload: () => void;
}

function AdminRiskGroupReportUploadErrorContent(
  {onShowErrors, onReload}: AdminRiskGroupReportUploadErrorContentProps
) {
  return (
    <>
      <p className='text-justify leading-7 text-slate-900 dark:text-white'>
        {UPLOAD_ERROR_MESSAGE}
      </p>

      <div className='grid grid-cols-2 gap-x-4 mt-4'>
        <Button
          fullWidth variant='default' color='white' onClick={onShowErrors}
          rightIcon={<ListIcon />}
        >
          نمایش خطاها
        </Button>

        <Button fullWidth onClick={onReload}>
          بارگذاری مجدد
        </Button>
      </div>
    </>
  );
}

export default AdminRiskGroupReportUploadErrorContent;
