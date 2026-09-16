import type { PanelCustomerRiskFactorType } from './index.types';
import PanelCustomerRiskFactorItem from './PanelCustomerRiskFactorItem';

type Props = {
  factors: PanelCustomerRiskFactorType[];
};

function PanelCustomerRiskFactorList({ factors }: Props) {
  return (
    <div className="px-[30px] pb-[22px] pt-3.5">
      {factors.map((factor) => (
        <PanelCustomerRiskFactorItem
          key={factor.name}
          factor={factor}
        />
      ))}
    </div>
  );
}

export default PanelCustomerRiskFactorList;
