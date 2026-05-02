export type CustomResponseType<T> = {
  data: T;
  rowCount: number;
  totalCount: number;
  detail: string | null;
  messages: {
    code: string;
    description: string;
  }[];
  isSucceed: boolean;
  isFailed: boolean;
  redirected: boolean;
}