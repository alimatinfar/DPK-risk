import useGetPageTitleFromSideBar from "./hooks/useGetPageTitleFromSideBar.ts";


function PanelPageTitle() {

  const {pageTitle} = useGetPageTitleFromSideBar()

  return (
    <p className='text-lg font-semibold'>
      {pageTitle}
    </p>
  )
}

export default PanelPageTitle;