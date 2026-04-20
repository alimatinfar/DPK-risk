import {Suspense} from 'react';
import Loading from "./Loading.tsx";
import type {ChildrenPropsType} from "../../../types/ChildrenPropsType.tsx";

function SuspenseLoading({children}: ChildrenPropsType) {
  return (
    <Suspense fallback={(
      <div className={'flex-center min-h-75'}>
        <Loading />
      </div>
    )}>
      {children}
    </Suspense>
  );
}

export default SuspenseLoading;