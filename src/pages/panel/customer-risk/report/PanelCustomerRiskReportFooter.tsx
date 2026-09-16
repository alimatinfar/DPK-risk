
type Props = {
  reportCode?: string;
  date?: string;
}

function PanelCustomerRiskReportFooter(
  {
    reportCode = 'RK-1405-0091', date = '۱۴۰۵/۰۶/۲۳',
  }: Props
) {
  return (
    <div className="flex justify-between border-t border-zinc-100 bg-zinc-50/70 px-[30px] py-3.5 text-[11px] text-zinc-400">
      <span>
        کد گزارش:{' '}
        <b className="text-zinc-500">
          {reportCode}
        </b>
      </span>

      <span>
        تاریخ:{' '}
        <b className="text-zinc-500">
          {date}
        </b>
      </span>
    </div>
  );
}

export default PanelCustomerRiskReportFooter;
