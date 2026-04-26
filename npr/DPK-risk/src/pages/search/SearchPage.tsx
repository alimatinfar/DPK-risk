import SearchPageForm from "./form/SearchPageForm.tsx";
import SaderatLogoAndTypo from "../../components/svg/logo/SaderatLogoAndTypo.tsx";
import MainLayoutProfileSection from "../../layouts/MainLayout/MainLayoutProfileSection.tsx";
import ZeroAndOneBg from '../../assets/images/zero&one.svg'

function SearchPage() {
  return (
    <div className='relative'>
      <div className='relative z-20 flex items-center justify-between h-16 p-4'>
        <SaderatLogoAndTypo />

        <MainLayoutProfileSection />
      </div>

      <SearchPageForm/>

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
  );
}

export default SearchPage;
