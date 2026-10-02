
import useAdminRiskTree from "./hooks/useAdminRiskTree.ts";

import AdminRiskTreeColumn from "./components/AdminRiskTreeColumn.tsx";
import {indicatorGroupLabel, indicatorLabel, indicatorTypeLabel, subIndicatorLabel} from "./index.constances.ts";
import APIS from "../../../request/constances/apis.ts";
import RenderLogic from "../../../components/others/RenderLogic/RenderLogic.tsx";


function AdminRiskSettingPage() {

  const {
    groups, indicators, subIndicators, tree, refetch, error, isFetching,
    selectedTypeId, selectedGroupId, selectedIndicatorId,
    selectTypeHandler, selectGroupHandler, selectIndicatorHandler,
  } = useAdminRiskTree()

  return (
    <RenderLogic
      error={error} isLoading={isFetching}
    >
      <div
        className="grid grid-cols-4"
      >
        <AdminRiskTreeColumn
          items={tree}
          selectedId={selectedTypeId}
          onSelect={selectTypeHandler}
          title={indicatorTypeLabel}
          apiAddress={APIS.ADMIN_RISK_SETTING_UPDATE_TYPES}
          refetch={refetch}
        />

        <AdminRiskTreeColumn
          items={groups}
          selectedId={selectedGroupId}
          onSelect={selectGroupHandler}
          isEmptyState={!selectedTypeId}
          title={indicatorGroupLabel}
          previousLevelTitle={indicatorTypeLabel}
          previousSelectedId={selectedTypeId}
          apiAddress={APIS.ADMIN_RISK_SETTING_UPDATE_GROUPS}
          refetch={refetch}
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
            apiAddress={APIS.ADMIN_RISK_SETTING_UPDATE_INDICATORS}
            refetch={refetch}
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
            apiAddress={APIS.ADMIN_RISK_SETTING_UPDATE_SUB_INDICATORS}
            refetch={refetch}
          />
        )}
      </div>
    </RenderLogic>
  );
}

export default AdminRiskSettingPage

