import SearchPageForm, {type SearchPageFormProps} from "./form/SearchPageForm.tsx";
import SearchPageResult from "./result/SearchPageResult.tsx";
import SaderatLogoAndTypo from "../../components/svg/logo/SaderatLogoAndTypo.tsx";
import MainLayoutProfileSection from "../../layouts/MainLayout/MainLayoutProfileSection.tsx";
import ZeroAndOneBg from '../../assets/images/zero&one.svg'
import useSearchPage from "./hooks/useSearchPage.ts";
import userHasRole from "../../utils/authentication/userRoles/userHasRole.ts";
import {USER_ROLES} from "../../utils/authentication/userRoles/index.constances.ts";
import Button from "../../components/Form/Button/Button.tsx";
import {Link} from "react-router";
import ROUTER_LINKS from "../../constances/routerLinks.ts";
import SettingIcon from "../../components/svg/SettingIcon.tsx";
import useSearchStore from "./store/useSearchStore.ts";
import {useEffect} from "react";
import setDefaultValuesFromObject
  from "../../components/Form/FormLayout/ReactHookFormWrapper/utils/setDefaultValuesFromObject.ts";


function SearchPage() {

  const setStoreData = useSearchStore(state => state.setStoreData)
  const activePersonType = useSearchStore(state => state.activePersonType)

  const {
    formMethods, onSubmit, isSubmittedSuccessful,
    error, isPending
  } = useSearchPage({
    setStoreData, activePersonType
  })

  const isAdmin = userHasRole(USER_ROLES.ADMIN)

  const storeFormData = useSearchStore(state => state.formData)
  const resultData = useSearchStore(state => state.resultData)

  function setActivePersonType(value: SearchPageFormProps['activePersonType']) {
    setStoreData({activePersonType: value})
  }

  useEffect(() => {
    setDefaultValuesFromObject({
      setValue: formMethods.setValue,
      defaultValues: storeFormData
    })
  }, [storeFormData]);

  return (
    <>
      <div className='relative'>
        <div className='relative z-30 flex items-center justify-between h-16 p-4'>
          <SaderatLogoAndTypo/>

          <div className='flex items-center gap-x-2'>
            {isAdmin && (
              <Link to={ROUTER_LINKS.ADMIN}>
                <Button
                  variant='outlined' size='sm' className={{extra: 'h-10'}}
                  rightIcon={<SettingIcon />}
                >
                  ورود به مدیریت سامانه ریسک
                </Button>
              </Link>
            )}

            <MainLayoutProfileSection/>
          </div>
        </div>

        <SearchPageForm
          formMethods={formMethods} onSubmit={onSubmit} loading={isPending}
          activePersonType={activePersonType} setActivePersonType={setActivePersonType}
        />

        <div
          style={{
            backgroundImage: `url(${ZeroAndOneBg})`,
          }}
          className='z-0 absolute inset-0 bg-repeat bg-center'
        >
        </div>

        <div
          className='z-10 absolute inset-0'
          style={{
            background: `radial-gradient(50% 398.62% at 50% 50%, #F8FAFC 0%, rgba(242, 244, 246, 0.7) 100%)`
          }}
        >
        </div>
      </div>

      <SearchPageResult
        resultData={resultData} formIsSubmitted={isSubmittedSuccessful} error={error}
        loading={isPending}
      />
    </>
  );
}

export default SearchPage;
