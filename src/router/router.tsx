import {
  createBrowserRouter,
} from "react-router";
import ROUTER_LINKS from "../constances/routerLinks.ts";
import {lazy} from "react";
import GeneralLayout from "../layouts/GeneralLayout.tsx";

// const RemoteComponent = lazy(() => import('remoteApp/App'))
const HomePage = lazy(() => import("../pages/HomePage.tsx"));


const router = createBrowserRouter(
  [
    {
      element: <GeneralLayout />,
      children: [
        {
          path: ROUTER_LINKS.HOME,
          element: <HomePage/>,
        },

        // {
        //   path: ROUTER_LINKS.REMOTE,
        //   element: <RemoteComponent/>,
        // },
      ]
    }
  ],
  {
    basename: import.meta.env.VITE_BASE_URL,
  }
);

export default router