import type { JSX } from "react";
import Skeleton from "../../../components/others/Skeleton/Skeleton";
import SkeletonCard from "./SkeletonCard";
interface SkeletonSectionProps {
  cardRows?: number;
}
function SkeletonSection({ cardRows = 2 }: SkeletonSectionProps): JSX.Element {
  return (
    <div className="border border-gray-200 rounded-lg">
      <div className="flex justify-between items-center py-2 px-4 bg-gray-50 border-b border-gray-200">
        <Skeleton size="w-[104px] h-[30px] rounded-sm" bgClass="bg-gray-200" />
        <Skeleton size="w-5 h-5 rounded-sm" bgClass="bg-gray-200" />
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
