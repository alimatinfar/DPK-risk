import AdminRiskGroupReportLabelWithList from "./AdminRiskGroupReportLabelWithList.tsx";
import AdminRiskGroupReportQueueItem, {type AdminRiskGroupReportQueueItemProps} from "./AdminRiskGroupReportQueueItem.tsx";


export type AdminRiskGroupReportQueueProps = {
  data: AdminRiskGroupReportQueueItemProps['item'][];
}

function AdminRiskGroupReportQueue(
  {
    data
  }: AdminRiskGroupReportQueueProps
) {
  return (
    <AdminRiskGroupReportLabelWithList title='در صف'>
      {data?.map(item => (
        <AdminRiskGroupReportQueueItem key={item?.id} item={item} />
      ))}
    </AdminRiskGroupReportLabelWithList>
  );
}

export default AdminRiskGroupReportQueue;
