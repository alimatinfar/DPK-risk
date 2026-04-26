
export const getResponseErrorCode = (error: any) => {
  return error?.response?.data?.message?.code
};

export const getResponseErrorMessage = (error: any, defaultErrorMessage?: string) => {
  return error?.response?.data?.message?.description || error?.data?.message?.description || (defaultErrorMessage || "خطای نامشخص")
};

export const getErrorStatus = (error: any) => {
  return error?.response ? error.response.status : "خطای نامشخص";
};