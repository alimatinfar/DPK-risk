import { useEffect, useState } from "react";
import type { HistoryDataType } from "../index.types.ts";
import usePanelBasicInformationHistoryList from "./usePanelBasicInformationHistoryList";

function useSelectActiveHistory() {

  const [activeHistory, setActiveHistory] = useState<HistoryDataType>()

  const {
    infoHistoryList, historiesError, historiesLoading
  } = usePanelBasicInformationHistoryList()

  useEffect(function () {
    if (infoHistoryList.length > 0) {
      setActiveHistory(infoHistoryList[0])
    }
  }, [infoHistoryList])

  return {
    activeHistory, setActiveHistory, infoHistoryList, historiesError, historiesLoading
  }
}

export default useSelectActiveHistory
