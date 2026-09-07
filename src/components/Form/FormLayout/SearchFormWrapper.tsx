import Button from "../Button/Button.tsx";
import SearchIcon from "../../svg/SearchIcon.tsx";
import ReactHookFormWrapper, {type ReactHookFormWrapperProps} from "./ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import type {PropsWithChildren} from "react";
import type {ButtonProps} from "../Button/ButtonTypes.ts";


type Props = Pick<ButtonProps, 'loading'> & Pick<ReactHookFormWrapperProps, 'formMethods' | 'onSubmit'> & PropsWithChildren

function SearchFormWrapper(
  {
    formMethods, onSubmit, children, loading
  }: Props
) {
  return (
    <ReactHookFormWrapper
      formMethods={formMethods} onSubmit={onSubmit} className='grid grid-cols-3 gap-4'
    >
      {children}

      <div className='flex justify-end items-center col-start-3 pt-2.5 min-h-24'>
        <Button
          variant='outlined' rightIcon={<SearchIcon textColor='text-primary' />} type='submit'
          loading={loading}
        >
          جستجو
        </Button>
      </div>
    </ReactHookFormWrapper>
  );
}

export default SearchFormWrapper;
