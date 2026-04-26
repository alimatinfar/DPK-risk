import { useMemo } from "react";
import type {TdMoreProps} from "../TableBody/TdActions/TdMore/TdMore.tsx";
import { TD_MORE_ACCCESSOR} from "../TableBody/TdActions/TdMore/tdMoreExports.ts";


type Props = {
  data: any;
  actions: (id: any) => TdMoreProps['list'];
  idField?: string;
}

function useGetMappedTableDataWithMoreColumn({ data, actions, idField = 'id' }: Props) {

  const mappedTableData = useMemo(function () {
    const finalData = data || []

    const mappedArray = finalData.map((item: any) => ({
      ...item,
      hasAccountExpirationDate: !!item.accountExpirationDate,
      status: item.isAccountExpired ? 4 : item.status,
      id: item[idField],
      [TD_MORE_ACCCESSOR]: actions(item[idField])
    }))

    return mappedArray
  }, [data])

  return mappedTableData
}

export default useGetMappedTableDataWithMoreColumn