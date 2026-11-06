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
      className='h-8 w-8'
    >
      <DeleteIcon width='100%' height='100%' />
    </IconClickable>
  );
}

export default DeleteIconClickable;
