import type { JSX } from "react";
import Skeleton from "../../../components/others/Skeleton/Skeleton.tsx";
import { SEARCH_PAGE_MAX_WIDTH } from "../SearchPage.constances.ts";
import SkeletonSection from "./SkeletonSection.tsx";

function SearchPageSkeleton(): JSX.Element {
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
}

export default SearchPageSkeleton;
