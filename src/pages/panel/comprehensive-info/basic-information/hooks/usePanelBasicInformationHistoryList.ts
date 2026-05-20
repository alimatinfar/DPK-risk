import { useMemo } from "react";
import type { HistoryDataType } from "../index.constances.ts";

function usePanelBasicInformationHistoryList() {
  const infoHistoryList: HistoryDataType[] = useMemo(function () {

    return [
      {
        id: "1",
        date: "1405/01/01",
        location: "بانک مرکزی",
        isLasted: true
      },
      {
        id: "2",
        date: "1404/01/01",
        location: "شعبه",
        isLasted: false
      },
      {
        id: "3",
        date: "1403/01/01",
        location: "بانک مرکزی",
        isLasted: false
      },
      {
        id: "4",
        date: "1402/01/01",
        location: "شعبه",
        isLasted: false
      },
      {
        id: "5",
        date: "1401/01/01",
        location: "بانک مرکزی",
        isLasted: false
      },
    ]
  }, [])

  return {
    infoHistoryList
  }
}

export default usePanelBasicInformationHistoryList;