import useScrollPagination, {type UseScrollPaginationProps} from "./hooks/useScrollPagination";
import type {ReactNode} from "react";
import Loading from "../Loading/Loading";
import EmptyState from "../RenderLogic/EmptyState.tsx";


export type ScrollPaginationProps = {
  children: ReactNode;
  fetchPrevPageInMobile?: () => void;
  isEmpty?: boolean;
  overlayLoadingComponent?: ReactNode;
  paginationLoadingComponent?: ReactNode;
} & UseScrollPaginationProps

function ScrollPagination(
  {
    children, allCount, currentPage, rowsPerPage, setPage, loading, overflowElement, isEmpty, detectEndScrollByPosition,
    overlayLoading, overlayLoadingComponent, paginationLoadingComponent
  }: ScrollPaginationProps
) {

  const {
    showMoreElementRef, hasUnFetchedPage
  } = useScrollPagination({
    allCount, rowsPerPage, currentPage, setPage, loading, overflowElement, detectEndScrollByPosition, overlayLoading,
  })

  const childElement = isEmpty ? (
    <EmptyState />
  ) : overlayLoading ? (
    overlayLoadingComponent || <Loading />
  ) : children

  return (
    <>
      {childElement}

      {hasUnFetchedPage && (
        <div ref={showMoreElementRef} className='relative'>
          <div className='pointer-events-none h-1 w-1'></div>
        </div>
      )}

      <div className={`${(hasUnFetchedPage && !overlayLoading) ? 'w-full' : 'h-0'}`}>
        {(loading && !overlayLoading) && (paginationLoadingComponent || <Loading/>)}
      </div>
    </>
  );
}

export default ScrollPagination;