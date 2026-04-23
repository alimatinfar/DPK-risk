import {Outlet} from "react-router";
import useSaveNavigate from "../hooks/useSaveNavigate.ts";

function GeneralLayout() {

  useSaveNavigate()

  return (
    <>
      <Outlet />
    </>
  )
}

export default GeneralLayout