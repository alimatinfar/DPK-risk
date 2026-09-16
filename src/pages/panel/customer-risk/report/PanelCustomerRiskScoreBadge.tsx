import { panelCustomerRiskToFa } from './index.utils.tsx';

type Props = {
  score: number;
};

function PanelCustomerRiskScoreBadge({ score }: Props) {
  return (
    <div className="relative flex h-28 w-28 shrink-0 flex-col items-center justify-center overflow-visible rounded-full border-[1.5px] border-[color:color-mix(in_srgb,var(--risk-color)_30%,white)] bg-[color:color-mix(in_srgb,var(--risk-color)_9%,white)]">
      <div className="absolute -inset-2 rounded-full border-[1.5px] border-dashed border-[color:color-mix(in_srgb,var(--risk-color)_35%,white)] opacity-70" />

      <b className="relative z-[1] text-[28px] font-extrabold leading-none text-[var(--risk-color)]">
        {panelCustomerRiskToFa(score)}
      </b>

      <span className="relative z-[1] mt-1.5 text-[10.5px] text-zinc-400">
        امتیاز ریسک
      </span>
    </div>
  );
}

export default PanelCustomerRiskScoreBadge;
