import EmptyState from "./EmptyState";
import Loading from "../Loading/Loading";
import type {ReactNode} from "react";
import {getResponseErrorMessage} from "../../../request/utils/getResponse.ts";
import RenderLogicDefaultContainer from "./RenderLogicDefaultContainer.tsx";
import FilterEmptyState from "../../svg/RenderLogic/FilterEmptyState.tsx";

const CustomRenderLogicDefaultContainer = ({children, renderLogicDefaultContainerMinHeight}: { children: ReactNode } & Pick<RenderLogicProps, 'renderLogicDefaultContainerMinHeight'>) => {
  return (
    <RenderLogicDefaultContainer minHeight={renderLogicDefaultContainerMinHeight}>
      {children}
    </RenderLogicDefaultContainer>
  )
}

export type RenderLogicProps = {
  error?: Error | null | string,
  isLoading?: boolean,
  loadingElement?: ReactNode,
  children: ReactNode,
  errorComponent?: ReactNode,
  isEmpty?: boolean,
  emptyText?: string,
  emptyElement?: any,
  renderLogicDefaultContainerMinHeight?: string,
  hasFilter?: boolean,
}

function RenderLogic(
  {
    error, isLoading, loadingElement, children, isEmpty, emptyText, errorComponent,
    emptyElement, renderLogicDefaultContainerMinHeight, hasFilter
  }: RenderLogicProps
) {
  if (error) {
    return (
      <CustomRenderLogicDefaultContainer renderLogicDefaultContainerMinHeight={renderLogicDefaultContainerMinHeight}>
        {errorComponent || (
          <span className='text-red-500'>
            {getResponseErrorMessage(error) || 'دریافت اطلاعات با خطا مواجه شد'}
          </span>
        )}
      </CustomRenderLogicDefaultContainer>
    )
  } else if (isLoading) {
    return (
      <CustomRenderLogicDefaultContainer renderLogicDefaultContainerMinHeight={renderLogicDefaultContainerMinHeight}>
        {loadingElement || <Loading/>}
      </CustomRenderLogicDefaultContainer>
    )
  } else if (isEmpty) {
    return (
      <CustomRenderLogicDefaultContainer renderLogicDefaultContainerMinHeight={renderLogicDefaultContainerMinHeight}>
        {hasFilter ? (
          <EmptyState icon={<FilterEmptyState/>}/>
        ) : emptyElement || <EmptyState title={emptyText}/>}
      </CustomRenderLogicDefaultContainer>
    )
  } else {
    return children
  }

}

export default RenderLogic;