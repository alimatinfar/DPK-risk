import toastPromise from "../../utils/toastPromise.ts";
import {getResponseErrorMessage} from "./getResponse.ts";

function fireResponseErrorToast() {
  return {
    onError: (error) => {
      const errorMessage = getResponseErrorMessage(error)
      toastPromise().then(toast => toast.error(errorMessage))
    }
  }
}

export default fireResponseErrorToast
