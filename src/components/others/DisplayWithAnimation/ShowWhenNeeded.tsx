import type {ReactNode} from "react";


type Props = {
  children: ReactNode;
  show: boolean;
}

function ShowWhenNeeded({children, show}: Props) {
  return show ? children : null;
}

export default ShowWhenNeeded