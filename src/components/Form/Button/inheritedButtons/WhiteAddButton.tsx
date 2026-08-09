import type {ButtonProps} from "../ButtonTypes.ts";
import Button from "../Button.tsx";
import PlusCircleIcon from "../../../svg/PlusCircleIcon.tsx";

function WhiteAddButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      rightIcon={<PlusCircleIcon textColor='text-black' />}
      variant='default'
      color='white'
    />
  );
}

export default WhiteAddButton;
