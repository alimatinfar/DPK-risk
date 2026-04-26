export type CustomResponseType<T> = {
  data: T;
  isFailed: boolean;
  isSucceed: boolean;
  message: {
    code: string;
    description: string;
  };
  redirected: boolean;
}