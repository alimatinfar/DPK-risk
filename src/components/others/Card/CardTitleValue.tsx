
export type CardTitleValueProps = {
  label: string;
  value: string | number;
}

function CardTitleValue(
  {label, value}: CardTitleValueProps
) {
  return (
    <div
      className='flex items-center justify-between text-sm text-secondary-text'
    >
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

export default CardTitleValue;
