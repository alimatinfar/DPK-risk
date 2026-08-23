import SearchPageForm from "./form/SearchPageForm.tsx";
import SearchPageResult from "./result/SearchPageResult.tsx";
import SaderatLogoAndTypo from "../../components/svg/logo/SaderatLogoAndTypo.tsx";
import MainLayoutProfileSection from "../../layouts/MainLayout/MainLayoutProfileSection.tsx";
import ZeroAndOneBg from '../../assets/images/zero&one.svg'
import useSearchPage from "./hooks/useSearchPage.ts";
import getUserRoles from "../../utils/authentication/userRoles/getUserRoles.ts";
import userHasRole from "../../utils/authentication/userRoles/userHasRole.ts";
import {USER_ROLES} from "../../utils/authentication/userRoles/index.constances.ts";
import Button from "../../components/Form/Button/Button.tsx";
import {Link} from "react-router";
import ROUTER_LINKS from "../../constances/routerLinks.ts";
import SettingIcon from "../../components/svg/SettingIcon.tsx";


function SearchPage() {

  const {
    formMethods, onSubmit, resultData, isSubmittedSuccessful, activePersonType, setActivePersonType,
    error, isPending
  } = useSearchPage()

  const userRoles = getUserRoles()
  const isAdmin = userHasRole(USER_ROLES.ADMIN)

  return (
    <>
      <div className='relative'>
        <div className='relative z-30 flex items-center justify-between h-16 p-4'>
          <SaderatLogoAndTypo/>

          <div className='flex items-center gap-x-2'>
            {/*{isAdmin && (*/}
            {/*  <Link to={ROUTER_LINKS.ADMIN}>*/}
            {/*    <Button*/}
            {/*      variant='outlined' size='sm' className={{extra: 'h-10'}}*/}
            {/*      rightIcon={<SettingIcon />}*/}
            {/*    >*/}
            {/*      ورود به مدیریت سامانه ریسک*/}
            {/*    </Button>*/}
            {/*  </Link>*/}
            {/*)}*/}

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
            background: `radial-gradient(50% 398.62% at 50% 50%, #F2F4F6 0%, rgba(242, 244, 246, 0.7) 100%)`
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
