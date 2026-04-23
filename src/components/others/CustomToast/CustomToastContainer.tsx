import {ToastContainer} from "react-toastify";


type Props = {
  className?: string
}

export default function CustomToastContainer({className}: Props) {
  return (
    <ToastContainer
      toastStyle={{fontFamily: 'IRANYekan', fontWeight: 500}}
      rtl={true}
      position="top-center"
    />
  )
}