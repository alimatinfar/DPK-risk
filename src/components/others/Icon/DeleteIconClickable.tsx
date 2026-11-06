import DeleteIcon from "../../svg/DeleteIcon.tsx";
import IconClickable from "./IconClickable.tsx";


type Props = {
  onClick: () => void;
}

function DeleteIconClickable(
  {onClick}: Props
) {
  return (
    <IconClickable
      hoverClass='hover:bg-red-100 dark:hover:bg-dark-2'
      onClick={onClick}
    >
      <DeleteIcon/>
    </IconClickable>
  );
}

export default DeleteIconClickable;
