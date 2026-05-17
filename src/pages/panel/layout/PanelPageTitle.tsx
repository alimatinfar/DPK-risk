import useGetPageTitleFromSideBar from "./hooks/useGetPageTitleFromSideBar.ts";
import BackIconClickable from "../../../components/others/Icon/BackIconClickable.tsx";
import {useNavigate} from "react-router";


type Props = {
  title?: string;
  hasBack?: boolean;
}

function PanelPageTitle(
  {title, hasBack}: Props
) {

  const {pageTitle} = useGetPageTitleFromSideBar()

  const navigate = useNavigate()

  const titleElement = (
    <p className='text-lg font-semibold'>
      {title || pageTitle || ''}
    </p>
  )

  return hasBack ? (
    <div className='flex items-center gap-x-2'>
      <BackIconClickable onBackRoute={() => navigate(-1)}/>

      {titleElement}
    </div>
  ) : titleElement
}

export default PanelPageTitle;