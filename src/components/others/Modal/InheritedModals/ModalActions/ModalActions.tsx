import {type ReactNode, useMemo, useState} from "react";
import type {ButtonProps} from "../../../../Form/Button/ButtonTypes.ts";
import Button from "../../../../Form/Button/Button.tsx";
import Modal, {type ModalProps} from "../../Modal.tsx";
import Loading from "../../../Loading/Loading.tsx";


export type ModalActionType = {
  id: string;
  label: string;
  icon: (props: any) => ReactNode;
  textColor?: string;
  onClick: () => void;
  hasConfirm?: boolean;
  confirmDescription?: string;
  loading?: boolean;
  iconLoading?: boolean;
  confirmButtonText?: string;
  confirmButtonProps?: Partial<ButtonProps>;
}

type Props = {
  actions: ModalActionType[]
} & Partial<ModalProps>

function ModalActions(
  {actions, onClose, open}: Props
) {

  const [confirmId, setConfirmId] = useState<ModalActionType['id']>('');

  const confirmAction = useMemo(function () {
    if (!confirmId) return;

    return actions.find(action => action.id === confirmId);
  }, [confirmId, actions])
  const title = confirmAction ? confirmAction.label : 'عملیات'
  const description = confirmAction ? confirmAction?.confirmDescription : ''
  const backAction = confirmAction ? closeConfirmState : undefined

  function closeConfirmState() {
    setConfirmId('')
  }

  function onCloseHandler() {
    setTimeout(closeConfirmState, 300)
    onClose && onClose()
  }

  return (
    <Modal
      open={Boolean(open)} onClose={onCloseHandler} title={title} description={description} backAction={backAction}
    >
    {confirmAction ? (
      <div className='grid grid-cols-2 gap-x-4'>
        <Button variant='default' color='white' onClick={closeConfirmState}>
          انصراف
        </Button>

        <Button
          onClick={confirmAction?.onClick} loading={confirmAction?.loading}
          {...confirmAction.confirmButtonProps}
        >
          {confirmAction?.confirmButtonText || 'تایید'}
        </Button>
      </div>
    ) : (
      <div className='flex flex-col space-y-4'>
        {actions.map((action, index: number) => (
          <div
            key={index}
            onClick={action.hasConfirm ? () => setConfirmId(action.id) : action.onClick}
            className={`
              flex items-center space-x-2 space-x-reverse p-2 duration-200 hover:bg-gray-100 rounded-lg cursor-pointer
            `}
            >
            {action.iconLoading ? (
              <div className='flex items-center justify-center h-6 w-6'>
                <Loading size='sm' />
              </div>
              ) : (
              <action.icon
                textColor={action.textColor || 'text-black'} height={24} width={24}
              />
            )}

              <p className={action?.textColor || 'text-gray-900'}>
                {action.label}
              </p>
            </div>
          ))}
        </div>
      )}
    </Modal>
  )
}

export default ModalActions