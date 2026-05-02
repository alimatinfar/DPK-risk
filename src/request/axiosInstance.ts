import axios, {type AxiosResponse} from "axios";
import {getErrorStatus} from "./utils/getResponse.ts";
import type {CustomResponseType} from "./types/CustomResponseType.ts";
// import {navigateTo} from "../hooks/useSaveNavigate.ts";


const axiosInstance = axios.create({
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
})

axiosInstance.interceptors.request.use(async (request: any) => {
  request.baseURL = `${import.meta.env.VITE_PAY_MATTERS_API_ADDRESS}`

  request.headers["Access-Control-Allow-Origin"] = ["*"];

  //TODO get token from sso
  // const token = getToken();
  //
  // if (token) {
  //   request.headers.Authorization = `Bearer ${token}`;
  // }

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
      //TODO logout logic should be set
      // removeToken()
      // navigateTo(ROUTER_LINKS.AUTH)
      return
    }

    return Promise.reject(err)
  }
)

export default axiosInstance;

