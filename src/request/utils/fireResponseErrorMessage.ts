import toastPromise from "../../utils/toastPromise.ts";
import type {CustomResponseType} from "../types/CustomResponseType.ts";

function fireResponseErrorMessage(error: {data: CustomResponseType<any>}) {
  toastPromise().then((toast: any) => toast.error(error?.data?.message?.description))
}

export default fireResponseErrorMessage