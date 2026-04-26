import {useNavigate} from "react-router";

import type {NavigateFunction} from "react-router";
import {useEffect} from "react";

let navigate: NavigateFunction | null = null

export const setNavigate = (nav: NavigateFunction) => {
  navigate = nav
}

export const navigateTo = (path: string) => {
  if (navigate) {
    navigate(path)
  }
}

function useSaveNavigate() {
  const navigate = useNavigate()

  useEffect(() => {
    setNavigate(navigate)
  }, [navigate])
}

export default useSaveNavigate