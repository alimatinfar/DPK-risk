import ReactHookFormWrapper, {
  type ReactHookFormWrapperProps
} from "../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import SearchPageFormSharedFields from "./SearchPageFormSharedFields.tsx";
import SearchPageFormExtraFields from "./SearchPageFormExtraFields.tsx";
import SearchPageFormSelectPerson from "./SearchPageFormSelectPerson.tsx";
import Button from "../../../components/Form/Button/Button.tsx";
import DeleteIcon from "../../../components/svg/DeleteIcon.tsx";
import useSearchPageForm from "./hooks/useSearchPageForm.ts";
import RiskIcon from "../../../components/svg/logo/RiskIcon.tsx";
import {SEARCH_PAGE_MAX_WIDTH, SEARCH_PAGE_PADDING_X} from "../SearchPage.constances.ts";
import type {SearchPageFormPersonType} from "./SearchPageForm.types.ts";
import type {SetStateType} from "../../../types/SetStateType.ts";

type ActivePersonType = SearchPageFormPersonType | undefined

export type SearchPageFormProps = {
  activePersonType: ActivePersonType;
  setActivePersonType: SetStateType<ActivePersonType>;
  loading: boolean;
} & Pick<ReactHookFormWrapperProps, 'formMethods' | 'onSubmit'>

function SearchPageForm(
  {
    formMethods, onSubmit, activePersonType, setActivePersonType, loading
  }: SearchPageFormProps
) {

  const {
    removeAdvancedSearchSection
  } = useSearchPageForm({
    formMethods, setActivePersonType
  })

  return (
    <div className={`relative z-20 flex flex-col gap-y-8 w-full py-8 ${SEARCH_PAGE_PADDING_X} ${SEARCH_PAGE_MAX_WIDTH}`}>
      <div className='flex flex-col items-center gap-y-2 text-center'>
        <RiskIcon/>

        <p className='text-3xl font-semibold text-primary-text'>
          سامانه مدیریت ریسک مشتریان
        </p>

        <p className='text-secondary-text'>
          برای آغاز فرآیند لطفاً اطلاعات مورد نیاز را در پنل جستجو وارد نمایید. در صورت نیاز به اعمال معیارهای دقیق‌تر،
          امکان افزودن فیلترهای اضافی فراهم شده است.
        </p>
      </div>

      <ReactHookFormWrapper
        formMethods={formMethods} onSubmit={onSubmit}
      >
        <div className='flex flex-col gap-y-4'>
          <SearchPageFormSharedFields loading={loading} />

          <div className='flex'>
            <SearchPageFormSelectPerson
              activePersonType={activePersonType}
              setActivePersonType={setActivePersonType}
            />
          </div>

          <SearchPageFormExtraFields activePersonType={activePersonType}/>
        </div>

        {activePersonType && (
          <div>
            <Button
              variant='link' size='sm' color='red'
              onClick={removeAdvancedSearchSection}
              rightIcon={<DeleteIcon textColor='text-red-800' />}
            >
              حذف فیلترهای پیشرفته
            </Button>
          </div>
        )}
      </ReactHookFormWrapper>
    </div>
  );
}

export default SearchPageForm;
