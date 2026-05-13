import type { JSX } from "react";
import Skeleton from "../../../components/others/Skeleton/Skeleton.tsx";
import { SEARCH_PAGE_MAX_WIDTH } from "../SearchPage.constances.ts";
interface SkeletonCardProps {
  rows?: number;
}
interface SkeletonSectionProps {
  cardRows?: number;
}
const SearchPageSkeleton = (): JSX.Element => {
  const SkeletonCard = ({ rows = 2 }: SkeletonCardProps): JSX.Element => (
    <div className="flex-1 border border-gray-200 rounded-lg">
      <div className="flex justify-between items-center p-2 bg-gray-100 border-b border-gray-200">
        <Skeleton size="w-[104px] h-[25px] rounded-sm" bgClass="bg-gray-200" />
        <Skeleton size="w-5 h-5 rounded-sm" bgClass="bg-gray-200" />
      </div>
      <div className="flex flex-col p-2 gap-2">
        {[...Array(rows)].map((_, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <Skeleton size="w-[62px] h-[20px] rounded-sm" bgClass="bg-gray-200" />
            <Skeleton size="w-[62px] h-[20px] rounded-sm" bgClass="bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );

  const SkeletonSection = ({ cardRows = 2 }: SkeletonSectionProps): JSX.Element => (
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

  return (
    <div className={`${SEARCH_PAGE_MAX_WIDTH} w-full`}>
      <div className="py-4 px-2.5">
        <Skeleton size="w-[104px] h-[25px] rounded-sm" bgClass="bg-gray-200" />
      </div>
      <div className="flex flex-col gap-4">
        <SkeletonSection cardRows={2} />
        <SkeletonSection cardRows={3} />
        <SkeletonSection cardRows={3} />
      </div>
    </div>
  );
};

export default SearchPageSkeleton;
