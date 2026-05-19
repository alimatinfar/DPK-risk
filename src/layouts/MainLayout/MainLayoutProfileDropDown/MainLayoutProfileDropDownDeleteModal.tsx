import DeleteModal from "../../../components/others/Modal/InheritedModals/DeleteModal/DeleteModal.tsx";
import type {ModalProps} from "../../../components/others/Modal/Modal.tsx";
import logoutHandler from "../../../utils/authentication/logoutHandler.ts";

function MainLayoutProfileDropDownDeleteModal(
  {open, onClose}: Pick<ModalProps, 'open' | 'onClose'>
) {
  return (
    <DeleteModal
      mainButtonOnClick={logoutHandler} open={open} onClose={onClose}
      title='خروج' description='آیا از خروج از حساب کاربری خود اطمینان دارید ؟'
      mainButtonText='بله' cancelButtonText='خیر'
    />
  );
}

export default MainLayoutProfileDropDownDeleteModal;
