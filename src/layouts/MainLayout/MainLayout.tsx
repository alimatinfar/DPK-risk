import type {ChildrenAndClassNamePropsType} from "../../types/ChildrenPropsType.tsx";
import SaderatLogoAndTypo from "../../components/svg/logo/SaderatLogoAndTypo.tsx";
import MainLayoutProfileSection from "./MainLayoutProfileSection.tsx";


type Props = Pick<ChildrenAndClassNamePropsType, 'children'>

function MainLayout(
  {
    children
  }: Props
) {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between bg-primary-background h-16 p-4'>
        <SaderatLogoAndTypo />

        <MainLayoutProfileSection />
      </div>

      {children}
    </div>
  );
}

export default MainLayout;