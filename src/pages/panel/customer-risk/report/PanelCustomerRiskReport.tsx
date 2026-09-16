import PanelCustomerRiskReportHeader from './PanelCustomerRiskReportHeader';
import PanelCustomerRiskScale from './PanelCustomerRiskScale';
import PanelCustomerRiskFactorList from './PanelCustomerRiskFactorList';
import PanelCustomerRiskReportFooter from './PanelCustomerRiskReportFooter';

import {
  getRiskCategory,
  RISK_CATEGORIES,
} from './index.utils.tsx';

import type { PanelCustomerRiskReportDataType } from './index.types';


type Props = {
  data: PanelCustomerRiskReportDataType;
}

function PanelCustomerRiskReport({ data }: Props) {
  const { index: categoryIndex, category } =
    getRiskCategory(data.score);

  return (
    <div
      dir="rtl"
      className="relative mx-auto w-full max-w-[580px] overflow-hidden rounded-[26px] border border-zinc-200 bg-white shadow-[0_24px_60px_-32px_rgba(0,0,0,0.18)]"
      style={{
        '--risk-color': category.color,
      } as React.CSSProperties}
    >
      {/* Top line */}
      <div
        className="absolute left-[26px] right-[26px] top-0 h-0.5 rounded-full opacity-80"
        style={{
          background: `linear-gradient(
            90deg,
            transparent,
            ${category.color},
            transparent
          )`,
        }}
      />

      <PanelCustomerRiskReportHeader
        score={data.score}
        category={category}
      />

      <PanelCustomerRiskScale
        activeIndex={categoryIndex}
        categories={RISK_CATEGORIES}
      />

      <PanelCustomerRiskFactorList
        factors={data.factors}
      />

      <PanelCustomerRiskReportFooter
        reportCode={data.reportCode}
        date={data.date}
      />
    </div>
  );
}

export default PanelCustomerRiskReport;
