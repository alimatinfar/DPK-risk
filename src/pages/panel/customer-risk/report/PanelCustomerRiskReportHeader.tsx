import PanelCustomerRiskScoreBadge from './PanelCustomerRiskScoreBadge.tsx';
import {
  getRiskRange,
} from './index.utils.tsx';
import type { PanelCustomerRiskCategoryType } from './index.types';

type Props = {
  score: number;
  category: PanelCustomerRiskCategoryType;
};


function PanelCustomerRiskReportHeader(
  {
    score, category
  }: Props
) {
  return (
    <div className="relative flex items-center gap-6 border-b border-zinc-100 bg-[linear-gradient(150deg,color-mix(in_srgb,var(--risk-color)_7%,white)_0%,white_65%)] px-[30px] pb-6 pt-[30px]">
      <PanelCustomerRiskScoreBadge score={score} />

      <div>
        <h2 className="text-[17px] font-extrabold">
          نتیجهٔ محاسبه ریسک
        </h2>

        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[color:color-mix(in_srgb,var(--risk-color)_28%,white)] bg-[color:color-mix(in_srgb,var(--risk-color)_10%,white)] px-[15px] py-1.5 text-[12.5px] font-bold text-[var(--risk-color)] shadow-[0_4px_14px_-6px_color-mix(in_srgb,var(--risk-color)_45%,transparent)]">
          <i className="h-[7px] w-[7px] rounded-full bg-[var(--risk-color)] shadow-[0_0_8px_var(--risk-color)]" />

          <span>{category.label}</span>
        </div>

        <div className="mt-2 text-[11px] text-zinc-400">
          بازهٔ این دسته:{' '}
          <b className="font-bold text-[var(--risk-color)]">
            {getRiskRange(category)}
          </b>
        </div>
      </div>
    </div>
  );
}

export default PanelCustomerRiskReportHeader;
