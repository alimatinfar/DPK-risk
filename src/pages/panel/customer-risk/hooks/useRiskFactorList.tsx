import {type Factor, type FactorGroup} from "../report/riskData.ts";
import type {RiskFactorListProps} from "../report/RiskFactorList.tsx";
import {useMemo} from "react";

const RISK_TYPE_CONFIG: Record<
  number,
  { color: string; icon: Factor['icon'] }
> = {
  1: {
    color: '#0070f3',
    icon: 'customer',
  },
  2: {
    color: '#8b5cf6',
    icon: 'service',
  },
  3: {
    color: '#f59e0b',
    icon: 'region',
  },
} as const

function useRiskFactorList(
  {
    selectedFactor, responseData
  }: Pick<RiskFactorListProps, 'selectedFactor' | 'responseData'>
) {

  const factors: Factor[] = useMemo(function () {
    const finalData = responseData?.data
    const typeMap = new Map<
      number,
      Factor & {
      groupMap: Map<number, FactorGroup>;
    }
    >();

    finalData?.riskFullHierarchy?.forEach((record) => {
      const {
        typeId,
        riskTypeName,
        calculate,
        isCalculate,
        groupId,
        groupName,
        subIndicatorName,
        subIndicatorRiskValue,
      } = record;

      // ایجاد سطح اول بر اساس typeId
      if (!typeMap.has(typeId)) {
        const config = RISK_TYPE_CONFIG[typeId];

        typeMap.set(typeId, {
          name: riskTypeName,
          score: 0,
          triggered: 0,
          color: config?.color ?? '#64748b',
          icon: config?.icon ?? 'customer',
          groups: [],
          groupMap: new Map(),
        });
      }

      const riskType = typeMap.get(typeId)!;

      // محاسبه score و triggered
      riskType.score += calculate;

      if (isCalculate) {
        riskType.triggered += 1;
      }

      // ایجاد گروه بر اساس groupId
      if (!riskType.groupMap.has(groupId)) {
        const group: FactorGroup = {
          name: groupName,
          items: [],
        };

        riskType.groupMap.set(groupId, group);
        riskType.groups.push(group);
      }

      const group = riskType.groupMap.get(groupId)!;

      // اضافه کردن آیتم به گروه
      group.items.push({
        t: subIndicatorName,
        w: subIndicatorRiskValue,
        on: isCalculate,
      });
    });

    // حذف Map داخلی و برگرداندن ساختار نهایی
    return Array.from(typeMap.values()).map(
      ({ groupMap, ...riskType }) => riskType
    );
  }, [responseData])

  const selected = factors[selectedFactor];

  return {
    selected, factors
  }
}

export default useRiskFactorList;
