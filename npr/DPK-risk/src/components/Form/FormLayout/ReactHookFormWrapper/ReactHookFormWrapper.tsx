import {type ReactNode} from "react";
import {FormProvider, type UseFormReturn} from "react-hook-form";
import HiddenButton from "./HiddenButton";

export type ReactHookFormWrapperProps = {
  formMethods: UseFormReturn<any, any, any>,
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  className?: string;
  children: ReactNode;
  hiddenButton?: boolean;
}

function ReactHookFormWrapper({formMethods, onSubmit, className, children, hiddenButton}: ReactHookFormWrapperProps) {
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={onSubmit} className={className || ''}>
        {children}

        {hiddenButton && <HiddenButton />}
      </form>
    </FormProvider>
  );
}

export default ReactHookFormWrapper;