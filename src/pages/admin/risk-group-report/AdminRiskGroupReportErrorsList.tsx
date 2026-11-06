import Table from "../../../components/others/Table/Table.tsx";
import type {RiskGroupReportFileErrorType} from "./index.types.ts";
import {
  ADMIN_RISK_GROUP_REPORT_ERRORS_COLUMNS, ERROR_MESSAGE_COLUMN_ACCESSOR, ERROR_ROW_NUMBER_COLUMN_ACCESSOR
} from "./index.constances.ts";
import Button from "../../../components/Form/Button/Button.tsx";
import DownloadIcon from "../../../components/svg/DownloadIcon.tsx";
import DownloadIcon2 from "../../../components/svg/DownloadIcon2.tsx";


export type AdminRiskGroupReportErrorsListProps = {
  errors: RiskGroupReportFileErrorType[];
  onReload: () => void;
  downloadErrorsFile: () => void;
}

function AdminRiskGroupReportErrorsList(
  {
    errors, onReload, downloadErrorsFile
  }: AdminRiskGroupReportErrorsListProps
) {

  const tableData = errors.map((error, index) => ({
    id: index + 1,
    [ERROR_ROW_NUMBER_COLUMN_ACCESSOR]: error.rowNumber,
    [ERROR_MESSAGE_COLUMN_ACCESSOR]: error.message,
  }))

  return (
    <div>
      <Table columns={ADMIN_RISK_GROUP_REPORT_ERRORS_COLUMNS} data={tableData}/>

      <div className='grid grid-cols-2 gap-x-4 mt-4'>
        <Button
          fullWidth variant='default' color='white' onClick={downloadErrorsFile}
          rightIcon={<DownloadIcon2 />}
        >
          دریافت فایل خطاها
        </Button>

        <Button fullWidth onClick={onReload}>
          بارگذاری مجدد
        </Button>
      </div>
    </div>
  );
}

export default AdminRiskGroupReportErrorsList;
