import useModalOpenBoolean from "../../../../../hooks/modal/useModalOpenBoolean.ts";
import useCustomBlocker from "../../../../../hooks/useCustomBlocker.ts";
import {useEffect} from "react";
import ROUTER_LINKS from "../../../../../constances/routerLinks.ts";
import toastPromise from "../../../../../utils/toastPromise.ts";
import {useNavigate} from "react-router";
import type {AdminHighRiskIndividualsFormPageShareProps} from "../AdminHighRiskIndividualsFormPageShare.tsx";


type Props = Pick<AdminHighRiskIndividualsFormPageShareProps, 'formIsDirty' | 'clearForm' | 'formSubmitted'>

function useAdminHighRiskIndividualsFormPageShare(
  {
    clearForm, formSubmitted, formIsDirty
  }: Props
) {

  const {
    openModalHandler: openExitFormModalHandler, closeModalHandler: closeExitFormModalHandler,
    open: exitFormOpen, shouldBeRemoved: exitFormShouldBeRemoved
  } = useModalOpenBoolean(false)

  const {
    blocker, pageIsBlocked
  } = useCustomBlocker(formIsDirty && !formSubmitted)

  useEffect(() => {
    if (!formSubmitted) return

    navigate(ROUTER_LINKS.ADMIN_HIGH_RISK_INDIVIDUAL)
    toastPromise().then(toast => toast.success('ثبت افراد پر ریسک با موفقیت انجام شد'))
    clearForm()
  }, [formSubmitted]);

  function closeExitFormModalAndResetBlocker() {
    closeExitFormModalHandler()
    blocker.reset && blocker.reset()
  }

  useEffect(() => {
    if (pageIsBlocked) {
      openExitFormModalHandler()
    }
  }, [pageIsBlocked]);

  const navigate = useNavigate()

  function exitFormHandler() {
    clearForm()
    blocker.proceed && blocker.proceed()
  }

  return {
    exitFormShouldBeRemoved, exitFormOpen,
    closeExitFormModalAndResetBlocker, exitFormHandler
  }
}

export default useAdminHighRiskIndividualsFormPageShare;
