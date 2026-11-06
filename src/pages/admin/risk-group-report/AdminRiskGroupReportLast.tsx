import AdminRiskGroupReportLabelWithList from "./AdminRiskGroupReportLabelWithList.tsx";
import AdminRiskGroupReportLastItem, {type AdminRiskGroupReportLastItemProps} from "./AdminRiskGroupReportLastItem.tsx";


export type AdminRiskGroupReportLastProps = {
  data: AdminRiskGroupReportLastItemProps['item'][];
}

function AdminRiskGroupReportLast(
  {data}: AdminRiskGroupReportLastProps
) {
  return (
    <AdminRiskGroupReportLabelWithList title='آخرین گزارش'>
      {data?.map(item => (
        <AdminRiskGroupReportLastItem key={item?.id} item={item} />
      ))}
    </AdminRiskGroupReportLabelWithList>
  );
}

export default AdminRiskGroupReportLast;
