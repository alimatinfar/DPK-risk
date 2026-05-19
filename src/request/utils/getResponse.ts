
export const getResponseErrorCode = (error: any) => {
  return error?.response?.data?.message?.code
};

export const getResponseErrorMessage = (error: any, defaultErrorMessage?: string) => {
  return error?.data?.messages?.[0]?.description || (defaultErrorMessage || "خطای نامشخص")
};

export const getErrorStatus = (error: any) => {
  return error?.response ? error.response.status : "خطای نامشخص";
};
