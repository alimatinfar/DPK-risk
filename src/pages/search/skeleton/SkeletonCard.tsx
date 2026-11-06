import type {JSX} from "react";
import Skeleton from "../../../components/others/Skeleton/Skeleton";

interface SkeletonCardProps {
  rows?: number;
}

function SkeletonCard({rows = 2}: SkeletonCardProps): JSX.Element {

  const skeletonBgClass = "bg-slate-200 dark:bg-dark-4"

  return (
    <div className="flex-1 border border-slate-200 dark:border-dark-2 overflow-hidden rounded-lg">
      <div
        className="flex justify-between items-center p-2 bg-slate-100 dark:bg-dark-2 border-b border-slate-200 dark:border-dark-4">
        <Skeleton size="w-[104px] h-[25px] rounded-sm" bgClass={skeletonBgClass}/>
        <Skeleton size="w-5 h-5 rounded-sm" bgClass={skeletonBgClass}/>
      </div>
      <div className="flex flex-col p-2 gap-2">
        {[...Array(rows)].map((_, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <Skeleton size="w-[62px] h-[20px] rounded-sm" bgClass={skeletonBgClass}/>
            <Skeleton size="w-[62px] h-[20px] rounded-sm" bgClass={skeletonBgClass}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkeletonCard;
