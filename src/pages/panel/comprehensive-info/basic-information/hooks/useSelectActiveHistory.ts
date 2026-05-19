import { useEffect, useState } from "react";
import type { HistoryDataType } from "../index.constances";
import usePanelBasicInformationHistoryList from "./usePanelBasicInformationHistoryList";

function useSelectActiveHistory() {

  const [activeHistory, setActiveHistory] = useState<HistoryDataType>()

  const { infoHistoryList } = usePanelBasicInformationHistoryList()

  useEffect(function () {
    if (infoHistoryList.length > 0) {
      setActiveHistory(infoHistoryList[0])
    }
  }, [infoHistoryList])

  return {
    activeHistory, setActiveHistory, infoHistoryList
  }
}

export default useSelectActiveHistory