export type CustomerRiskResponseType = {
  score: number;
  riskFullHierarchy: {
    subIndicatorId: number;
    subIndicatorName: string;
    subIndicatorRiskValue: number;
    indicatorId: number;
    indicatorName: string;
    indicatorWeight: number;
    groupId: number;
    groupName: string;
    groupWeight: number;
    typeId: number;
    riskTypeName: string;
    riskTypeWeight: number;
    isCalculate: boolean;
    calculate: number;
  }[]
}
