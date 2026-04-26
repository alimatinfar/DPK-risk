import ReactQueryProvider from "./components/ClientComponents/ReactQueryProvider.tsx";
import SuspenseLoading from "./components/others/Loading/SuspenseLoading.tsx";
import {RouterProvider} from "react-router";
import CustomToastContainer from "./components/others/CustomToast/CustomToastContainer.tsx";
import router from "./router/router.tsx";


function App() {

  return (
    <ReactQueryProvider>
      <SuspenseLoading>
        <RouterProvider router={router}/>
        <CustomToastContainer/>
      </SuspenseLoading>
    </ReactQueryProvider>
  )
}

export default App
