import type {ButtonProps} from "../ButtonTypes.ts";
import Button from "../Button.tsx";
import PlusCircleIcon from "../../../svg/PlusCircleIcon.tsx";

function AddButton(props: ButtonProps) {
  return (
    <Button {...props} rightIcon={<PlusCircleIcon />} />
  );
}

export default AddButton;
