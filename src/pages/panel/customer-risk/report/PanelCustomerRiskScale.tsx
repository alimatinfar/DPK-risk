import type { PanelCustomerRiskCategoryType } from './index.types';

type Props = {
  activeIndex: number;
  categories: PanelCustomerRiskCategoryType[];
};

const labels = [
  'خیلی کم',
  'کم',
  'متوسط',
  'بالا',
  'خیلی بالا',
];


function PanelCustomerRiskScale(
  {
    activeIndex, categories
  }: Props
) {
  return (
    <div className="px-[30px] pb-2 pt-[22px]">
      <div className="flex gap-1.5">
        {categories.map((category, index) => {
          const isActive = index === activeIndex;

          return (
            <span
              key={category.min}
              className="h-[7px] flex-1 rounded-full transition-all duration-500"
              style={{
                backgroundColor: isActive
                  ? category.color
                  : `color-mix(in srgb, ${category.color} 22%, white)`,
                boxShadow: isActive
                  ? `0 0 12px -2px ${category.color}`
                  : undefined,
              }}
            />
          );
        })}
      </div>

      <div className="mt-2 flex justify-between text-[10.5px] text-zinc-400">
        {labels.map((label, index) => (
          <span key={label}>
            {index === activeIndex ? (
              <b className="font-bold text-[var(--risk-color)]">
                {label}
              </b>
            ) : (
              label
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PanelCustomerRiskScale;
