import axios, {type AxiosResponse} from "axios";
import {getErrorStatus} from "./utils/getResponse.ts";
import type {CustomResponseType} from "./types/CustomResponseType.ts";
import getToken from "../utils/authentication/getToken.ts";
import logoutHandler from "../utils/authentication/logoutHandler.ts";
import {loadConfigFile} from "./loadConfigFile/loadConfigFile.ts";
// import {navigateTo} from "../hooks/useSaveNavigate.ts";



const axiosInstance = axios.create({
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
})

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
    const errorStatus = getErrorStatus(err)
    if ([403, 401].includes(errorStatus)) {
      logoutHandler().then()
      return
    }

    return Promise.reject(err)
  }
)

export default axiosInstance;

