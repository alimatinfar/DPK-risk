

type Props = {
  title: string;
  isGreen?: boolean;
}

function HighRiskIndividualsTimeLineHelpSection(
  {title, isGreen}: Props
) {
  return (
    <div className={`flex items-center gap-x-1 ${isGreen ? 'pr-1.5' : 'pl-1.5'}`}>
      <span className={`
        h-[5px] w-[5px] rounded-full
        ${isGreen ? 'bg-green-500' : 'bg-red-500'}
      `}></span>
      <p className='text-[10px] text-gray-500'>
        {title}
      </p>
    </div>
  )
}

export default HighRiskIndividualsTimeLineHelpSection
