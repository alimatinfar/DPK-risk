
type Props = {
  size: string;
  bgClass?: string;
}

function Skeleton({size, bgClass}: Props) {
  return (
    <div className={`animate-pulse ${bgClass || 'bg-slate-200'} ${size}`}></div>
  )
}

export default Skeleton
