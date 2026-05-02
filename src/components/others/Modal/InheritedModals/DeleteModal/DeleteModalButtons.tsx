import Button from "../../../../Form/Button/Button.tsx";


export type DeleteModalButtonsProps = {
  cancelButtonOnClick: () => void;
  mainButtonOnClick: () => void;
  mainButtonLoading?: boolean;
  cancelButtonText?: string;
  mainButtonText?: string;
}

function DeleteModalButtons(
  {cancelButtonOnClick, mainButtonOnClick, mainButtonLoading, cancelButtonText, mainButtonText}: DeleteModalButtonsProps
) {
  return (
    <div className='grid grid-cols-2 gap-x-4'>
      <Button variant='default' color='white' onClick={cancelButtonOnClick}>
        {cancelButtonText || 'انصراف'}
      </Button>

      <Button variant='filled' color='red' onClick={mainButtonOnClick} loading={mainButtonLoading}>
        {mainButtonText || 'تایید'}
      </Button>
    </div>
  )
}

export default DeleteModalButtons