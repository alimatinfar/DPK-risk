import {useNavigate} from "react-router";
import {useEffect} from "react";
import ROUTER_LINKS from "../constances/routerLinks.ts";
import MainLayout from "../layouts/MainLayout/MainLayout.tsx";


function HomePage() {

  const navigate = useNavigate()

  useEffect(() => {
    navigate(ROUTER_LINKS.SEARCH)
  }, []);

  return (
    <div>
    </div>
  );
}

export default HomePage;