import Button from "../Button/Button.tsx";
import SearchIcon from "../../svg/SearchIcon.tsx";
import Modal from "../../others/Modal/Modal.tsx";
import {type PropsWithChildren} from "react";
import ReactHookFormWrapper from "../FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import type {FilterType} from "./index.types.ts";
import useFilterForm from "./hooks/useFilterForm.ts";


export type FilterFormProps<T> = {
  filters: FilterType<T>;
  setFilters: (value: FilterType<T>) => void;
  initialFilterData: FilterType<T>;
} & PropsWithChildren

function FilterForm<T extends object>(
  {
    children, filters, setFilters, initialFilterData
  }: FilterFormProps<T>
) {

  const {
    openModalHandler, modalShouldBeRemoved, modalOpen, closeModalHandler,
    onSubmit, formMethods, resetFilters, activeFilterCount
  } = useFilterForm<T>({
    filters, setFilters, initialFilterData
  })

  return (
    <>
      <div>
        <Button
          rightIcon={<SearchIcon/>} fullWidth
          variant='default' color='white' onClick={openModalHandler}
          className={{
            default: activeFilterCount ? 'bg-[#F1F1F3]' : ''
          }}
        >
          {`جستجو${activeFilterCount ? ` (${activeFilterCount})` : ''}`}
        </Button>
      </div>

      {!modalShouldBeRemoved && (
        <Modal
          title='فیلترها'
          open={modalOpen} onClose={closeModalHandler}
        >
          <ReactHookFormWrapper
            className='grid grid-cols-2 gap-6'
            onSubmit={onSubmit} formMethods={formMethods}
          >
            {children}

            <div className='col-span-2 flex flex-col gap-y-6'>
              <Button fullWidth type='submit'>
                جستجو
              </Button>

              <Button
                fullWidth onClick={resetFilters}
                variant='link' color='red'
              >
                حذف فیلترها
              </Button>
            </div>
          </ReactHookFormWrapper>
        </Modal>
      )}
    </>
  );
}

export default FilterForm;
