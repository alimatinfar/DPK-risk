import SearchPageForm from "./form/SearchPageForm.tsx";
import SearchPageResult, {type SearchPageResultProps} from "./result/SearchPageResult.tsx";
import SaderatLogoAndTypo from "../../components/svg/logo/SaderatLogoAndTypo.tsx";
import MainLayoutProfileSection from "../../layouts/MainLayout/MainLayoutProfileSection.tsx";
import ZeroAndOneBg from '../../assets/images/zero&one.svg'
import type {SearchPageResultCardDataType} from "./result/SearchPageResult.types.ts";
import {useMemo, useState} from "react";
import {SEARCH_PAGE_FAKE_DATA} from "./SearchPage.constances.ts";
import useReactHookFormWrapper
  from "../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import type {SearchPageFormDataType} from "./form/SearchPageForm.types.ts";
import scrollToElementById from "../../utils/scrollToElementById.ts";
import {ELEMENT_IDS} from "../../constances/elementIDs.ts";
import toastPromise from "../../utils/toastPromise.ts";

function SearchPage() {

  const [resultData, setResultData] = useState<SearchPageResultProps['resultData']>([])

  function onSubmitHandler(formData: SearchPageFormDataType) {
    if (Object.values(formData).every(value => !value))
      return toastPromise().then(toast => toast.error('تکمیل حداقل یک فیلد الزامی است'))

    console.log({formData})
    setResultData(SEARCH_PAGE_FAKE_DATA)
    setTimeout(() => scrollToElementById(ELEMENT_IDS.SEARCH_RESULT), 300)
  }

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper<SearchPageFormDataType>({
    onSubmitHandler
  })

  // const resultData: SearchPageResultProps['resultData'] = useMemo(function () {
  //   return
  // }, [])

  return (
    <>
      <div className='relative'>
        <div className='relative z-20 flex items-center justify-between h-16 p-4'>
          <SaderatLogoAndTypo/>

          <MainLayoutProfileSection/>
        </div>

        <SearchPageForm
          formMethods={formMethods} onSubmit={onSubmit}
        />

        <div
          style={{
            backgroundImage: `url(${ZeroAndOneBg})`,
          }}
          className='z-0 absolute inset-0 bg-repeat bg-center'
        >
        </div>

        <div
          className='z-10 absolute inset-0 '
          style={{
            background: `radial-gradient(50% 398.62% at 50% 50%, #F2F4F6 0%, rgba(242, 244, 246, 0.7) 100%)`
          }}
        >
        </div>
      </div>

      <SearchPageResult
        resultData={resultData}
      />
    </>
  );
}

export default SearchPage;
