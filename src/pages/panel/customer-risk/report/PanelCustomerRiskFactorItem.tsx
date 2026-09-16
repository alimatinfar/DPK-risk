import type { PanelCustomerRiskFactorType } from './index.types';
import { panelCustomerRiskToFa } from './index.utils.tsx';

type Props = {
  factor: PanelCustomerRiskFactorType;
};

function PanelCustomerRiskFactorItem({ factor }: Props) {
  return (
    <div
      className="flex items-center gap-[15px] border-b border-zinc-100 py-3.5 last:border-b-0"
      style={{
        '--factor-color': factor.color,
      } as React.CSSProperties}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-[color:color-mix(in_srgb,var(--factor-color)_22%,white)] bg-[color:color-mix(in_srgb,var(--factor-color)_8%,white)] text-[var(--factor-color)]">
        {factor.icon}
      </div>

      <div className="flex-1">
        <h4 className="text-[13.5px] font-bold">
          {factor.name}
        </h4>

        <span className="text-[10.5px] text-zinc-400">
          {factor.en}
        </span>
      </div>

      <div className="min-w-16 rounded-[13px] border border-[color:color-mix(in_srgb,var(--factor-color)_22%,white)] bg-[color:color-mix(in_srgb,var(--factor-color)_8%,white)] px-2.5 py-1.5 text-center">
        <b className="block text-[17px] font-extrabold leading-tight text-[var(--factor-color)]">
          {panelCustomerRiskToFa(factor.score)}
        </b>

        <span className="text-[9px] text-zinc-400">
          امتیاز
        </span>
      </div>
    </div>
  );
}

export default PanelCustomerRiskFactorItem;
