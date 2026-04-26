'use client'

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {type ChildrenAndClassNamePropsType} from "../../types/ChildrenPropsType.tsx";

const queryClient = new QueryClient()

function ReactQueryProvider({children}: Pick<ChildrenAndClassNamePropsType, 'children'>) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default ReactQueryProvider