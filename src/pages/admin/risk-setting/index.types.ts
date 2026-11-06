export type RiskTreeItemCommonType = {
  id: string;
  title: string;
  weight: number;
}

export type RiskSubIndicator = RiskTreeItemCommonType

export type RiskIndicator = {
  subIndicators: RiskSubIndicator[];
} & RiskTreeItemCommonType

export type RiskGroup = {
  indicators: RiskIndicator[];
} & RiskTreeItemCommonType

export type RiskIndicatorType = {
  groups: RiskGroup[];
} & RiskTreeItemCommonType

export type RiskTree = RiskIndicatorType[];


export type AdminRiskTreeResponseDataType = [
  {
    id: number;
    riskTypeName: string;
    weight: number;
    riskGroups: {
      id: number;
      riskTypeId: number;
      groupName: string;
      weight: number;
      riskIndicators: {
        id: number;
        riskGroupId: number;
        indicatorName: string;
        weight: number;
        riskSubIndicators: {
          id: number;
          riskIndicatorId: number;
          subIndicatorName: string;
          riskValue: number;
          riskPoint: number;
        }[];
      }[];
    }[];
  }
]
