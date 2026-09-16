// risk-report.types.ts

export type PanelCustomerRiskFactorType = {
  name: string;
  en: string;
  score: number;
  color: string;
  icon: React.ReactNode;
};

export type PanelCustomerRiskCategoryType = {
  min: number;
  max: number;
  label: string;
  color: string;
};

export type PanelCustomerRiskReportDataType = {
  score: number;
  factors: PanelCustomerRiskFactorType[];
  reportCode?: string;
  date?: string;
};
