import type { JSX } from "react";
import Skeleton from "../../../components/others/Skeleton/Skeleton";

interface SkeletonCardProps {
  rows?: number;
}

function SkeletonCard({ rows = 2 }: SkeletonCardProps): JSX.Element {
  return (
    <div className="flex-1 border border-slate-200 rounded-lg">
      <div className="flex justify-between items-center p-2 bg-slate-100 border-b border-slate-200">
        <Skeleton size="w-[104px] h-[25px] rounded-sm" bgClass="bg-slate-200" />
        <Skeleton size="w-5 h-5 rounded-sm" bgClass="bg-slate-200" />
      </div>
      <div className="flex flex-col p-2 gap-2">
        {[...Array(rows)].map((_, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <Skeleton size="w-[62px] h-[20px] rounded-sm" bgClass="bg-slate-200" />
            <Skeleton size="w-[62px] h-[20px] rounded-sm" bgClass="bg-slate-200" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkeletonCard;
