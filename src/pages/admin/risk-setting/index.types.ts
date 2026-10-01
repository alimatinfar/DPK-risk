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
