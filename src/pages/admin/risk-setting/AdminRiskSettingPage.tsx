
import useAdminRiskTree from "./hooks/useAdminRiskTree.ts";

import {riskData} from "./data/riskData.ts";
import AdminRiskTreeColumn from "./components/AdminRiskTreeColumn.tsx";
import {indicatorGroupLabel, indicatorLabel, indicatorTypeLabel, subIndicatorLabel} from "./index.constances.ts";


function AdminRiskSettingPage() {

  const data = riskData

  const {
    groups, indicators, subIndicators,
    selectedTypeId, selectedGroupId, selectedIndicatorId,
    selectTypeHandler, selectGroupHandler, selectIndicatorHandler,
  } = useAdminRiskTree({tree: data});

  return (
    <div
      dir="rtl"
      className="grid grid-cols-4"
    >
      <AdminRiskTreeColumn
        items={data}
        selectedId={selectedTypeId}
        onSelect={selectTypeHandler}
        title={indicatorTypeLabel}
      />

      <AdminRiskTreeColumn
        items={groups}
        selectedId={selectedGroupId}
        onSelect={selectGroupHandler}
        isEmptyState={!selectedTypeId}
        title={indicatorGroupLabel}
        previousLevelTitle={indicatorTypeLabel}
        previousSelectedId={selectedTypeId}
      />

      {selectedTypeId && (
        <AdminRiskTreeColumn
          items={indicators}
          selectedId={selectedIndicatorId}
          onSelect={selectIndicatorHandler}
          isEmptyState={!selectedGroupId}
          title={indicatorLabel}
          previousLevelTitle={indicatorGroupLabel}
          previousSelectedId={selectedGroupId}
        />
      )}

      {selectedGroupId && (
        <AdminRiskTreeColumn
          items={subIndicators}
          isLast
          isEmptyState={!selectedIndicatorId}
          title={subIndicatorLabel}
          previousLevelTitle={indicatorLabel}
          previousSelectedId={selectedIndicatorId}
        />
      )}
    </div>
  );
}

export default AdminRiskSettingPage

