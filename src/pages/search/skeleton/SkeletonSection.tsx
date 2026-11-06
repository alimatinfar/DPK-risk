import type { JSX } from "react";
import Skeleton from "../../../components/others/Skeleton/Skeleton";
import SkeletonCard from "./SkeletonCard";
interface SkeletonSectionProps {
  cardRows?: number;
}
function SkeletonSection({ cardRows = 2 }: SkeletonSectionProps): JSX.Element {

  const skeletonBg = "bg-slate-200 dark:bg-dark-2"

  return (
    <div className="border border-slate-200 dark:border-dark-2 rounded-lg overflow-hidden">
      <div className="flex justify-between items-center py-2 px-4 bg-slate-50 dark:bg-dark-2 border-b border-slate-200 dark:border-dark-2">
        <Skeleton size="w-[104px] h-[30px] rounded-sm" bgClass={skeletonBg} />
        <Skeleton size="w-5 h-5 rounded-sm" bgClass={skeletonBg} />
      </div>
      <div className="flex justify-around items-center p-4 gap-3">
        {[...Array(4)].map((_, idx) => (
          <SkeletonCard rows={cardRows} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default SkeletonSection;
