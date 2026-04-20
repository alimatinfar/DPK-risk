import ReactQueryProvider from "./components/ClientComponents/ReactQueryProvider.tsx";
import useSaveNavigate from "./hooks/useSaveNavigate.ts";


function App() {

  useSaveNavigate()

  return (
    <ReactQueryProvider>
      <></>
    </ReactQueryProvider>
  )
}

export default App
