import ReactDOM from "react-dom";
import type {ChildrenPropsType} from "../../../types/ChildrenPropsType.tsx";

const ModalPortalComponent = ({ children }: ChildrenPropsType) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById("modal-portal-root")!
  );
};

export default ModalPortalComponent;