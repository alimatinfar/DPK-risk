import axios, {type AxiosResponse} from "axios";
import {getErrorStatus} from "./utils/getResponse.ts";
import type {CustomResponseType} from "./types/CustomResponseType.ts";
import getToken from "../utils/authentication/getToken.ts";
import type {ConfigFileType} from "../types/ConfigFileType.ts";
import logoutHandler from "../utils/authentication/logoutHandler.ts";
// import {navigateTo} from "../hooks/useSaveNavigate.ts";



const axiosInstance = axios.create({
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
})

export const loadConfigFile = async () => {
  const res = await fetch('/data.json');
  if (!res.ok) {
    throw new Error('Failed to load config');
  }
  return res.json() as Promise<ConfigFileType>;
};

axiosInstance.interceptors.request.use(async (request: any) => {
  const config = await loadConfigFile();
  request.baseURL = `${config.baseUrl}api/`

  request.headers["Access-Control-Allow-Origin"] = ["*"];

  const token = getToken();

  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<CustomResponseType<any>, any, any>) => {
    if (response?.data?.isFailed) {
      return Promise.reject(response)
    }

    return response
  },
  err => {
    //TODO error handling should be set
    // fireResponseErrorMessage(err)
    const errorStatus = getErrorStatus(err)
    if ([403, 401].includes(errorStatus)) {
      logoutHandler()
      return
    }

    return Promise.reject(err)
  }
)

export default axiosInstance;

