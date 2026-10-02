import {useMemo, useState} from 'react';

import type {
  RiskIndicatorType,
  RiskTreeItemCommonType
} from '../index.types.ts';
import useAdminRiskTreeFetchData from "./useAdminRiskTreeFetchData.ts";

export type RiskSelectedStateType = string | null

function useAdminRiskTree(
) {

  const {tree} = useAdminRiskTreeFetchData()

  const [selectedTypeId, setSelectedTypeId] = useState<RiskSelectedStateType>(null)
  const [selectedGroupId, setSelectedGroupId] = useState<RiskSelectedStateType>(null)
  const [selectedIndicatorId, setSelectedIndicatorId] = useState<RiskSelectedStateType>(null)


  const selectedType = useMemo(function () {
    return tree.find(item => item.id === selectedTypeId)
  }, [tree, selectedTypeId])

  const groups = useMemo(function () {
    return selectedType?.groups ?? []
  }, [selectedType])

  const selectedGroup = useMemo(function () {
    return groups.find(item => item.id === selectedGroupId)
  }, [groups, selectedGroupId])

  const indicators = useMemo(function () {
    return selectedGroup?.indicators ?? []
  }, [selectedGroup])

  const selectedIndicator = useMemo(function () {
    return indicators.find(item => item.id === selectedIndicatorId)
  }, [indicators, selectedIndicatorId])

  const subIndicators = useMemo(function () {
    return selectedIndicator?.subIndicators ?? []
  }, [selectedIndicator])

  function selectTypeHandler(item: RiskTreeItemCommonType) {
    setSelectedTypeId(item.id);

    setSelectedGroupId(null);
    setSelectedIndicatorId(null);
  }

  function selectGroupHandler(item: RiskTreeItemCommonType) {
    setSelectedGroupId(item.id);

    setSelectedIndicatorId(null);
  }

  function selectIndicatorHandler(item: RiskTreeItemCommonType) {
    setSelectedIndicatorId(item.id);
  }

  return {
    groups, indicators, subIndicators, tree,
    selectedTypeId, selectedGroupId, selectedIndicatorId,
    selectTypeHandler, selectGroupHandler, selectIndicatorHandler,
  };
}

export default useAdminRiskTree
