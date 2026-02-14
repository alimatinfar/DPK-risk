import { ReactNode } from 'react';

export type ToastSeverity = 'error' | 'success' | 'info' | 'warning';

export interface IToastProps {
  id: string | number;
  message: ReactNode;
  severity?: ToastSeverity;
  autoClose?: number;
  sticky?: boolean;
  duration?: number;
}