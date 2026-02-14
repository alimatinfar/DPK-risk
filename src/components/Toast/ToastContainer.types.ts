import { IToastProps } from './Toast.type';

export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface ToastWithPosition extends IToastProps {
  position?: ToastPosition;
}

export interface IToastContainerProps {
  defaultPosition?: ToastPosition;
}