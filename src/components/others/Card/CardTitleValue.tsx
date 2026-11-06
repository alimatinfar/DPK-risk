
export type CardTitleValueProps = {
  label: string;
  value: string | number;
  labelClass?: string;
  valueClass?: string;
}

function CardTitleValue(
  {label, value, labelClass, valueClass}: CardTitleValueProps
) {
  return (
    <div
      className='flex items-center justify-between text-sm text-secondary-text'
    >
      <span className={labelClass || ''}>{label}</span>
      <span className={valueClass || ''}>{value}</span>
    </div>
  );
}

export default CardTitleValue;
