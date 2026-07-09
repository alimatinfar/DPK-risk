import EmptyState from "./EmptyState";
import Loading from "../Loading/Loading";
import {type ReactNode, Suspense} from "react";
import {getResponseErrorMessage} from "../../../request/utils/getResponse.ts";
import RenderLogicDefaultContainer from "./RenderLogicDefaultContainer.tsx";
import FilterEmptyState from "../../svg/RenderLogic/FilterEmptyState.tsx";
import ErrorState from "../../svg/RenderLogic/ErrorState.tsx";

const CustomRenderLogicDefaultContainer = ({children, renderLogicDefaultContainerMinHeight}: {
  children: ReactNode
} & Pick<RenderLogicProps, 'renderLogicDefaultContainerMinHeight'>) => {
  return (
    <RenderLogicDefaultContainer minHeight={renderLogicDefaultContainerMinHeight}>
      {children}
    </RenderLogicDefaultContainer>
  )
}

export type RenderLogicProps = {
  error?: Error | null;
  isLoading?: boolean;
  loadingElement?: ReactNode;
  children: ReactNode;
  errorComponent?: ReactNode;
  isEmpty?: boolean;
  emptyText?: string;
  emptyElement?: any;
  renderLogicDefaultContainerMinHeight?: string;
  hasFilter?: boolean;
  removeContainer?: boolean;
}

function RenderLogic(
  {
    error, isLoading, loadingElement, children, isEmpty, emptyText, errorComponent,
    emptyElement, renderLogicDefaultContainerMinHeight, hasFilter, removeContainer
  }: RenderLogicProps
) {
  let allContent;

  if (error || isLoading || isEmpty) {
    const content = error ? (
      errorComponent || (
        <ErrorState error={getResponseErrorMessage(error, 'دریافت اطلاعات با خطا مواجه شد')}/>
      )
    ) : isLoading ? (
      loadingElement || <Loading/>
    ) : isEmpty ? (
      hasFilter ? (
        <EmptyState icon={<FilterEmptyState/>}/>
      ) : emptyElement || <EmptyState title={emptyText}/>
    ) : null

    allContent = removeContainer ? content : (
      <CustomRenderLogicDefaultContainer renderLogicDefaultContainerMinHeight={renderLogicDefaultContainerMinHeight}>
        {content}
      </CustomRenderLogicDefaultContainer>
    )
  } else {
    allContent = children
  }

  return (
    <Suspense fallback={
      loadingElement || <Loading size='sm' />
    }>
      {allContent}
    </Suspense>
  )
}

export default RenderLogic;
